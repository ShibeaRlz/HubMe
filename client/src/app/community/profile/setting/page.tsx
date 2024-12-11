import { ProfileSetting } from "@/features/profile/components/ProfileSetting";
import style from "./style.module.scss";

const ProfileSettingPage = () => {
  return (
    <div className={style.container}>
      <ProfileSetting type="community" />
    </div>
  );
};

export default ProfileSettingPage;
