"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/logo.png";
import s from "./footer.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Footer = () => {
  const isMedia1024 = useMediaQuery(1024);

  return (
    <footer className={s.footer}>
      <div style={{ marginBottom: "10px" }} className="container">
        <div className={s.topInfo}>
          <Link className={s.logo} href={"/"}>
            <Image className={s.logoImage} src={logo} alt="Eridon logo" />
          </Link>
          <ul className={s.list}>
            <li className={s.item}>
              <Link className={s.link} href="#about">
                О компании
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#solutions">
                Готовые решения
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#news">
                Новости
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isMedia1024 && <div className={s.mobileLine}></div>}
      <div className="container">
        <div className={s.bottomBlock}>
          <span>Эридон Казахстан 2024</span>
          <span>Вы принимаете &quot;политику конфиденциальности&quot;</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
