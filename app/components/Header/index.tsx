"use client";
import Image from "next/image";
import Link from "next/link";
import s from "./header.module.scss";
import { Fade as Hamburger } from "hamburger-react";
import { use, useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/context";
import SideBar from "../SideBar";
import logo from "@assets/logo.png";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Header = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(storeContext);
  const [isHeroScrolled, setIsHeroScrolled] = useState(false);
  const isMedia768 = useMediaQuery(768);
  const isMedia1024 = useMediaQuery(1024);
  const isMedia1280 = useMediaQuery(1280);

  const calculateLogoWidth = () => {
    if (isMedia768) return 142;
    if (isMedia1280 && !isMedia768) return 200;
    return 276;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsHeroScrolled(scrollTop > 270);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsHeroScrolled]);

  return (
    <header
      className={s.header}
      style={{ background: isHeroScrolled ? "rgba(255, 255, 255, 0.9)" : "" }}
    >
      <nav className={s.nav}>
        <Link
          className={s.logo}
          href={"/"}
          onClick={() => {
            setIsSideBarOpen(false);
          }}
        >
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
