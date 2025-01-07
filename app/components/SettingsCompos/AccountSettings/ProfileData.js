import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import SubButton from "./Button";

const handleProfileChange = (e) => {
  e.preventDefault();
  console.log("Btn clicked ");
};
export default function ProfileDetails() {
  return (
    <div className="flex h-[601px] w-[450px] flex-col items-center gap-11 rounded-[15px] border border-[--gray-light-border-color] bg-[--pure-White] py-10 drop-shadow-md">
      <div className="flex w-[80%] flex-col items-start justify-center gap-3">
        <p className="panelHeading-text">Personal Details</p>
        <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full">
          <Image
            src="/images/macLou.JPG"
            alt=""
            height={100}
            width={100}
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-2 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[--gray-white-color]">
            <FaCamera />
          </div>
        </div>
      </div>

      <form className="flex w-[80%] flex-col gap-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="h-12 w-full rounded-sm border border-[--gray-light-border-color] p-[10px] focus:outline-none focus:ring-1 focus:ring-[--active-hover-green-bg-color]"
            defaultValue="American Expresss Way"
          />
        </div>
        <div className="flex w-full justify-end">
          <SubButton btnText="Update Profile" onClick={handleProfileChange} />
        </div>
      </form>
    </div>
  );
}
