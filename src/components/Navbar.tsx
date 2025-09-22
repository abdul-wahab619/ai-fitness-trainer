"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {
  DumbbellIcon,
  HomeIcon,
  UserIcon,
  ZapIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            AI-Fitness<span className="text-primary">Trainer</span>.ai
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* MOBILE: hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            {open ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (slide down) */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-3">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <HomeIcon className="w-4 h-4" /> Home
                </Link>

                <Link
                  href="/generate-program"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <DumbbellIcon className="w-4 h-4" /> Generate
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <UserIcon className="w-4 h-4" /> Profile
                </Link>

                <Link href="/generate-program" onClick={() => setOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>

                <div className="pt-2">
                  <UserButton />
                </div>
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    className="w-full mb-2"
                    onClick={() => setOpen(false)}
                  >
                    Sign In
                  </Button>
                </SignInButton>

                <SignUpButton>
                  <Button
                    className="w-full bg-primary text-primary-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
