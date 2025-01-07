import UpdateSubscription from "./UpdateSubscription";
import Plan from "./Plan";
export default function Subscription() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <Plan />
      <UpdateSubscription />
    </div>
  );
}
