"use client";

import { Pacifico } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between py-5">
      <Link href="/" className="text-3xl">
        <span className={`${pacifico.className} text-primary`}>VK</span>Clone
      </Link>
      {session ? (
        <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Button>
      ) : (
        <Button onClick={() => signIn("github", { callbackUrl: "/profile" })}>
          Sign In
        </Button>
      )}
    </header>
  );
};
