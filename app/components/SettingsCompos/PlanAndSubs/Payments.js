import Method from "./Method";
import HistoryPayment from "./HistoryPayment";

export default function Payments() {
  return (
    <div className="flex h-[90%] flex-col items-center justify-between p-10">
      <Method />
      <HistoryPayment />
    </div>
  );
}
