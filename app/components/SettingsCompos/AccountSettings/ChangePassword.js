import SubButton from "./Button";

const handlePasswordChange = (e) => {
  e.preventDefault();
  console.log("Btn clicked ");
};
export default function ChangePassword() {
  return (
    <div className="flex h-[601px] w-[450px] flex-col items-center gap-11 rounded-[15px] border border-[--gray-light-border-color] bg-[--pure-White] py-10 drop-shadow-md">
      <div className="flex w-[80%] flex-col items-start gap-3">
        <p className="panelHeading-text">Change Password</p>
        {/* <div></div> */}
      </div>

      <form className="flex w-[80%] flex-col gap-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            className="h-12 w-full rounded-sm border border-[--gray-light-border-color] p-[10px] focus:outline-none focus:ring-1 focus:ring-[--active-hover-green-bg-color]"
            defaultValue="American Expresss Way"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            className="h-12 w-full rounded-sm border border-[--gray-light-border-color] p-[10px] focus:outline-none focus:ring-1 focus:ring-[--active-hover-green-bg-color]"
            defaultValue="American Expresss Way"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="h-12 w-full rounded-sm border border-[--gray-light-border-color] p-[10px] focus:outline-none focus:ring-1 focus:ring-[--active-hover-green-bg-color]"
            defaultValue="American Expresss Way"
          />
        </div>
        <div className="flex w-full justify-end">
          <SubButton btnText="Change Password" onClick={handlePasswordChange} />
        </div>
      </form>
    </div>
  );
}
