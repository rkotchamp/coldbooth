"use client";
import React from "react";
import { useStripeCheckout } from "@/app/lib/useStripeCheckout";
import { BsShieldFillCheck } from "react-icons/bs";

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  isPopular,
  onStartTrial,
  billed,
  saveUp,
  period,
}) => {
  const { handleCheckout, isLoading, error } = useStripeCheckout();

  return (
    <div
      className={`card w-[90%] border bg-base-100 sm:w-[90%] md:w-[75%] lg:w-[50%] ${isPopular && "border-2 border-[--cta-green-color]"} shadow-xl`}
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
          <p className="text-gray-dark-color text-[12px]">{subtitle}</p>
        </div>

        {/* Price Section */}
        <div className="flex flex-col items-baseline">
          <div className="flex items-baseline">
            <span className="text-[30px] font-extrabold text-[--text-black-color]">
              ${price}
            </span>
            <span className="ml-1 text-[12px] text-[--gray-dark-color]">
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
              <span className="text-[16px] text-[--text-black-color]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Card Actions */}
        <div className="card-actions flex-col">
          <button
            onClick={() => handleCheckout(title.toLowerCase(), period)}
            className="btn btn-success w-full bg-[--cta-green-color] text-[--gray-white-color]"
          >
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Start 7 days free trial"
            )}
          </button>
          {/* <div className="flex w-full items-center justify-center gap-0"> */}
          <p className="flex w-full items-center justify-center gap-1 p-0 text-[12px]">
            <BsShieldFillCheck className="text-[--cta-green-color]" />
            $0.00 due today, cancel anytime
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
