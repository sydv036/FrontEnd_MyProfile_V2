import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterConfiguration from "./routers/Routers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfiguration />
  </StrictMode>
);
