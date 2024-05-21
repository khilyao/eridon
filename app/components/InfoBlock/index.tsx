import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const InfoBlock = ({ title, children }: Props) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default InfoBlock;
