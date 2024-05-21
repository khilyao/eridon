import Link from "next/link";
import s from "./sideBar.module.scss";
import { storeContext } from "../../context/context";
import { useContext } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const SideBar = () => {
  const { isSideBarOpen } = useContext(storeContext);
  const isMedia1024 = useMediaQuery(1024);
  const isMedia1100 = useMediaQuery(1100);

  return (
    <aside
      className={s.aside}
      style={{
        transform:
          isSideBarOpen || !isMedia1024 ? "translateX(0)" : "translateX(100%)",
        opacity: isSideBarOpen || !isMedia1024 ? "1" : "0",
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
      {!isMedia1100 && (
        <select className={s.langPicker} name="lang-picker" id="lang-picker">
          <option value="ru">Рус</option>
          <option value="eng">Eng</option>
        </select>
      )}
    </aside>
  );
};

export default SideBar;
