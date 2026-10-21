"use client";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-foreground">
          Portfolio
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#projects"
            className="text-base text-muted hover:text-primary"
          >
            Projects
          </Link>

          <Link
            href="#skills"
            className="text-base text-muted hover:text-primary"
          >
            Skills
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover "
        >
          Contact me easily
        </button>
      </nav>
      {open && <ContactModal setOpen={setOpen} />}
    </header>
  );
};

export default Navbar;
