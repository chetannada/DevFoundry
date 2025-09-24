import { useEffect, useState } from "react";

const GetRequestAsyncAwait = props => {
  const { searchedPackageName } = props;

  const [npmReactData, setNpmReactData] = useState("");

  // GET request using fetch with async/await
  useEffect(() => {
    const API_NPM = import.meta.env.VITE_API_NPM;

    async function getData() {
      await fetch(API_NPM + `/v2/search?q=${searchedPackageName}`)
        .then(response => response.json())
        .then(json => setNpmReactData(json));
    }

    getData();
  }, [searchedPackageName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-2xl font-medium bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          Get request using Fetch async/await
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          Total {searchedPackageName} Packages in NPM:
          <span className="text-red-500 dark:text-red-400">{npmReactData?.total}</span>
        </h2>
      </div>
    </>
  );
};
export default GetRequestAsyncAwait;
