import Header from "@/components/header";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
    <Header />
    <div className="text-center max-w-2xl mx-auto mt-24">
  <h1 className="text-3xl md:text-4xl font-medium mb-2">
    This is an assignment based on next, nest and mongo database.{" "}
  </h1>
  <span>It is a software named Library management System.</span>
  <br />
  <Link
    href={`/`}
    className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6"
  >
    Go Back To Home
  </Link>
</div>

    </>
  );
}
