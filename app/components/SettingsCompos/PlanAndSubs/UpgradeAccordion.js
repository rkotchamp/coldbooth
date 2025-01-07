import { IoMdCheckmark } from "react-icons/io";

export default function UpgradeAccordion({ data }) {
  return (
    <div>
      {data.map((items, index) => {
        return (
          <div
            className="collapse collapse-arrow border border-base-300 bg-base-100"
            key={index}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              {items.plan}
              <div>$ {items.price}</div>
            </div>
            <div className="collapse-content text-sm">
              <ul className="flex flex-col gap-3">
                {items.benefits.map((benefit, bIndex) => {
                  return (
                    <li key={bIndex} className="flex gap-1">
                      <IoMdCheckmark />
                      {benefit}
                    </li>
                  );
                })}
              </ul>
              <div className="flex w-full justify-center py-5">
                <button className="w-[50%] rounded-md bg-[--cta-green-color] p-3 font-medium text-[--gray-white-color]">
                  Update Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
