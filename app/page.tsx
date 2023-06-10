import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import Frame from "./components/frame";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Frame />
    </div>
  );
}
