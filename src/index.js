import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// edit material ui theme
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Navbar from "./Component/Nav/Navbar";
import Footer from "./Component/Footer/Footer";
import { store } from "./store";
import { Provider } from "react-redux";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fe4e15",
    },
    secondary: {
      main: "#1EA384",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <App />
        <Footer />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
