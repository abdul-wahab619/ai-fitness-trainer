import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-red-500">
      HomePage
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
