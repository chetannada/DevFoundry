import { useEffect, useState } from "react";

const GetRequestErrorHandlingWithTryCatch = props => {
  const { searchedPackageName } = props;

  const [npmReactData, setNpmReactData] = useState("");
  const [errorData, setErrorData] = useState("");

  // GET request using fetch with Error Handling using async/await and try/catch block
  useEffect(() => {
    const API_NPM = import.meta.env.VITE_API_NPM;

    async function getData() {
      try {
        const response = await fetch(API_NPM + "/v2/invalid_url");
        const json = await response.json();
        if (!response.ok) {
          const error = `${response.status} - ` + json.message;
          throw new Error(error);
        }

        setNpmReactData(json);
      } catch (error) {
        setErrorData(error.toString());
        console.log("There was an " + error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-2xl font-medium bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-2xl shadow-card-light dark:shadow-card-dark">
          Get request using Fetch with Error Handling using async/await and try/catch block
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 text-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-card-light dark:shadow-card-dark">
          {npmReactData && `Total ${searchedPackageName} Packages in NPM: ${npmReactData?.total}`}
          <span className="text-red-500 dark:text-red-400">{errorData}</span>
        </h2>
      </div>
    </>
  );
};

export default GetRequestErrorHandlingWithTryCatch;
