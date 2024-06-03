import Image from "next/image";
import wheat from "@assets/wheat.png";
import corn from "@assets/corn.png";
import soybeans from "@assets/soybeans.png";
import lentils from "@assets/lentils.png";
import linen from "@assets/linen.png";
import sunflower from "@assets/sunflower.png";
import rape from "@assets/rape.png";
import s from "./solutions.module.scss";
import {
  wheatArr,
  cornArr,
  sunflowerArr,
  linenArr,
  lentilsArr,
  rapeArr,
  soybeansArr,
} from "@/db/solutions";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Info from "@components/Info";
import { useLang } from "@/hooks/useLang";

const Solutions = () => {
  const isMedia1024 = useMediaQuery(1024);
  const { lang, translations } = useLang();

  const grid = (
    <>
      <div className={s.row}>
        <Image src={wheat} alt="Пшеница" />
        <Info
          list={wheatArr[0]}
          position={isMedia1024 ? { left: 4, top: 15 } : { left: 30, top: 70 }}
          width={isMedia1024 ? 66 : 170}
          translate={
            isMedia1024 ? "translate(-2px, -2px)" : "translate(-50px, 0px)"
          }
        />
        <Info
          list={wheatArr[1]}
          position={
            isMedia1024 ? { left: 43, top: 10 } : { left: 150, top: 35 }
          }
          width={isMedia1024 ? 62 : 147}
          translate={
            isMedia1024 ? "translate(-4px, -52px)" : "translate(10px, 0px)"
          }
        />
        <Info
          list={wheatArr[2]}
          position={isMedia1024 ? { left: 93, top: 7 } : { left: 310, top: 12 }}
          width={isMedia1024 ? 71 : 172}
          translate={
            isMedia1024 ? "translate(-24px, -2px)" : "translate(20px, 0px)"
          }
        />
        <Info
          list={wheatArr[3]}
          position={isMedia1024 ? { left: 140, top: 0 } : { left: 490, top: 4 }}
          width={isMedia1024 ? 48 : 130}
          translate={
            isMedia1024 ? "translate(4px, -2px)" : "translate(25px, 0px)"
          }
        />
        <Info
          list={wheatArr[4]}
          position={
            isMedia1024 ? { left: 190, top: -4 } : { left: 624, top: 4 }
          }
          width={isMedia1024 ? 62 : 155}
          translate={
            isMedia1024 ? "translate(10px, -10px)" : "translate(40px, -28px)"
          }
        />
      </div>
      <div className={s.row}>
        <Image src={sunflower} alt="Подсолнечник" />
        <Info
          list={sunflowerArr[0]}
          position={isMedia1024 ? { left: 4, top: 15 } : { left: 30, top: 70 }}
          width={isMedia1024 ? 60 : 140}
          translate={
            isMedia1024 ? "translate(0px, -2px)" : "translate(0px, 0px)"
          }
        />
        <Info
          list={sunflowerArr[1]}
          position={
            isMedia1024 ? { left: 70, top: 14 } : { left: 250, top: 44 }
          }
          width={isMedia1024 ? 51 : 126}
          translate={
            isMedia1024 ? "translate(-4px, -30px)" : "translate(-8px, 8px)"
          }
        />
        <Info
          list={sunflowerArr[2]}
          position={
            isMedia1024 ? { left: 125, top: 7 } : { left: 410, top: 18 }
          }
          width={isMedia1024 ? 58 : 140}
          translate={
            isMedia1024 ? "translate(-34px, 0px)" : "translate(-24px, 4px)"
          }
        />
        <Info
          list={sunflowerArr[3]}
          position={
            isMedia1024 ? { left: 150, top: -3 } : { left: 494, top: 0 }
          }
          width={isMedia1024 ? 52 : 140}
          translate={
            isMedia1024 ? "translate(4px, -2px)" : "translate(40px, -20px)"
          }
        />
      </div>
      <div className={s.row}>
        <Image src={linen} alt="Лён" />
        <Info
          list={linenArr[0]}
          position={isMedia1024 ? { left: 20, top: 13 } : { left: 30, top: 70 }}
          width={isMedia1024 ? 70 : 158}
          translate={
            isMedia1024 ? "translate(0px, -2px)" : "translate(40px, -34px)"
          }
        />
        <Info
          list={linenArr[1]}
          position={
            isMedia1024 ? { left: 112, top: 6 } : { left: 270, top: 40 }
          }
          width={isMedia1024 ? 61 : 150}
          translate={
            isMedia1024 ? "translate(0px, 0px)" : "translate(6px, 4px)"
          }
        />
        <Info
          list={linenArr[2]}
          position={
            isMedia1024 ? { left: 200, top: 3 } : { left: 660, top: 30 }
          }
          width={isMedia1024 ? 73 : 140}
          translate={
            isMedia1024 ? "translate(0px, 0px)" : "translate(30px, 0px)"
          }
        />
      </div>
      <div className={s.row}>
        <Image src={lentils} alt="Чечевица" />
        <Info
          list={lentilsArr[0]}
          position={isMedia1024 ? { left: 4, top: 15 } : { left: 40, top: 68 }}
          width={isMedia1024 ? 58 : 140}
          translate={
            isMedia1024 ? "translate(-4px, 0px)" : "translate(-4px, 0px)"
          }
        />
        <Info
          list={lentilsArr[1]}
          position={
            isMedia1024 ? { left: 110, top: 4 } : { left: 300, top: 40 }
          }
          width={isMedia1024 ? 49 : 132}
          translate={
            isMedia1024 ? "translate(-4px, 0px)" : "translate(36px, -10px)"
          }
        />
        <Info
          list={lentilsArr[2]}
          position={
            isMedia1024 ? { left: 150, top: 0 } : { left: 568, top: 40 }
          }
          width={isMedia1024 ? 58 : 140}
          translate={
            isMedia1024 ? "translate(10px, -8px)" : "translate(16px, 2px)"
          }
        />
        <Info
          list={lentilsArr[3]}
          position={
            isMedia1024 ? { left: 262, top: 10 } : { left: 860, top: 50 }
          }
          width={isMedia1024 ? 55 : 140}
          translate={
            isMedia1024 ? "translate(-12px, -2px)" : "translate(20px, 0px)"
          }
        />
      </div>
      <div className={s.row}>
        <Image src={corn} alt="Кукуруза" />
        <Info
          list={cornArr[0]}
          position={isMedia1024 ? { left: 4, top: 15 } : { left: 20, top: 74 }}
          width={isMedia1024 ? 64 : 160}
          translate={isMedia1024 ? "translate(-2px, 0)" : "translate(20px, 0)"}
        />
        <Info
          list={cornArr[1]}
          position={
            isMedia1024 ? { left: 73, top: 12 } : { left: 240, top: 50 }
          }
          width={isMedia1024 ? 50 : 122}
          translate={
            isMedia1024 ? "translate(-14px, -44px)" : "translate(12px, 4px)"
          }
        />
        <Info
          list={cornArr[2]}
          position={
            isMedia1024 ? { left: 115, top: 2 } : { left: 370, top: 40 }
          }
          width={isMedia1024 ? 61 : 148}
          translate={
            isMedia1024 ? "translate(-24px, 0px)" : "translate(38px, -26px)"
          }
        />
        <Info
          list={cornArr[3]}
          position={isMedia1024 ? { left: 162, top: 0 } : { left: 550, top: 0 }}
          width={isMedia1024 ? 53 : 136}
          translate={
            isMedia1024 ? "translate(4px, -2px)" : "translate(20px, 4px)"
          }
        />
      </div>
      <div className={s.row}>
        <Image src={rape} alt="Рапс" />
        <Info
          list={rapeArr[0]}
          position={isMedia1024 ? { left: 80, top: 6 } : { left: 270, top: 30 }}
          width={isMedia1024 ? 64 : 200}
          translate={
            isMedia1024 ? "translate(12px, -12px)" : "translate(30px, 0px)"
          }
        />
        <Info
          list={rapeArr[1]}
          position={
            isMedia1024 ? { left: 220, top: 0 } : { left: 740, top: 20 }
          }
          width={isMedia1024 ? 69 : 175}
          translate={
            isMedia1024 ? "translate(-50px, 0px)" : "translate(-60px, 6px)"
          }
        />
        <Info
          list={rapeArr[2]}
          position={
            isMedia1024 ? { left: 290, top: 0 } : { left: 970, top: 20 }
          }
          width={isMedia1024 ? 48 : 130}
          translate={
            isMedia1024 ? "translate(-34px, 0px)" : "translate(-110px, 0px)"
          }
        />
      </div>
      <div className={s.row}>
        <Image src={soybeans} alt="Соя" />
        <Info
          list={soybeansArr[0]}
          position={isMedia1024 ? { left: 4, top: 15 } : { left: 20, top: 66 }}
          width={isMedia1024 ? 58 : 160}
          translate={
            isMedia1024 ? "translate(-2px, 0px)" : "translate(38px, -26px)"
          }
        />
        <Info
          list={soybeansArr[1]}
          position={isMedia1024 ? { left: 93, top: 4 } : { left: 320, top: 30 }}
          width={isMedia1024 ? 53 : 137}
          translate={
            isMedia1024 ? "translate(-10px, 0px)" : "translate(20px, 4px)"
          }
        />
        <Info
          list={soybeansArr[2]}
          position={
            isMedia1024 ? { left: 170, top: -2 } : { left: 550, top: 6 }
          }
          width={isMedia1024 ? 66 : 175}
          translate={
            isMedia1024 ? "translate(-6px, 0px)" : "translate(40px, -20px)"
          }
        />
      </div>
    </>
  );

  return (
    <section id="solutions" className={s.solutionParent}>
      <div className={`container ${s.containerWrapper}`}>
        <h2 className={s.mainTitle}>{translations[lang].solutions.title}</h2>
        <div className={s.grid}>{grid}</div>
      </div>
    </section>
  );
};

export default Solutions;
