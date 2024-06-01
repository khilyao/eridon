"use client";
import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/About";
import Solutions from "@components/Solutions";
import Agricaltural from "./components/Agricultural";
import FileUpload from "./components/FileUpload";
import News from "./components/News";

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
        {/* <FileUpload /> */}
      </main>
    </>
  );
}
