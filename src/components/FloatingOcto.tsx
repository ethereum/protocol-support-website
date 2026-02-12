"use client";

import Image from "next/image";

export default function FloatingOcto() {
  return (
    <div
      className="floating-octo"
      title="Protocol Support"
      onClick={(e) => {
        const el = e.currentTarget;
        el.style.transform = "scale(1.3) rotate(15deg)";
        setTimeout(() => { el.style.transform = ""; }, 400);
      }}
    >
      <Image src="/octopus_blue.png" alt="PS" width={40} height={40} style={{ objectFit: "contain" }} />
    </div>
  );
}
