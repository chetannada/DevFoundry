import { createBrowserRouter } from "react-router-dom";
import Main from "../../main";
import Error from "../layout/Error";
import Body from "../layout/Body";
import ToDoList from "../features/todo-list";
import ReduxCounter from "../features/redux-counter";
import GoogleAuth from "../features/google-auth";
import HttpGetRequest from "../features/http-get-request";
import HttpPostRequest from "../features/http-post-request";
import ImageGeneration from "../features/image-generation";
import ImageGallery from "../features/image-gallery";
import GuessNumber from "../features/guess-number";
import PasswordStrength from "../features/password-strength";
import StringConverter from "../features/string-converter";
import Accordion from "../features/accordion";
import NumberToWords from "../features/number-to-words";
import Stepper from "../features/stepper";
import Stopwatch from "../features/stopwatch";
import PasswordGenerator from "../features/password-generator";
import WordCounter from "../features/word-counter";
import StarRating from "../features/star-rating";

// Define application routes
const appRouter = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Main />, // Main layout component
    errorElement: <Error />, // Fallback for invalid routes
    children: [
      {
        path: "/", // Default child route
        element: <Body />, // Home page component
      },
      {
        path: "/todo-list",
        element: <ToDoList />,
      },
      {
        path: "/redux-counter",
        element: <ReduxCounter />,
      },
      {
        path: "/google-auth",
        element: <GoogleAuth />,
      },
      {
        path: "/http-get-request",
        element: <HttpGetRequest />,
      },
      {
        path: "/http-post-request",
        element: <HttpPostRequest />,
      },
      {
        path: "/image-generation",
        element: <ImageGeneration />,
      },
      {
        path: "/image-gallery",
        element: <ImageGallery />,
      },
      {
        path: "/guess-number",
        element: <GuessNumber />,
      },
      {
        path: "/password-strength",
        element: <PasswordStrength />,
      },
      {
        path: "/string-converter",
        element: <StringConverter />,
      },
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/number-to-words",
        element: <NumberToWords />,
      },
      {
        path: "/stepper",
        element: <Stepper />,
      },
      {
        path: "/stopwatch",
        element: <Stopwatch />,
      },
      {
        path: "/password-generator",
        element: <PasswordGenerator />,
      },
      {
        path: "/word-counter",
        element: <WordCounter />,
      },
      {
        path: "/star-rating",
        element: <StarRating />,
      },
    ],
  },
]);

export default appRouter;
