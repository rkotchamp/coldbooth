import SubButton from "../AccountSettings/Button";
import { IoRocket } from "react-icons/io5";

export default function UpdateSubscription() {
  const handleUpgradeBtnPop = () => {
    console.log("Popped");
  };

  return (
    <div className="flex w-[730px] justify-between rounded-md border-2 p-10">
      <div className="flex items-center justify-center gap-3">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[--active-hover-green-bg-color]">
          <IoRocket className="text-[30px] text-[--primary-green-color]" />
        </div>

        <div>
          <p className="font-semibold">Upgrade Your Plan</p>
          <p>To Enjoy Advanced Features </p>
        </div>
      </div>
      <SubButton btnText="Upgrade Plan" onClick={handleUpgradeBtnPop} />
    </div>
  );
}
