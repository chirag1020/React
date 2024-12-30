import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StateABC from "./lec2/statemgmt1";
// import StateXYZ from "./lec2/statemgmt2";
import StateMerge from "./lec2/statemgmt3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateMerge/>
  </StrictMode>
);