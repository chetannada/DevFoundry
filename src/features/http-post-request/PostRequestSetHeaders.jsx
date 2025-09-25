import { useState, useEffect } from "react";

const PostRequestSetHeaders = props => {
  const { searchedUserName } = props;

  const [reqresData, setReqresData] = useState("");

  // POST request using fetch with set headers
  useEffect(() => {
    const API_REQRES = import.meta.env.VITE_API_REQRES;
    async function postData() {
      const reqOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer my-token",
          "My-Custom-Header": "foobar",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ name: searchedUserName }),
      };
      const response = await fetch(API_REQRES + "/api/users", reqOptions);
      const json = await response.json();
      setReqresData(json);
    }

    postData();
  }, [searchedUserName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 maxMd:w-128 maxSm:w-96 maxXs:w-72 max2xs:w-60 max3xs:w-56 p-4 text-2xl font-medium bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          Post request using Fetch with Set Headers
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 maxMd:w-128 maxSm:w-96 maxXs:w-72 max2xs:w-60 max3xs:w-56 p-4 text-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
          UserId for {searchedUserName} :{" "}
          <span className="text-red-500 dark:text-red-400">{reqresData?.id}</span>
        </h2>
      </div>
    </>
  );
};

export default PostRequestSetHeaders;
