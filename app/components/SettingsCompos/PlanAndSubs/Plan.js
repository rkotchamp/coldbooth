export default function Plan() {
  return (
    <div className="flex w-[630px] items-end justify-start gap-10">
      <div>
        <p className="font-medium">Current Plan</p>
        <p className="font-bold-headers">Starter Plan</p>
        <p className="text-[--gray-dark-color]">
          Monthly Plan billed as $5 every every month
        </p>
      </div>
      <div className="flex h-full items-end">
        <p className="font-bold-headers">$5</p>
        <p className="text-[--gray-dark-color]">per month</p>
      </div>
    </div>
  );
}
