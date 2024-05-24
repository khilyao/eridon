import s from "./info.module.scss";

type Props = {
  list: string[];
};

const Info = ({ list }: Props) => {
  return (
    <ul className={s.list}>
      {list.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
};

export default Info;
