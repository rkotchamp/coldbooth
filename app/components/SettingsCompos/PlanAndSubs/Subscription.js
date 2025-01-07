import UpdateSubscription from "./UpdateSubscription";
import Plan from "./Plan";
import UpgradeModal from "./UpgradeModal";

export default function Subscription() {
  return (
    <div className="flex flex-row-reverse gap-20 p-20">
      <UpgradeModal />
      <Plan />
      <UpdateSubscription />
    </div>
  );
}
