import { useState, useEffect } from "react";

const Row_elem = ({ value, name, type }) => {
  const [color, setColor] = useState("");

  function colorHandle() {
    if ((type == "price" || type == "percent") && value < 0) {
      setColor("text-red-500");
    } else {
      setColor("text-green-500");
    }
  }
  useEffect(() => {
    colorHandle();
  }, []);

  const parsedVal = Number.parseFloat(value).toFixed(2);
  function formatIndianCurrency(r) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(r);
  }

  const formattedString = formatIndianCurrency(parsedVal);

  if (type == "price") {
    return (
      <div className="w-36 flex flex-col items-center">
        <span className={`${color} text-4xl`}>{formattedString}</span>
        <span className="text-slate-500 font-semibold">{name}</span>
      </div>
    );
  } else if (type == "percent") {
    return (
      <div className="w-36 flex flex-col items-center">
        <span className={`${color} text-4xl`}>{parsedVal + "%"}</span>
        <span className="text-slate-500 font-semibold">{name}</span>
      </div>
    );
  } else if (type == "rank") {
    return (
      <div className="w-36 flex flex-col items-center">
        <span className={`text-4xl`}>{value}</span>
        <span className="text-slate-500 font-semibold">{name}</span>
      </div>
    );
  } else {
    return (
      <div className="w-36 flex flex-col items-center">
        {isNaN(parsedVal) ? (
          <span className="text-4xl">{value}</span>
        ) : (
          <span className="text-4xl">{parsedVal}</span>
        )}
        <span className="text-slate-500 font-semibold">{name}</span>
      </div>
    );
  }
};

export default Row_elem;
