"use client";
import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/About";
import Solutions from "@components/Solutions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
      </main>
    </>
  );
}
