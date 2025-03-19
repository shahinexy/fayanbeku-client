import MyLogo from "@/components/common/MyLogo";
import ProfileDetails from "@/components/modules/profile/ProfileDetails";

const ProfilePage = () => {
  return (
    <div>
      <MyLogo />

      <div className="max-w-[1000px] mx-auto bg-[#fff9f9] p-5 rounded-lg">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default ProfilePage;
