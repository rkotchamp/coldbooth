import { FaExternalLinkAlt } from "react-icons/fa";

const transactions = [
  {
    id: "00123",
    date: "1/12/23",
    description: "Pro plan",
    cardDetails: "Visa/Ending 2423",
    amount: "$5",
    status: "Failed",
    link: "#",
    statusColor: "text-red-500",
  },
  {
    id: "00123",
    date: "1/12/23",
    description: "Pro plan",
    cardDetails: "Visa/Ending 2423",
    amount: "$5",
    status: "Succeeded",
    link: "#",
    statusColor: "text-green-500",
  },
  {
    id: "00123",
    date: "1/12/23",
    description: "Pro plan",
    cardDetails: "Visa/Ending 2423",
    amount: "$5",
    status: "Cancelled",
    link: "#",
    statusColor: "text-yellow-500",
  },
];

export default function HistoryPayment() {
  return (
    <div className="w-[80%] overflow-x-auto">
      <div className="mb-10">
        <p className="panelHeading-text">Payment History</p>
        <p>Track all payments</p>
      </div>
      <table className="w-[80%] min-w-full border border-gray-300 bg-gray-50">
        <thead className="bg-[--chat-panel-green-bg-color] text-gray-600">
          <tr>
            <th className="border px-4 py-2 text-left">Id</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Card Details</th>
            <th className="border px-4 py-2 text-left">Amount</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Link</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{transaction.id}</td>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">{transaction.description}</td>
              <td className="border px-4 py-2">{transaction.cardDetails}</td>
              <td className="border px-4 py-2">{transaction.amount}</td>
              <td className={`border px-4 py-2 ${transaction.statusColor}`}>
                {transaction.status}
              </td>
              <td className="border px-4 py-2">
                <a
                  href={transaction.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
