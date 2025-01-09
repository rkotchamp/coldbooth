import React from "react";

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  isPopular,
  onStartTrial,
  billed
}) => {
  return (
    <div className="border-gray-light-border-color card w-72 border bg-base-100 shadow-xl">
      {/* Card Header */}
      <div className="card-body gap-4 p-6">
        <div>
          <h3 className="text-text-black-color card-title">
            {title}
            {isPopular && (
              <div className="badge badge-success text-[var(--low-small-smallFont)]">
                Most Popular
              </div>
            )}
          </h3>
          <p className="text-gray-dark-color text-[var(--low-small-smallFont)]">
            {subtitle}
          </p>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline">
          <span className="text-text-black-color font-extrabold text-[var(--upper-midFont)]">
            ${price}
          </span>
          <span className="text-gray-dark-color ml-1 text-[var(--low-small-smallFont)]">
            /month
          </span>
        </div>

        {/* Features List */}
        <ul className="space-y-3">
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
            className="btn btn-success w-full text-white"
          >
            Start 7 days free trial
          </button>
          <p className="text-gray-dark-color text-center text-[var(--low-small-smallFont)]">
            $0.00 due today, cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
