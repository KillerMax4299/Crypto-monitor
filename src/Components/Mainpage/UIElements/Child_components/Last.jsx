const Last = ({ value }) => {
  function formatIndianCurrency(r) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(r);
  }
  const parsedVal = Number.parseFloat(value).toFixed(2),
    formattedString = formatIndianCurrency(parsedVal);

  return (
    <div className="flex flex-col items-center uppercase order-first md:order-none">
      <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase">
        {formattedString}
      </span>

      <span className="text-2xl 2xl:text-3xl font-semibold text-slate-400 dark:text-slate-500">
        last traded price
      </span>
    </div>
  );
};

export default Last;
