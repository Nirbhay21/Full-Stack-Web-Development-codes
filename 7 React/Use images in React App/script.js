import React from "react";
import App from "./App.js"
import { createRoot } from "react-dom/client"

const root = document.getElementById("root")._root || createRoot(document.getElementById("root"));
document.querySelector("#root")._root = root;

root.render(<App />);

if (module.hot) {
    module.hot.accept();
}