import Link from "next/link";
import s from "./sideBar.module.scss";
import { storeContext } from "@context/context";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

const SideBar = () => {
  const { isSideBarOpen } = useContext(storeContext);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <aside
      className={s.aside}
      style={{
        transform:
          isSideBarOpen || isDesktop ? "translateX(0)" : "translateX(100%)",
        opacity: isSideBarOpen || isDesktop ? "1" : "0",
      }}
    >
      <ul className={s.list}>
        <li>
          <Link className={`${s.link}`} href="#first-section">
            О компании
          </Link>
        </li>
        <li>
          <Link className={`${s.link}`} href="#second-section">
            Готовые решения
          </Link>
        </li>
        <li>
          <Link className={`${s.link}`} href="#second-section">
            Новости
          </Link>
        </li>
        <li>
          <Link className={`${s.link}`} href="#second-section">
            Контакты
          </Link>
        </li>
      </ul>

      <Link className={`${s.link} ${s.helper}`} href="#second-section">
        Агроконсультация
      </Link>
    </aside>
  );
};

export default SideBar;
