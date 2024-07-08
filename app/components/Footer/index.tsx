"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.png";
import s from "./footer.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLang } from "@/hooks/useLang";
import { Section } from "@/lib/types/section";

const Footer = () => {
  const isMedia1024 = useMediaQuery(1024);
  const { lang, translations } = useLang();
  const sections: Section[] = ["company", "solutions", "news", "contacts"];

  return (
    <footer className={s.footer}>
      <div style={{ marginBottom: "10px" }} className="container">
        <div className={s.topInfo}>
          <Link className={s.logo} href={"/"}>
            <Image className={s.logoImage} src={logo} alt="Eridon logo" />
          </Link>
          <ul className={s.list}>
            {sections.map((section, index) => {
              console.log(section);
              return (
                <li key={index} className={s.item}>
                  <Link className={s.link} href={`#${section}`}>
                    {translations[lang].footer[section]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isMedia1024 && <div className={s.mobileLine}></div>}
      <div className="container">
        <div className={s.bottomBlock}>
          <span>{translations[lang].footer.dateOfBirth}</span>
          <span>{translations[lang].footer.policy}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
