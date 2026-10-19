import React from "react";

interface Props {
  subtitle: string;
  callMyApi: () => void;
}

export const MySubtitle = React.memo(({ subtitle, callMyApi }: Props) => {
  console.log("Mu subtitle render");

  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={callMyApi}
      >
        Llamar función
      </button>
    </>
  );
});
