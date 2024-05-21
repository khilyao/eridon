import Image from "next/image";
import director from "@assets/director.png";
import s from "./about.module.scss";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const About = () => {
  const isMedia1024 = useMediaQuery(1024);

  return (
    <section className={s.about}>
      <div className="container">
        <h2 className={s.title}>О компании</h2>
        <div className={s.block}>
          <div className={s.leftBlock}>
            <span className={s.city}>Эридон Казахстан</span>
            <div className={s.backdrop}>
              <div className={s.commonInfo}>
                <p className={`${s.register} ${s.accent}`}>
                  Дата регистрации - ноябрь 2019г.
                </p>
                <p className={`${s.text}`}>
                  “Эридон Казахстан” входит в группу Компаний “Эридон Украина”
                </p>
                <p className={`${s.text}`}>
                  Группа Компаний «Эридон» имеет 30-летнюю историю работы в
                  Украине, из них последние 15 лет - в статусе компании
                  номер один на рынке средств защиты растений
                </p>
              </div>
              <div>
                <p className={`${s.text} ${s.accent}`}>
                  Основные направления деятельности:
                </p>
                <ul className={s.list}>
                  <li className={s.text}>
                    Оптовая торговля пестицидами и агрохимическими продуктами
                  </li>
                  <li className={s.text}>Оптовая торговля удобрениями</li>
                  <li className={s.text}>Оптовая торговля семенами</li>
                  <li className={s.text}>
                    Услуги по агротехнологической экспертизе и консультации
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.card}>
            <Image
              className={s.cardImg}
              src={director}
              width={isMedia1024 ? 136 : 288}
              alt="Вадим Кролевец"
            />
            {isMedia1024 && (
              <>
                <h3 className={s.name}>Вадим Кролевец</h3>
                <span className={s.position}>Директор Эридон Казахстан</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
