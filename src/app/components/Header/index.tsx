"use client";
import Image from "next/image";
import Link from "next/link";
import s from "./header.module.scss";
import { Fade as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { storeContext } from "@context/context";
import SideBar from "@components/SideBar";
import logo from "@assets/logo.png";

const Header = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(storeContext);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link className={s.logo} href={"/"}>
          <Image width={142} src={logo} alt="Eridon logo"></Image>
        </Link>
        <SideBar />
      </nav>
      <Hamburger
        size={24}
        toggled={isSideBarOpen}
        toggle={() => {
          setIsSideBarOpen(!isSideBarOpen);
        }}
      />
    </header>
  );
};

export default Header;
