import { AiFillEdit } from "react-icons/ai";
import { RiVisaLine } from "react-icons/ri";
import ModalMethod from "./ModalMethod";
export default function Method() {
  return (
    <div className="flex w-[80%] flex-col gap-5 border-2 p-5">
      <ModalMethod />
      <div className="flex justify-between">
        <p className="panelHeading-text">Payment Methods</p>
        <AiFillEdit
          className="cursor-pointer text-[30px]"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        />
      </div>

      <div className="flex gap-10">
        <RiVisaLine className="text-[50px]" />
        <div>
          <p>Visa***2432</p>
          <p className="text-[12px] text-[--gray-dark-color]">Expires 6/2029</p>
        </div>
        <p className="text-[12px] text-[--gray-dark-color]">Primary Card</p>
      </div>
    </div>
  );
}
