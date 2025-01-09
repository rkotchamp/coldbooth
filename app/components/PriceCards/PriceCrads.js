import React from "react";

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  isPopular,
  onStartTrial,
  billed,
  saveUp,
}) => {
  return (
    <div
      className={`card w-[50%] border bg-base-100 ${isPopular && "border-2 border-[--cta-green-color]"} shadow-xl`}
    >
      {/* Card Header */}
      <div className="card-body gap-4 p-6">
        <div>
          <h3 className="text-text-black-color card-title">
            {title}
            {isPopular && (
              <div className="badge badge-success bg-[--cta-green-color] p-3 text-[12px] font-bold text-[--gray-white-color]">
                Most Popular
              </div>
            )}
          </h3>
          <p className="text-gray-dark-color text-[var(--low-small-smallFont)]">
            {subtitle}
          </p>
        </div>

        {/* Price Section */}
        <div className="flex flex-col items-baseline">
          <div className="flex items-baseline">
            <span className="text-text-black-color font-extrabold text-[var(--upper-midFont)]">
              ${price}
            </span>
            <span className="text-gray-dark-color ml-1 text-[var(--low-small-smallFont)]">
              /month
            </span>
          </div>
          {billed && <p className="text-[12px]">{billed}</p>}
          {saveUp && <p className="text-[--cta-green-color]">{saveUp}</p>}
        </div>

        {/* Features List */}
        <ul className="h-[80%] space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="mr-3 mt-1 h-4 w-4 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-text-black-color text-[var(--reg-normal-normFont)]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Card Actions */}
        <div className="card-actions flex-col">
          <button
            onClick={onStartTrial}
            className="btn btn-success w-full bg-[--cta-green-color] text-[--gray-white-color]"
          >
            Start 7 days free trial
          </button>
          <p className="text-gray-dark-color text-center text-[12px]">
            $0.00 due today, cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
