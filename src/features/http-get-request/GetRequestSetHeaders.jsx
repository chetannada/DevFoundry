import { useState, useEffect } from "react";

const GetRequestSetHeaders = props => {
  const { searchedPackageName } = props;

  const [npmReactData, setNpmReactData] = useState("");

  // GET request using fetch with set headers
  useEffect(() => {
    const API_NPM = import.meta.env.VITE_API_NPM;

    async function getData() {
      const reqOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        mode: "cors",
      };
      const response = await fetch(API_NPM + `/v2/search?q=${searchedPackageName}`, reqOptions);
      const json = await response.json();
      setNpmReactData(json);
    }

    getData();
  }, [searchedPackageName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-2xl font-medium bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-2xl shadow-card-light dark:shadow-card-dark">
          GET request using Fetch with Set Headers
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-card-light dark:shadow-card-dark">
          Total {searchedPackageName} Packages in NPM:
          <span className="text-red-500 dark:text-red-400">{npmReactData?.total}</span>
        </h2>
      </div>
    </>
  );
};

export default GetRequestSetHeaders;
