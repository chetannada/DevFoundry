import { useState } from "react";
import { signInWithGoogle } from "./FirebaseConfig";
import toast from "react-hot-toast";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const GoogleAuth = () => {
  const currentTime = new Date().getTime();
  const storedDetails = JSON.parse(localStorage.getItem("userDetails")) ?? {};

  const [userDetails, setUserDetails] = useState(storedDetails);

  const signIn = async () => {
    try {
      const result = await signInWithGoogle();
      const userResult = {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        expirationTime: result.user.stsTokenManager.expirationTime,
      };
      localStorage.setItem("userDetails", JSON.stringify(userResult));
      setUserDetails(userResult);
    } catch (error) {
      console.log(error.toString());
      toast.error(error.toString());
    }
  };

  const singOut = () => {
    localStorage.removeItem("userDetails");
    setUserDetails({});
  };

  return (
    <div className="mt-16 flex justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center px-5 py-10 w-152 overflow-hidden bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-4xl">Google Authentication</h1>
          <h3 className="text-center text-base">
            Facilitates a secure login process by allowing users to authenticate their identity
            through their Google account, ensuring both ease of access and enhanced security.
          </h3>
        </div>
        {userDetails?.expirationTime - currentTime > 0 ? (
          <div className="flex flex-row maxSm:flex-col justify-center items-center gap-8">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={userDetails?.photoURL}
                alt={userDetails?.displayName || "User Avatar"}
                className="w-14 h-14 object-cover rounded-full border-2 border-text-light dark:border-text-dark"
              />
              <h1 className="font-bold">
                Welcome{" "}
                <span className="text-secondary-light dark:text-secondary-dark">
                  {userDetails?.displayName} !!
                </span>
              </h1>
            </div>
            <button
              className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-br from-purple-500 to-rose-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 text-center"
              onClick={singOut}
            >
              <FiLogOut size={18} />
              Logout
            </button>
          </div>
        ) : (
          <button
            className="flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-br from-purple-500 to-rose-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2"
            onClick={signIn}
          >
            <FiLogIn size={18} />
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default GoogleAuth;
