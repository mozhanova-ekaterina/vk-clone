'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
