"use client";

import OutlineButton from "./_components/ui/OutlineButton";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center h-[550px] flex-col gap-6">
      <h1 className="text-5xl font-semibold mb-5">This page could not be found.. :( </h1>
      <OutlineButton href="http://localhost:4000" text="Go back home" />
    </main>
  );
}
