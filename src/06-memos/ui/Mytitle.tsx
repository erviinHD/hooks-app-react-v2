import React from "react";

interface Props {
  title: string;
}

export const Mytitle = React.memo(({ title }: Props) => {
  console.log("My Title rerender");

  return <div className="text-3xl">{title}</div>;
});
