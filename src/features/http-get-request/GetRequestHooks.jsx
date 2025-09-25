import { useState, useEffect } from "react";

const GetRequestHooks = props => {
  const { searchedPackageName } = props;

  const [npmReactData, setNpmReactData] = useState("");

  // Simple GET request using fetch
  useEffect(() => {
    const API_NPM = import.meta.env.VITE_API_NPM;

    fetch(API_NPM + `/v2/search?q=${searchedPackageName}`)
      .then(response => response.json())
      .then(data => setNpmReactData(data));
  }, [searchedPackageName]);

  return (
    <>
      <div className="mt-8 flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 maxMd:w-128 maxSm:w-96 maxXs:w-72 max2xs:w-60 max3xs:w-56 p-4 text-2xl font-medium bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          Simple Get request using Fetch
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 h-auto w-164 maxMd:w-128 maxSm:w-96 maxXs:w-72 max2xs:w-60 max3xs:w-56 p-4 text-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          Total {searchedPackageName} Packages in NPM:
          <span className="text-red-500 dark:text-red-400">{npmReactData?.total}</span>
        </h2>
      </div>
    </>
  );
};

export default GetRequestHooks;
