"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">This page could not be found.. </h1>
      <Link href="/" className="inline-block px-6 py-3 text-lg">
        Go back home
      </Link>
    </main>
  );
}
