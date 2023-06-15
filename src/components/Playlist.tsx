import Image, { StaticImageData } from "next/image";
import { Play } from "./Play";

interface PlaylistProps {
  title: string;
  banner_url: StaticImageData;
}

export const Playlist = ({ banner_url, title }: PlaylistProps) => {
  return (
    <button className="flex  gap-2 mb-3">
      <Image
        src={banner_url}
        alt=""
        width={50}
        height={50}
        className="rounded"
      />
      <div className="flex flex-col justify-around text-start">
        <h1 className="text-base">{title}</h1>
        <p className="text-xs text-zinc-400">Playlist - Sergio Winkelstroter</p>
      </div>
    </button>
  );
};
