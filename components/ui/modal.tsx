"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CrossIcon } from "./icons/CrossIcon";
import { Button } from "./button";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && router.back()}
      className="fixed inset-0 bg-black/50 z-50  overflow-y-scroll"
    >
      <div className="absolute  left-1/2 -translate-x-1/2 top-5">
        {children}
        <Button
          onClick={() => router.back()}
          className="absolute top-0 right-[-4rem] text-white"
        >
          <CrossIcon />
        </Button>
      </div>
    </div>
  );
};
