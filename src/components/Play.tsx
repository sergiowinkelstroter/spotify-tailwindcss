import { Play as PlayIcon } from "phosphor-react";

export const Play = () => {
  return (
    <button className="bg-green-600 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-500 ">
      <PlayIcon size={26} color="black" weight="fill" />
    </button>
  );
};
