const { defaults } = require("autoprefixer");

export default function PriceCard({
  title,
  price,
  features,
  isPopular,
  onSubscribe,
}) {
  return (
    <div
      className={`rounded-lg border p-6 text-center ${
        isPopular
          ? "border-cta-green-color bg-light-mint-green-color"
          : "border-gray-light-border-color bg-pure-White"
      }`}
    >
      {/* If the plan is marked as popular, display a "Most Popular" label */}
      {isPopular && (
        <div className="bg-cta-green-color text-pure-White text-low-small-smallFont mb-4 inline-block rounded-md px-4 py-1 font-medium">
          Most Popular
        </div>
      )}

      {/* Plan title */}
      <h2 className="text-mid-medium-midFont text-text-black-color mb-2 font-bold">
        {title}
      </h2>

      {/* Price display */}
      <p className="text-upper-midFont text-primary-green-color mb-4 font-extrabold">
        ${price}/month
      </p>

      {/* Features list */}
      <ul className="text-gray-dark-color text-low-small-smallFont mb-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            ✅ {feature}
          </li>
        ))}
      </ul>

      {/* Subscription button */}
      <button
        onClick={onSubscribe}
        className="bg-cta-green-color text-pure-White text-reg-normal-normFont hover:bg-active-hover-green-bg-color rounded-md px-4 py-2 font-medium"
      >
        Subscribe
      </button>
    </div>
  );
}
