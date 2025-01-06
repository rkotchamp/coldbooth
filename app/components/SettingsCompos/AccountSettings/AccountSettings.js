import ProfileDetails from "./ProfileData";
import ChangePassword from "./ChangePassword";
import SignOut from "./SignOut";

export default function AccountSettings() {
  return (
    <div className="flex">
      <div>
        <ProfileDetails />
        <ChangePassword />
      </div>
      <SignOut />
    </div>
  );
}
