import { useCallback, useState } from "react";
import { Mytitle } from "./ui/Mytitle";
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");

  const handleMyAPICall = useCallback(() => {
    console.log("llamar a api" + subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Memo App</h1>

      <Mytitle title={title} />

      <MySubtitle subtitle={subtitle} callMyApi={handleMyAPICall} />

      <button
        className="bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("Hello, " + new Date().getTime())}
      >
        Cambiar título
      </button>
      <button
        className="bg-blue-800 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubtitle("World")}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};
