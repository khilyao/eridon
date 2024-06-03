import Link from "next/link";
import s from "./sideBar.module.scss";
import { storeContext } from "@context/context";
import { useContext, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useScrollWithOffset } from "@/hooks/useScrollWithOffset";

const SideBar = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(storeContext);
  const isMedia1024 = useMediaQuery(1024);
  const offset = isMedia1024 ? 70 : 140;
  const handleScrollWithOffset = useScrollWithOffset(offset);

  useEffect(() => {
    const bodyRef = document.body;

    if (bodyRef) {
      if (isSideBarOpen) {
        bodyRef.classList.add("no-scroll");
      } else {
        bodyRef.classList.remove("no-scroll");
      }
    }

    return () => {
      if (bodyRef) {
        bodyRef.classList.remove("no-scroll");
      }
    };
  }, [isSideBarOpen]);

  const asideStyles = () => {
    if (isMedia1024) {
      return {
        transform: isSideBarOpen || !isMedia1024 ? "translateX(-100%)" : "",
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
        <li>
          <Link
            className={s.link}
            href="#about"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            О компании
          </Link>
        </li>
        <li>
          <Link
            className={s.link}
            href="#solutions"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            Готовые решения
          </Link>
        </li>
        <li>
          <Link
            className={s.link}
            href="#news"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            Новости
          </Link>
        </li>
        <li>
          <Link
            className={s.link}
            href="#contacts"
            onClick={(e) => {
              handleScrollWithOffset(e.nativeEvent);
              setIsSideBarOpen(false);
            }}
          >
            Контакты
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
        Агроконсультация
      </Link>
      <select className={s.langPicker} name="lang-picker" id="lang-picker">
        <option value="ru">Рус</option>
        <option value="eng">Eng</option>
        <option value="kz">ҚЗ</option>
      </select>
    </aside>
  );
};

export default SideBar;
