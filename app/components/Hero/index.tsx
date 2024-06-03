import s from "./hero.module.scss";
import { useContext } from "react";
import { storeContext } from "@context/context";

const Hero = () => {
  const { isSideBarOpen } = useContext(storeContext);

  return (
    <div className={s.heroBg}>
      <div
        className={s.titleBg}
        style={{
          backdropFilter: isSideBarOpen ? "none" : "",
          background: isSideBarOpen ? "transparent" : "",
        }}
      >
        <h1 className={s.title}>Сотрудничество, которое гарантирует успех</h1>
      </div>
    </div>
  );
};

export default Hero;
