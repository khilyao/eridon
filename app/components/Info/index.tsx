"use client";

import s from "./info.module.scss";
import { useState } from "react";
import InfoIcon from "@assets/info.svg";

type Props = {
  list: string[];
  position?: {
    top?: number;
    left?: number;
  };
  translate?: string;
  width?: string | number;
};

const Info = ({ list, position, translate, width = "auto" }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const transform = isOpen
    ? `${translate} scale(1)`
    : `${translate} scale(0.5)`;

  const inlineStyles = {
    ...position,
    width,
  };

  return (
    <div className={s.infoBlock} style={inlineStyles}>
      <InfoIcon
        className={s.icon}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <ul
        onClick={() => {
          if (isOpen) {
            setIsOpen(!isOpen);
          }
        }}
        className={s.list}
        style={{
          opacity: isOpen ? 1 : 0,
          transform,
        }}
      >
        {list.map((text, index) => (
          <li className={s.item} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
