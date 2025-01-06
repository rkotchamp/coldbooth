import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import SubButton from "./Button";

const handleProfileChange = (e) => {
  e.preventDefault();
  console.log("Btn clicked ");
};
export default function ProfileDetails() {
  return (
    <div className="flex h-[601px] w-[450px] flex-col items-center rounded-[15px] border border-[--gray-light-border-color] bg-[--pure-White]">
      <div>
        <p className="panelHeading-text">Personal Details</p>
        <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full">
          <Image
            src="/images/Meta.png"
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

      <form className="flex w-[80%] flex-col bg-red-600">
        <div className="flex flex-col">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" className="" />
        </div>
        <SubButton btnText="Update Profile" onClick={handleProfileChange} />
      </form>
    </div>
  );
}
