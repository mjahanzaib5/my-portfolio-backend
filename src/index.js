import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/400.css"; // normal
import "@fontsource/roboto/500.css"; // medium (for buttons/headings)
import "@fontsource/roboto/700.css"; // bold
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);