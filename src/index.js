import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";

// const proTheme = extendTheme(theme);
// const extenstion = {
//   colors: { ...proTheme.colors, brand: proTheme.colors.cyan },
//   fonts: {
//     heading: "'Inter Variable', -apple-system, system-ui, sans-serif",
//     body: "'Inter Variable', -apple-system, system-ui, sans-serif",
//   },
// };
// const myTheme = extendTheme(extenstion, proTheme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider
  // theme={myTheme}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
