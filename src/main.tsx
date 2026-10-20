import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

import "./index.css";
// import { InstagromApp } from "./07-useOptimistic/IntagromApp";
// import { ClientInformation } from "./08-use-suspense/ClientInformation";
// import { getUserAction } from "./08-use-suspense/actions/get-user.action";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";
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
    {/* <InstagromApp /> */}

    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col gap-4">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense> */}

    <ProfessionalApp />
  </StrictMode>,
);
