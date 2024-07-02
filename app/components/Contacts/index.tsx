import Image from "next/image";
import s from "./contacts.module.scss";
import map from "@assets/map.png";
import { useLang } from "@/hooks/useLang";

const Contacts = () => {
  const { lang, translations } = useLang();
  return (
    <section id="contacts" className={s.section}>
      <h2 className={s.title}>{translations[lang].contacts.heading}</h2>
      <div className="container">
        <div className={s.infoBlock}>
          <ul className={s.list}>
            <li>
              <h3 className={s.heading}>
                {translations[lang].contacts.centralOffice.title}
              </h3>
              <p>
                <a
                  target="_blank"
                  className={s.map}
                  href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%91%D0%B5%D0%B9%D0%B1%D0%B8%D1%82%D1%88%D0%B8%D0%BB%D0%B8%D0%BA+14,+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0+010000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@51.1704818,71.4185984,17z/data=!3m1!4b1!4m6!3m5!1s0x424586d590a7180b:0xcbfabe3dec586381!8m2!3d51.1704818!4d71.4211733!16s%2Fg%2F11vlrxqpc8?entry=ttu"
                >
                  {translations[lang].contacts.centralOffice.address}
                  {translations[lang].contacts.centralOffice.street}
                </a>
                <span style={{ display: "block" }}>
                  {translations[lang].contacts.mobile}
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
                </span>
              </p>
            </li>
            <li>
              <h3 className={s.heading}>
                {translations[lang].contacts.regionalOffices.title}
              </h3>
              <ul className={s.subList}>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/search/%D0%9A%D0%BE%D0%BA%D1%88%D0%B5%D1%82%D0%B0%D1%83%D1%83%D0%BB.+%D0%A1%D1%83%D0%BB%D0%B5%D0%B9%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0+23%2F2%D0%90,+%D0%BE%D1%84%D0%B8%D1%81%D1%8B+%E2%84%966,+12/@53.3014476,69.396006,17z/data=!3m1!4b1?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[0]
                        .region
                    }
                    {
                      translations[lang].contacts.regionalOffices.locations[0]
                        .address
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+77713725103">
                      + 7 (771) 372 51 03
                    </a>
                    ,{" "}
                    <a className={s.tel} href="tel:+77057587875">
                      + 7 (705) 758 78 75
                    </a>
                    ,{" "}
                    <a className={s.tel} href="tel:+77055806842">
                      + 7 (705) 580 68 42
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/place/2,+%D0%BF%D1%80%D0%BE%D1%81%D0%BF.+%D0%90%D0%B1%D0%B0%D1%8F+189,+%D0%A3%D1%81%D1%82%D1%8C-%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA+070000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@49.9991468,82.6523965,17z/data=!3m1!4b1!4m5!3m4!1s0x42eb46f0e4ea3e4f:0xa0f4c8336dcc0fc6!8m2!3d49.9991468!4d82.6549714?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[1]
                        .region
                    }
                    {
                      translations[lang].contacts.regionalOffices.locations[1]
                        .address
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+77759317204">
                      + 7 (775) 931 72 04
                    </a>
                    ,{" "}
                    <a className={s.tel} href="tel:+77777345896">
                      + 7 (777) 734 58 96
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/place/%D0%A2%D0%9E%D0%9E+%D0%A1%D0%BA%D0%BB%D0%B0%D0%B4+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9/@52.2942921,76.9266971,17z/data=!3m1!4b1!4m6!3m5!1s0x42f8353452c55555:0x87980062928a80b1!8m2!3d52.2942921!4d76.929272!16s%2Fg%2F11flw1qxmg?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[2]
                        .region
                    }
                    {
                      translations[lang].contacts.regionalOffices.locations[2]
                        .address
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+77013003973">
                      + 7 (701) 300 39 73
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/place/7,+%D1%83%D0%BB.+%D0%90%D1%83%D1%8D%D0%B7%D0%BE%D0%B2%D0%B0+264,+%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA+150000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@54.8807221,69.1702059,17z/data=!3m1!4b1!4m5!3m4!1s0x43b23bba5df058bf:0xa356a0af8f4abe96!8m2!3d54.8807221!4d69.1727808?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[3]
                        .region
                    }
                    {
                      translations[lang].contacts.regionalOffices.locations[3]
                        .address
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+7775466656">
                      + (777) 546 66 56
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/place/150000+%D0%9D%D0%BE%D0%B2%D0%BE%D0%B8%D1%88%D0%B8%D0%BC%D1%81%D0%BA%D0%BE%D0%B5,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@53.2105715,66.7556972,13z/data=!3m1!4b1!4m6!3m5!1s0x43b553326101db75:0x2d7c283b6bb8f7c2!8m2!3d53.2059294!4d66.8098235!16s%2Fg%2F120lwxys?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[4]
                        .region
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+77057535086">
                      + 7 (705) 753 50 86
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/place/3+%D1%8D%D1%82%D0%B0%D0%B6,+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9A%D0%B0%D1%80%D0%B1%D1%8B%D1%88%D0%B5%D0%B2%D0%B0+24,+%D0%9A%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%B0%D0%B9+110000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@53.1820149,63.5820543,17z/data=!3m1!4b1!4m5!3m4!1s0x43cc8ad651e5670d:0x2cce8f0d380aa26a!8m2!3d53.1820149!4d63.5846292?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[5]
                        .region
                    }
                    {
                      translations[lang].contacts.regionalOffices.locations[5]
                        .address
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+77051217267">
                      + 7 (705) 121 72 67
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/place/070000+%D0%A1%D0%B5%D0%BC%D0%B5%D0%B9,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@50.4129037,80.1931281,12z/data=!3m1!4b1!4m6!3m5!1s0x42f2648e149b7d9f:0x1e5a1db29895c3cf!8m2!3d50.4233463!4d80.250811!16zL20vMDJmMDNf?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[6]
                        .region
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+77013003974">
                      + 7 (701) 300 39 74
                    </a>
                  </span>
                </li>
                <li>
                  <a
                    target="_blank"
                    className={s.map}
                    href="https://www.google.com/maps/place/100000+%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@49.8238656,73.0041652,11z/data=!3m1!4b1!4m6!3m5!1s0x4243465ad22d0559:0xa90b6be0d244d433!8m2!3d49.8046835!4d73.1093826!16zL20vMDFubHJ6?entry=ttu"
                  >
                    {
                      translations[lang].contacts.regionalOffices.locations[7]
                        .region
                    }
                  </a>
                  <span style={{ display: "block" }}>
                    {translations[lang].contacts.mobile}
                    <a className={s.tel} href="tel:+77755445445">
                      + 7 (775) 544 54 45
                    </a>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <Image src={map} className={s.picture} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
