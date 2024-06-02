import Image from "next/image";
import s from "./contacts.module.scss";
import map from "@assets/map.png";

const Contacts = () => {
  return (
    <section id="contacts" className={s.section}>
      <h2 className={s.title}>Контакты</h2>
      <div>
        <ul className={s.list}>
          <li>
            <h3 className={s.heading}>Центральный Офис</h3>
            <p>
              <span className={s.bold}>
                Республика Казахстан, 010000, г. Астана
              </span>
              , ул. Бейбитшилик 14, 11 этаж, моб.{" "}
              <a className={s.tel} href="tel:+77755445445">
                + 7 (775) 544 54 45
              </a>
              ,{" "}
              <a className={s.tel} href="tel:+77787157557">
                + 7 (778) 715 7557
              </a>
              ,{" "}
              <a className={s.tel} href="tel:+77013004017">
                +7 (701) 300 40 17
              </a>
            </p>
          </li>
          <li>
            <h3 className={s.heading}>Региональные представительства</h3>
          </li>
        </ul>
        <Image src={map} width={340} height={253} alt="map" />
      </div>
    </section>
  );
};

export default Contacts;
