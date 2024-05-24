import { ReactNode } from "react";
import s from "./infoBlock.module.scss";

type Props = {
  title: string;
  children?: ReactNode;
};

const Card = ({ title, children }: Props) => {
  return (
    <div className={s.card}>
      <h4 className={s.title}>{title}</h4>
      <div className={s.thumb}>{children}</div>
    </div>
  );
};

export default Card;
