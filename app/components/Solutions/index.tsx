import Image from "next/image";
import wheat from "@assets/wheat.png";
import corn from "@assets/corn.png";
import soybeans from "@assets/soybeans.png";
import lentils from "@assets/lentils.png";
import linen from "@assets/linen.png";
import sunflower from "@assets/sunflower.png";
import rape from "@assets/rape.png";
import s from "./solutions.module.scss";
import { cornArr } from "@/db/solutions";
import Info from "../Info";

const Solutions = () => {
  return (
    <section id="solutions" className={s.solutionParent}>
      <div className="container">
        <h2 className={s.mainTitle}>Готовые решения</h2>
        <div className={s.grid}>
          <div className={s.row}>
            <Image src={wheat} alt="Пшеница" />
            <Info list={cornArr[0]} position={{ left: 3, top: 15 }} />
            <Info list={cornArr[1]} position={{ left: 53, top: 22 }} />
            <Info list={cornArr[2]} position={{ left: 115, top: 18 }} />
            <Info list={cornArr[3]} position={{ left: 0, top: 0 }} />
            <Info list={cornArr[4]} position={{ left: 0, top: 0 }} />
          </div>
          <Image src={sunflower} alt="Подсолнечник" />
          <Image src={linen} alt="Лён" />
          <Image src={lentils} alt="Чечевица" />
          <Image src={corn} alt="Кукуруза" />
          <Image src={rape} alt="Рапс" />
          <Image src={soybeans} alt="Соя" />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
