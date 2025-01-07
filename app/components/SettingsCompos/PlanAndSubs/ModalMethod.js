import VisaCards from "./VisaCards";
import { FaPlus } from "react-icons/fa6";
export default function ModalMethod() {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex flex-col gap-10">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Manage Payment Method</h3>
          {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          <div className="mt-3 flex flex-col gap-3">
            <VisaCards />
            <VisaCards />
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[--cta-green-color] p-2 font-semibold text-[--gray-white-color]">
            <FaPlus /> Add New Card
          </button>
        </div>
      </dialog>
    </div>
  );
}
