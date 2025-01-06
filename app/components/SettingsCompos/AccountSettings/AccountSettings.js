import ProfileDetails from "./ProfileData";
import ChangePassword from "./ChangePassword";
import SignOut from "./SignOut";
import DeleteAccount from "./DeletAccount";

export default function AccountSettings() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex w-[90%] gap-10">
        <ProfileDetails />
        <ChangePassword />
      </div>
      <div className="flex w-[90%] gap-5">
        <SignOut />
        <DeleteAccount />
      </div>
    </div>
  );
}
