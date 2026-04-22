import { Provider } from "react-redux";
import Layout from "./Layout";
import store from "../store/store";
import { ThemeProvider } from "../context/ThemeContext";

const Main = () => {
  return (
    <>
      {/* Provide store for managing state */}
      <Provider store={store}>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Main;
