"use client";
import s from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Hero />
      </main>
    </>
  );
}
