import { useState } from "react";
import GetRequestAsyncAwait from "./GetRequestAsyncAwait";
import GetRequestErrorHandlingWithTryCatch from "./GetRequestErrorHandling";
import GetRequestSetHeaders from "./GetRequestSetHeaders";
import GetRequestHooks from "./GetRequestHooks";

const HttpGetRequest = () => {
  const [packageName, setPackageName] = useState("React");
  const [searchedPackageName, setSearchedPackageName] = useState("React");

  const handleSubmit = event => {
    event.preventDefault();
    setSearchedPackageName(packageName);
  };

  const handleChange = event => {
    setPackageName(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-auto p-4 text-2xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-card-light dark:shadow-card-dark">
          React HTTP GET Requests for NPM API using Fetch in Different way
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="w-full mt-8 flex flex-row flex-wrap gap-3 justify-center items-end">
          <div className="min-w-96 sm:min-w-64 xsm:min-w-48 flex flex-col gap-1">
            <label htmlFor="npmPackage">NPM Packages</label>
            <input
              id="npmPackage"
              type="text"
              className="text-base p-2.5 w-full rounded-lg bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
              name="npmPackage"
              value={packageName}
              onChange={handleChange}
              placeholder="Search NPM Packages"
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
        <GetRequestHooks searchedPackageName={searchedPackageName} />
        <GetRequestAsyncAwait searchedPackageName={searchedPackageName} />
        <GetRequestErrorHandlingWithTryCatch searchedPackageName={searchedPackageName} />
        <GetRequestSetHeaders searchedPackageName={searchedPackageName} />
      </div>
    </>
  );
};

export default HttpGetRequest;
