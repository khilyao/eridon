"use client";
import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/About";
import Solutions from "@components/Solutions";
import Agricaltural from "@components/Agricultural";
import News from "@components/News";
import Contacts from "@components/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Agricaltural />
        <News />
        <Contacts />
      </main>
    </>
  );
}
