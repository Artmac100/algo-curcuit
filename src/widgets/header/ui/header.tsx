import { ThemeModeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { HamburgerMenu } from "./hamburger-menu";

export const Header = () => {
  return (
    <header className="px-4 py-2 shadow-md flex justify-between">
      <div className="flex gap-6">
        <HamburgerMenu />
        <a
          className="pointer-events-none flex gap-2 lg:pointer-events-auto lg:p-0"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/articles/logo.svg"
            alt="Logo"
            // className="dark:invert"
            width={32}
            height={48}
            priority
          />
          <div className="text-2xl font-semibold  no-underline">
            ALGO_CURCUIT
          </div>
        </a>
      </div>
      <ThemeModeToggle />
    </header>
  );
};
