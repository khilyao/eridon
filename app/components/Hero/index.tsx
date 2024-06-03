import s from "./hero.module.scss";
import { useContext } from "react";
import { storeContext } from "@context/context";
import { useLang } from "@/hooks/useLang";

const Hero = () => {
  const { isSideBarOpen } = useContext(storeContext);
  const { lang, translations } = useLang();

  return (
    <div className={s.heroBg}>
      <div
        className={s.titleBg}
        style={{
          backdropFilter: isSideBarOpen ? "none" : "",
          background: isSideBarOpen ? "transparent" : "",
        }}
      >
        <h1 className={s.title}>{translations[lang].hero.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
