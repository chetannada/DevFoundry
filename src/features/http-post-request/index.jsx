import { useState } from "react";
import PostRequestHooks from "./PostRequestHooks";
import PostRequestAsyncAwait from "./PostRequestAsyncAwait";
import PostRequestErrorHandlingWithTryCatch from "./PostRequestErrorHandling";
import PostRequestSetHeaders from "./PostRequestSetHeaders";

const HttpPostRequest = () => {
  const [userName, setUserName] = useState("Chetan");
  const [searchedUserName, setSearchedUserName] = useState("Chetan");

  const handleSubmit = event => {
    event.preventDefault();
    setSearchedUserName(userName);
  };

  const handleChange = event => {
    setUserName(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-auto p-4 text-2xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          React HTTP POST Requests for Reqres API using Fetch in Different way
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-full mt-8 flex flex-row flex-wrap gap-3 justify-center items-end ">
          <div className="min-w-96 sm:min-w-64 xsm:min-w-48 flex flex-col gap-1">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              className="text-base p-2.5 w-full rounded-lg bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
              name="userName"
              value={userName}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
          </div>

          <button
            className="font-bold py-2.5 px-4 rounded-md text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div className="my-5 space-y-5">
        <PostRequestHooks searchedUserName={searchedUserName} />
        <PostRequestAsyncAwait searchedUserName={searchedUserName} />
        <PostRequestErrorHandlingWithTryCatch searchedUserName={searchedUserName} />
        <PostRequestSetHeaders searchedUserName={searchedUserName} />
      </div>
    </>
  );
};

export default HttpPostRequest;
