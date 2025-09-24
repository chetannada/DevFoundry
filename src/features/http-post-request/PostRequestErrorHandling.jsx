import { useEffect, useState } from "react";

const PostRequestErrorHandlingWithTryCatch = props => {
  const { searchedUserName } = props;

  const [reqresData, setReqresData] = useState("");
  const [errorData, setErrorData] = useState("");

  // Post request using fetch with Error Handling using async/await and try/catch block
  useEffect(() => {
    const API_REQRES = import.meta.env.VITE_API_REQRES;
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify({ name: searchedUserName }),
    };

    async function postData() {
      try {
        const response = await fetch(API_REQRES + "/invalid_url", reqOptions);

        if (!response.ok) {
          const error = response.status;
          throw new Error(error);
        } else {
          const data = await response.json();
          setReqresData(data);
        }
      } catch (error) {
        setErrorData(error.toString());
        console.error(error);
      }
    }

    postData();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-2xl font-medium bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          Post request using Fetch with Error Handling using async/await and try/catch block
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          {reqresData && `UserId for ${searchedUserName}: ${reqresData?.id}`}
          <span className="text-red-500 dark:text-red-400">{errorData}</span>
        </h2>
      </div>
    </>
  );
};

export default PostRequestErrorHandlingWithTryCatch;
