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

const Solutions = () => {
  const isMedia1024 = useMediaQuery(1024);

  const grid = isMedia1024 ? (
    <>
      <div className={s.row}>
        <Image src={wheat} alt="Пшеница" />
        <Info
          list={wheatArr[0]}
          position={{ left: 4, top: 15 }}
          width={66}
          translate="translate(-2px, -2px)"
        />
        <Info
          list={wheatArr[1]}
          position={{ left: 43, top: 10 }}
          width={62}
          translate="translate(-4px, -52px)"
        />
        <Info
          list={wheatArr[2]}
          position={{ left: 93, top: 7 }}
          width={71}
          translate="translate(-24px, -2px)"
        />
        <Info
          list={wheatArr[3]}
          position={{ left: 140, top: 0 }}
          width={48}
          translate="translate(4px, -2px)"
        />
        <Info
          list={wheatArr[4]}
          position={{ left: 190, top: -4 }}
          width={62}
          translate="translate(10px, -10px)"
        />
      </div>
      <div className={s.row}>
        <Image src={sunflower} alt="Подсолнечник" />
        <Info
          list={sunflowerArr[0]}
          position={{ left: 4, top: 15 }}
          width={60}
          translate="translate(0px, -2px)"
        />
        <Info
          list={sunflowerArr[1]}
          position={{ left: 70, top: 14 }}
          width={51}
          translate="translate(-4px, -30px)"
        />
        <Info
          list={sunflowerArr[2]}
          position={{ left: 125, top: 7 }}
          width={58}
          translate="translate(-34px, 0px)"
        />
        <Info
          list={sunflowerArr[3]}
          position={{ left: 150, top: -3 }}
          width={52}
          translate="translate(4px, -2px)"
        />
      </div>
      <div className={s.row}>
        <Image src={linen} alt="Лён" />
        <Info
          list={linenArr[0]}
          position={{ left: 20, top: 13 }}
          width={70}
          translate="translate(0px, -2px)"
        />
        <Info
          list={linenArr[1]}
          position={{ left: 112, top: 6 }}
          width={61}
          translate="translate(0px, 0px)"
        />
        <Info
          list={linenArr[2]}
          position={{ left: 200, top: 3 }}
          width={73}
          translate="translate(0px, 0px)"
        />
      </div>
      <div className={s.row}>
        <Image src={lentils} alt="Чечевица" />
        <Info
          list={lentilsArr[0]}
          position={{ left: 4, top: 15 }}
          width={58}
          translate="translate(-4px, 0px)"
        />
        <Info
          list={lentilsArr[1]}
          position={{ left: 110, top: 4 }}
          width={49}
          translate="translate(-4px, 0px)"
        />
        <Info
          list={lentilsArr[2]}
          position={{ left: 150, top: 0 }}
          width={58}
          translate="translate(10px, -8px)"
        />
        <Info
          list={lentilsArr[3]}
          position={{ left: 262, top: 10 }}
          width={55}
          translate="translate(-12px, -2px)"
        />
      </div>
      <div className={s.row}>
        <Image src={corn} alt="Кукуруза" />
        <Info
          list={cornArr[0]}
          position={{ left: 4, top: 15 }}
          width={64}
          translate="translate(-2px, 0)"
        />
        <Info
          list={cornArr[1]}
          position={{ left: 73, top: 12 }}
          width={50}
          translate="translate(-14px, -44px)"
        />
        <Info
          list={cornArr[2]}
          position={{ left: 115, top: 2 }}
          width={61}
          translate="translate(-24px, 0px)"
        />
        <Info
          list={cornArr[3]}
          position={{ left: 162, top: 0 }}
          width={53}
          translate="translate(4px, -2px)"
        />
      </div>
      <div className={s.row}>
        <Image src={rape} alt="Рапс" />
        <Info
          list={rapeArr[0]}
          position={{ left: 80, top: 6 }}
          width={64}
          translate="translate(12px, -12px)"
        />
        <Info
          list={rapeArr[1]}
          position={{ left: 220, top: 0 }}
          width={69}
          translate="translate(-50px, 0px)"
        />
        <Info
          list={rapeArr[2]}
          position={{ left: 290, top: 0 }}
          width={48}
          translate="translate(-34px, 0px)"
        />
      </div>
      <div className={s.row}>
        <Image src={soybeans} alt="Соя" />
        <Info
          list={soybeansArr[0]}
          position={{ left: 4, top: 15 }}
          width={58}
          translate="translate(-2px, 0px)"
        />
        <Info
          list={soybeansArr[1]}
          position={{ left: 93, top: 4 }}
          width={53}
          translate="translate(-10px, 0px)"
        />
        <Info
          list={soybeansArr[2]}
          position={{ left: 170, top: -2 }}
          width={66}
          translate="translate(-6px, 0px)"
        />
      </div>
    </>
  ) : (
    <>
      <div className={s.row}>
        <Image src={wheat} alt="Пшеница" />
        <Info
          list={wheatArr[0]}
          position={{ left: 30, top: 70 }}
          width={170}
          translate="translate(-50px, 0px)"
        />
        <Info
          list={wheatArr[1]}
          position={{ left: 150, top: 35 }}
          width={147}
          translate="translate(10px, 0px)"
        />
        <Info
          list={wheatArr[2]}
          position={{ left: 310, top: 12 }}
          width={172}
          translate="translate(20px, 0px)"
        />
        <Info
          list={wheatArr[3]}
          position={{ left: 490, top: 4 }}
          width={130}
          translate="translate(25px, 0px)"
        />
        <Info
          list={wheatArr[4]}
          position={{ left: 624, top: 4 }}
          width={155}
          translate="translate(40px, -28px)"
        />
      </div>
      <div className={s.row}>
        <Image src={sunflower} alt="Подсолнечник" />
        <Info
          list={sunflowerArr[0]}
          position={{ left: 30, top: 70 }}
          width={140}
          translate="translate(0px, 0px)"
        />
        <Info
          list={sunflowerArr[1]}
          position={{ left: 250, top: 44 }}
          width={126}
          translate="translate(-8px, 8px)"
        />
        <Info
          list={sunflowerArr[2]}
          position={{ left: 410, top: 18 }}
          width={140}
          translate="translate(-24px, 4px)"
        />
        <Info
          list={sunflowerArr[3]}
          position={{ left: 494, top: 0 }}
          width={140}
          translate="translate(40px, -20px)"
        />
      </div>
      <div className={s.row}>
        <Image src={linen} alt="Лён" />
        <Info
          list={linenArr[0]}
          position={{ left: 30, top: 70 }}
          width={158}
          translate="translate(40px, -34px)"
        />
        <Info
          list={linenArr[1]}
          position={{ left: 270, top: 40 }}
          width={150}
          translate="translate(6px, 4px)"
        />
        <Info
          list={linenArr[2]}
          position={{ left: 660, top: 30 }}
          width={140}
          translate="translate(30px, 0px)"
        />
      </div>
      <div className={s.row}>
        <Image src={lentils} alt="Чечевица" />
        <Info
          list={lentilsArr[0]}
          position={{ left: 40, top: 68 }}
          width={140}
          translate="translate(-4px, 0px)"
        />
        <Info
          list={lentilsArr[1]}
          position={{ left: 300, top: 40 }}
          width={132}
          translate="translate(36px, -10px)"
        />
        <Info
          list={lentilsArr[2]}
          position={{ left: 568, top: 40 }}
          width={140}
          translate="translate(16px, 2px)"
        />
        <Info
          list={lentilsArr[3]}
          position={{ left: 860, top: 50 }}
          width={140}
          translate="translate(20px, 0px)"
        />
      </div>
      <div className={s.row}>
        <Image src={corn} alt="Кукуруза" />
        <Info
          list={cornArr[0]}
          position={{ left: 20, top: 74 }}
          width={160}
          translate="translate(20px, 0)"
        />
        <Info
          list={cornArr[1]}
          position={{ left: 240, top: 50 }}
          width={122}
          translate="translate(12px, 4px)"
        />
        <Info
          list={cornArr[2]}
          position={{ left: 370, top: 40 }}
          width={148}
          translate="translate(38px, -26px)"
        />
        <Info
          list={cornArr[3]}
          position={{ left: 550, top: 0 }}
          width={136}
          translate="translate(20px, 4px)"
        />
      </div>
      <div className={s.row}>
        <Image src={rape} alt="Рапс" />
        <Info
          list={rapeArr[0]}
          position={{ left: 270, top: 30 }}
          width={200}
          translate="translate(30px, 0px)"
        />
        <Info
          list={rapeArr[1]}
          position={{ left: 740, top: 20 }}
          width={175}
          translate="translate(-60px, 6px)"
        />
        <Info
          list={rapeArr[2]}
          position={{ left: 970, top: 20 }}
          width={130}
          translate="translate(-110px, 0px)"
        />
      </div>
      <div className={s.row}>
        <Image src={soybeans} alt="Соя" />
        <Info
          list={soybeansArr[0]}
          position={{ left: 20, top: 66 }}
          width={160}
          translate="translate(38px, -26px)"
        />
        <Info
          list={soybeansArr[1]}
          position={{ left: 320, top: 30 }}
          width={137}
          translate="translate(20px, 4px)"
        />
        <Info
          list={soybeansArr[2]}
          position={{ left: 550, top: 6 }}
          width={175}
          translate="translate(40px, -20px)"
        />
      </div>
    </>
  );

  return (
    <section id="solutions" className={s.solutionParent}>
      <div className={`container ${s.containerWrapper}`}>
        <h2 className={s.mainTitle}>Готовые решения</h2>
        <div className={s.grid}>{grid}</div>
      </div>
    </section>
  );
};

export default Solutions;
