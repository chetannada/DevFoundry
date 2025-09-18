import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { increment, decrement, reset, incrementByValue, decrementByValue } from "./counterSlice";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const countValue = useSelector(state => state.counter.value);

  const handleInputValue = event => {
    setInputValue(Number(event.target.value));
  };

  return (
    <>
      <div className="py-10 p-2 space-y-6 w-164 overflow-hidden bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-card-light dark:shadow-card-dark">
        <h1 className="text-center text-4xl ">React Redux Counter App</h1>
        <div className="px-4 space-y-4 flex flex-col justify-center items-center">
          <div className="flex flex-col flex-wrap items-center justify-center text-center">
            <h2 className="flex flex-row justify-center flex-wrap gap-2 text-3xl">
              Current Value:
              <span className="text-green-700 dark:text-green-400">{countValue}</span>
            </h2>
          </div>

          <div
            className="pb-4
           flex flex-row flex-wrap justify-center items-center gap-6 "
          >
            <button
              className="font-bold py-2 px-4 rounded-md text-white bg-gradient-to-br from-green-500 to-green-700 hover:bg-gradient-to-bl"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="font-bold
              py-2 px-4 rounded-md text-white bg-gradient-to-br from-red-500 to-red-700 hover:bg-gradient-to-bl"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="font-bold
              py-2 px-4 rounded-md text-white bg-gradient-to-br from-amber-500 to-amber-700 hover:bg-gradient-to-bl"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>

          <input
            className="text-sm rounded-lg block w-4/5 mob:w-full p-2.5 bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark placeholder:text-gray-400"
            placeholder="Type any Value"
            type="number"
            value={inputValue}
            onChange={handleInputValue}
            onKeyDown={event => ["e", "E", "+", "-"].includes(event.key) && event.preventDefault()}
          />

          <button
            className="font-bold py-2 px-4 rounded-md text-white bg-gradient-to-br from-lime-500 to-lime-700 hover:bg-gradient-to-bl"
            onClick={() => dispatch(incrementByValue(inputValue))}
          >
            Increment by Value
          </button>
          <button
            className="font-bold py-2 px-4 rounded-md text-white bg-gradient-to-br from-red-500 to-red-700 hover:bg-gradient-to-bl"
            onClick={() => dispatch(decrementByValue(inputValue))}
          >
            Decrement by Value
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
