import React from "react";
import { createRoot } from "react-dom/client";
import App from "components/pages/main";

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
