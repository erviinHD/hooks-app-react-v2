import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import "./index.css";
import { InstagromApp } from "./07-useOptimistic/IntagromApp";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { MemoHook } from "./06-memos/MemoHook";

// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { PokemonPage } from "./03-examples/PokemonPage";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { HooksApp } from "./HooksApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <MemoHook /> */}
    {/* <Me moCounter /> */}
    <InstagromApp />
  </StrictMode>,
);
