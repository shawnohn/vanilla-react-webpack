import React from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button.js";

function Container() {
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "Hit like button."),
    React.createElement(Button, { label: "Like" }),
    React.createElement(Button, { label: "Dislike" })
  );
}
const domContainer = document.querySelector("#react-root");
const root = createRoot(domContainer);
root.render(React.createElement(Container));
