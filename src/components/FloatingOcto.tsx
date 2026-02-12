"use client";

import { useState } from "react";
import Image from "next/image";
import OctoRunner from "./OctoRunner";

export default function FloatingOcto() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <div
        className="floating-octo"
        title="Click me!"
        onClick={() => setPlaying(true)}
      >
        <Image src="/octopus_blue.png" alt="PS" width={40} height={40} style={{ objectFit: "contain" }} />
      </div>
      {playing && <OctoRunner onClose={() => setPlaying(false)} />}
    </>
  );
}
