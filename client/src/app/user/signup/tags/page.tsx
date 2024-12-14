import { TagCard } from "@/features/tags/components/TagCard";
import style from "./style.module.scss";

const RegisterTags = () => {
  return (
    <div className={style.card}>
      <TagCard type={"user"} />
    </div>
  );
};

export default RegisterTags;
