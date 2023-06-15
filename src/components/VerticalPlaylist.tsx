import Image, { StaticImageData } from "next/image";
import { Play } from "./Play";

interface PlaylistProps {
  title: string;
  banner_url: StaticImageData;
}

export const VerticalPlaylist = ({ banner_url, title }: PlaylistProps) => {
  return (
    <button className="group flex flex-col gap-2 mb-3 bg-zinc-700 rounded-md w-[150px] relative">
      <Image
        src={banner_url}
        alt=""
        width={150}
        height={150}
        className="rounded"
      />
      <div className="invisible group-hover:visible group-hover:transition-all absolute right-1 top-2/4">
        <Play />
      </div>
      <div className="flex flex-col justify-around p-2 text-start">
        <h1 className="text-base font-bold">{title}</h1>
        <span className="text-zinc-400 text-sm">
          As novidades e hits do sertanejo!
        </span>
      </div>
    </button>
  );
};
