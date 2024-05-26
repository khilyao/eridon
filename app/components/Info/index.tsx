"use client";

import s from "./info.module.scss";
import { CSSProperties, useState } from "react";
import InfoIcon from "@assets/info.svg";

type Props = {
  list: string[];
  position?: CSSProperties;
};

const Info = ({ list, position }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.infoBlock} style={position}>
      <InfoIcon
        className={s.icon}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen && (
        <ul className={s.list}>
          {list.map((text, index) => (
            <li className={s.item} key={index}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Info;
