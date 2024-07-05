"use client";
import Link from "next/link";
import s from "./sideBar.module.scss";
import { storeContext } from "@context/context";
import { useContext, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useScrollWithOffset } from "@/hooks/useScrollWithOffset";
import { useLang } from "@/hooks/useLang";
import { AllowedLangs } from "@/constants/lang";
import { setLang } from "@/app/context/lang";

const SideBar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(storeContext);
  const isMedia1024 = useMediaQuery(1024);
  const offset = isMedia1024 ? 70 : 140;
  const handleScrollWithOffset = useScrollWithOffset(offset);
  const { lang, translations } = useLang();

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem("lang", lang);
  };

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    handleSwitchLang(selectedLang);
  };

  useEffect(() => {
    const currentLang = localStorage.getItem("lang");

    if (currentLang) {
      setLang(currentLang as AllowedLangs);
    }
  }, [isSideBarOpen]);

  const asideStyles = () => {
    if (isMedia1024) {
      return {
        transform: isSideBarOpen || !isMedia1024 ? "translateY(0)" : "",
        opacity: isSideBarOpen || !isMedia1024 ? "1" : "0",
      };
    }

    return {
      opacity: isSideBarOpen || !isMedia1024 ? "1" : "0",
    };
  };

  return (
    <aside className={s.aside} style={asideStyles()}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link
            className={s.link}
            href="#about"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            {translations[lang].header.company}
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={s.link}
            href="#solutions"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            {translations[lang].header.solution}
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={s.link}
            href="#news"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            {translations[lang].header.news}
          </Link>
        </li>
        <li className={s.item}>
          <Link
            className={s.link}
            href="#contacts"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            {translations[lang].header.contact}
          </Link>
        </li>
      </ul>
      <Link
        className={`${s.link} ${s.helper}`}
        href="#agricultural"
        onClick={(e) => {
          handleScrollWithOffset(e.nativeEvent);
          setIsSideBarOpen(false);
        }}
      >
        {translations[lang].header.help}
      </Link>
      <select
        className={s.langPicker}
        name="lang-picker"
        id="lang-picker"
        onChange={handleChangeLang}
        value={lang}
      >
        <option value="ru">Рус</option>
        <option value="en">Eng</option>
        <option value="kz">ҚЗ</option>
      </select>
    </aside>
  );
};

export default SideBar;
