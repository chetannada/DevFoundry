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
    ],
  },
]);

export default appRouter;
