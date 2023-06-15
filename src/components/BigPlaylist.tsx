import Image, { StaticImageData } from "next/image";
import { Play } from "./Play";

interface PlaylistProps {
  title: string;
  banner_url: StaticImageData;
}

export const BigPlaylist = ({ banner_url, title }: PlaylistProps) => {
  return (
    <button className="group flex gap-2 mb-3 bg-zinc-700 rounded-md  items-center justify-between pr-3">
      <Image
        src={banner_url}
        alt=""
        width={90}
        height={90}
        className="rounded"
      />
      <div className="flex flex-col justify-around text-center">
        <h1 className="text-base font-bold">{title}</h1>
      </div>
      <div className="invisible group-hover:visible group-hover:transition-all">
        <Play />
      </div>
    </button>
  );
};
