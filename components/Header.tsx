import { Pacifico } from "next/font/google";
import { Button } from "./ui/button";
import Link from "next/link";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <header className="flex justify-between py-5">
      <Link href="/" className="text-3xl">
        <span className={`${pacifico.className} text-primary`}>Insta</span>Clone
      </Link>
      <Button>upload button</Button>
    </header>
  );
};
