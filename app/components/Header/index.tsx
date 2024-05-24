"use client";
import Image from "next/image";
import Link from "next/link";
import s from "./header.module.scss";
import { Fade as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import { storeContext } from "../../context/context";
import SideBar from "../SideBar";
import logo from "@assets/logo.png";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Header = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(storeContext);
  const [scrollPosition, setScrollPosition] = useState(0);
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
      setScrollPosition(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const interpolateColor = (scrollTop: number) => {
    const startColor = { r: 241, g: 244, b: 246, a: 0.6 };
    const endColor = { r: 255, g: 255, b: 255, a: 0.95 };
    const maxScroll = 840;

    const t = Math.min(scrollTop / maxScroll, 1);

    const r = Math.round(startColor.r + t * (endColor.r - startColor.r));
    const g = Math.round(startColor.g + t * (endColor.g - startColor.g));
    const b = Math.round(startColor.b + t * (endColor.b - startColor.b));
    const a = startColor.a + t * (endColor.a - startColor.a);

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const backgroundColor = interpolateColor(scrollPosition);

  return (
    <header className={s.header} style={{ background: backgroundColor }}>
      <nav className={s.nav}>
        <Link
          className={s.logo}
          href={"/"}
          onClick={() => {
            setIsSideBarOpen(false);
          }}
        >
          <Image width={calculateLogoWidth()} src={logo} alt="Eridon logo" />
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
