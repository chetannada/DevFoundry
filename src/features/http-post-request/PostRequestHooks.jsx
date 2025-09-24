import { useState, useEffect } from "react";

const PostRequestHooks = props => {
  const { searchedUserName } = props;

  const [reqresData, setReqresData] = useState("");

  // Simple POST request with a JSON body using fetch
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
    fetch(API_REQRES + "/api/users", reqOptions)
      .then(response => response.json())
      .then(data => setReqresData(data));
  }, [searchedUserName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-2xl font-medium bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          Simple Post request using Fetch
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          UserId for {searchedUserName} :{" "}
          <span className="text-red-500 dark:text-red-400">{reqresData?.id}</span>
        </h2>
      </div>
    </>
  );
};

export default PostRequestHooks;
