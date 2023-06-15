"use client";

import { Playlist } from "@/components/Playlist";
import {
  House,
  MagnifyingGlass,
  Books,
  Plus,
  ArrowRight,
  CaretRight,
  CaretLeft,
  Heart,
  Shuffle,
  SkipBack,
  PlayCircle,
  Play,
  SkipForward,
  Repeat,
  MicrophoneStage,
  List,
  DesktopTower,
  SpeakerLow,
  CornersOut,
} from "phosphor-react";

import zeneto from "/public/zeneto.png";
import gustavolima from "/public/gustavolima.png";
import israelerodolfo from "/public/israelerodolfo.png";
import matheusekauan from "/public/matheusekauan.png";
import { BigPlaylist } from "@/components/BigPlaylist";
import { VerticalPlaylist } from "@/components/VerticalPlaylist";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-1">
        <aside className="w-80 fixed left-0 bottom-0 top-0  p-4 mt-6 bg-zinc-950">
          <nav className="flex flex-col gap-5 bg-zinc-800 w-full p-3 rounded-md">
            <a
              href=""
              className="flex gap-3 items-center hover:text-zinc-50 hover:transition-colors"
            >
              <House weight="fill" size={28} />
              <span className="text-base">Inicio</span>
            </a>
            <a
              href=""
              className="flex gap-3 items-center  text-zinc-400 hover:text-zinc-50 hover:transition-colors"
            >
              <MagnifyingGlass size={28} />
              <span className="text-base">Buscar</span>
            </a>
          </nav>
          <div className="flex flex-col bg-zinc-800 w-full  mt-4 p-3 rounded-md ">
            <div className="flex justify-between items-center mb-4">
              <a
                href=""
                className="flex gap-3 items-center  text-zinc-400 hover:text-zinc-50 hover:transition-colors"
              >
                <Books size={28} />
                <span className="text-base">Sua biblioteca</span>
              </a>
              <div className="flex gap-2 text-zinc-400">
                <a
                  href=""
                  className="hover:text-zinc-50 hover:transition-colors"
                >
                  {" "}
                  <Plus size={24} />
                </a>
                <a
                  href=""
                  className="hover:text-zinc-50 hover:transition-colors"
                >
                  {" "}
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
            <Playlist title="S" banner_url={zeneto} />
            <Playlist title="SS" banner_url={gustavolima} />
            <Playlist title="Sertanejo" banner_url={israelerodolfo} />
            <Playlist title="M&K" banner_url={matheusekauan} />
          </div>
        </aside>
        <main className="flex-1 w-[1100px] p-6 bg-zinc-800 mt-10 h-auto rounded-md absolute left-[340px] pb-32">
          <div className="flex gap-1">
            <button className="rounded-full bg-black/40 p-1">
              <CaretLeft size={18} weight="light" />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <CaretRight size={18} weight="light" />
            </button>
          </div>
          <h1 className="text-2xl mt-6 font-bold">Boa noite</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <BigPlaylist title="Energia Matinal" banner_url={zeneto} />
            <BigPlaylist title="Sons Relaxantes" banner_url={gustavolima} />
            <BigPlaylist title="Festa de Verão" banner_url={israelerodolfo} />
            <BigPlaylist title="M&K" banner_url={matheusekauan} />
            <BigPlaylist
              title="Sons do Mundo: Explorando Culturas"
              banner_url={zeneto}
            />
            <BigPlaylist title="Pop Contemporâneo" banner_url={gustavolima} />
          </div>

          <h1 className="text-2xl mt-6 font-bold">Álbuns populares</h1>
          <div className="flex gap-4 mt-4">
            <VerticalPlaylist title="Sons do Mundo" banner_url={zeneto} />
            <VerticalPlaylist title="Festa de Verão" banner_url={gustavolima} />
            <VerticalPlaylist title="Sertanejo" banner_url={israelerodolfo} />
            <VerticalPlaylist
              title="Energia Matinal"
              banner_url={matheusekauan}
            />
          </div>
        </main>
      </div>
      <footer className="fixed bottom-0 right-0 left-0 bg-zinc-950 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={matheusekauan}
            alt=""
            width={50}
            height={50}
            className="rounded"
          />
          <div className="flex flex-col">
            <strong className="text-base text-zinc-50">Decide ai</strong>
            <span className="text-xs text-zinc-400">Matheus & Kauan</span>
          </div>
          <Heart size={22} weight="fill" color="green" />
        </div>
        <div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-6">
              <Shuffle size={22} weight="light" />
              <SkipBack size={22} weight="fill" />
              <button className="bg-white p-2 rounded-full flex items-center justify-center ">
                <Play size={24} color="black" weight="fill" />
              </button>

              <SkipForward size={22} weight="fill" />
              <Repeat size={22} weight="fill" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500">0:40</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
                <div className="h-1 rounded-full w-28 bg-zinc-200"></div>
              </div>
              <span className="text-xs text-zinc-500">3:01</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MicrophoneStage size={22} weight="thin" />
          <List size={22} weight="thin" />
          <DesktopTower size={22} weight="thin" />
          <SpeakerLow size={22} weight="thin" />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
          </div>
          <CornersOut size={22} weight="thin" />
        </div>
      </footer>
    </div>
  );
}
