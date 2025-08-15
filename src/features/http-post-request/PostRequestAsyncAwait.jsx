import { useEffect, useState } from "react";

const PostRequestAsyncAwait = (props) => {
  const { searchedUserName } = props;

  const [reqresData, setReqresData] = useState("");

  // POST request using fetch with async/await
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
      await fetch(API_REQRES + "/api/users", reqOptions)
        .then((response) => response.json())
        .then((json) => setReqresData(json));
    }

    postData();
  }, [searchedUserName]);

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center text-center">
        <h1 className="h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 bg-slate-200 border-4 rounded-xl mt-3 text-2xl font-medium">
          Post request using Fetch async/await
        </h1>
        <h2 className="flex flex-row justify-center flex-wrap gap-2 max-sm h-auto w-164 md:w-128 sm:w-96 xsm:w-72 mob:w-60 xmob:w-56 p-4 border-4 text-2xl bg-slate-50 rounded-xl">
          UserId for {searchedUserName} :{" "}
          <span className="text-red-800">{reqresData?.id}</span>
        </h2>
      </div>
    </>
  );
};
export default PostRequestAsyncAwait;
