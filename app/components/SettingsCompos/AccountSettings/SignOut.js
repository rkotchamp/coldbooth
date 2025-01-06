import SubButton from "./Button";

const handleSignOut = () => {
  console.log("BTN clicked");
};

export default function SignOut() {
  return (
    <div className="flex h-[200px] w-[450px] flex-col items-center gap-11 rounded-[15px] border border-[--gray-light-border-color] bg-[--pure-White] py-10">
      <div className="w-[80%]">
        <p className="panelHeading-text">Sign Out</p>
      </div>
      <div className="flex w-[80%] justify-end">
        <SubButton btnText="Sign Out" onClick={handleSignOut} />
      </div>
    </div>
  );
}
