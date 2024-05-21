"use client";
import Image from "next/image";
import Link from "next/link";
import s from "./header.module.scss";
import { Fade as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { storeContext } from "../../context/context";
import SideBar from "../SideBar";
import logo from "@assets/logo.png";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Header = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(storeContext);
  const isMedia768 = useMediaQuery(768);
  const isMedia1024 = useMediaQuery(1024);
  const isMedia1280 = useMediaQuery(1280);

  const calculateLogoWidth = () => {
    if (isMedia768) return 142;
    if (isMedia1280 && !isMedia768) return 200;
    return 276;
  };

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link className={s.logo} href={"/"}>
          <Image
            width={calculateLogoWidth()}
            src={logo}
            alt="Eridon logo"
          ></Image>
        </Link>
        <SideBar />
      </nav>
      {isMedia1024 && (
        <Hamburger
          size={24}
          toggled={isSideBarOpen}
          toggle={() => {
            setIsSideBarOpen(!isSideBarOpen);
          }}
        />
      )}
    </header>
  );
};

export default Header;
