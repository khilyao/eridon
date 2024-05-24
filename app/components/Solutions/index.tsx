import Image from "next/image";
import wheat from "@assets/wheat.png";
import corn from "@assets/corn.png";
import soybeans from "@assets/soybeans.png";
import lentils from "@assets/lentils.png";
import linen from "@assets/linen.png";
import sunflower from "@assets/sunflower.png";
import rape from "@assets/rape.png";
import s from "./solutions.module.scss";

const Solutions = () => {
  return (
    <section id="solutions">
      <div className={`container ${s.grid}`}>
        <h2 className={s.mainTitle}>Готовые решения</h2>
        <div className="row" style={{ position: "relative" }}>
          <Image src={wheat} alt="Пшеница" />
          {/* test block */}
          <ul style={{ position: "absolute", top: 0, left: 0, fontSize: 4 }}>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
          {/* <div className="infoBlock">
            <button className="infoBtn">i</button>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="infoBlock">
            <button className="infoBtn">i</button>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="infoBlock">
            <button className="infoBtn">i</button>
            <ul className="list">
              <li></li>
              <li></li>
            </ul>
          </div> */}
        </div>
        <Image src={corn} alt="Кукуруза" />
        <Image src={soybeans} alt="Соя" />
        <Image src={lentils} alt="Чечевица" />
        <Image src={linen} alt="Лён" />
        <Image src={sunflower} alt="Подсолнечник" />
        <Image src={rape} alt="Рапс" />
      </div>
    </section>
  );
};

export default Solutions;
