"use client";
import s from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={s.main}>{/* <SideBar /> */}</main>
    </>
  );
}
