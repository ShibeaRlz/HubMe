import { Card, CardHeader } from "@/components/ui/card";
import { ProfileCard } from "@/feature/profile/components/Profile";
import style from "./style.module.scss";

const ProfilePage = () => {
  return (
    <div className={style.all}>
      <p className={style.profile}>プロフィール</p>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
