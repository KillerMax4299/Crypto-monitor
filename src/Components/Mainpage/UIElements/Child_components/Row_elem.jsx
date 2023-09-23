import { useState, useEffect } from "react";

const Row_elem = ({ value, name, type }) => {
  const [color, setColor] = useState("");
  const [width,setWidth] = useState("");

  function colorHandle() {
    if ((type == "price" || type == "percent") && value < 0) {
      setColor("text-red-500");
    } else {
      setColor("text-green-500");
    }
  }
  function widthHandle() {
    if (type == "rank")
      setWidth("w-8")
    else if (type == "currency")
      setWidth("w-8")
    else if (type == "last")
      setWidth("w-[90px] text-xl")
    else if (type == "volume")
      setWidth("w-9")
    else if (type == "price")
      setWidth("w-[60px]")
    else if (type == "percent")
      setWidth("w-fit")
  }

  useEffect(() => {
    colorHandle();
    widthHandle();
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
      <div className={`${width} md:w-36 flex flex-col items-center`}>
        <span className={`${color} md:text-4xl`}>{formattedString}</span>
        <span className="text-slate-500 md:font-semibold text-xs md:text-base">{name}</span>
      </div>
    );
  } else if (type == "percent") {
    return (
      <div className={`${width} md:w-36 flex flex-col items-center`}>
        <span className={`${color} md:text-4xl`}>{parsedVal + "%"}</span>
        <span className="text-slate-500 md:font-semibold text-xs md:text-base">
          {name}
        </span>
      </div>
    );
  } else if (type == "rank") {
    return (
      <div className={`${width} md:w-36 flex flex-col items-center`}>
        <span className={`text-3xl md:text-4xl`}>{value}</span>
        <span className="text-slate-500 md:font-semibold text-xs md:text-base">
          {name}
        </span>
      </div>
    );
  } else {
    return (
      <div className={`${width} md:w-36 flex flex-col items-center`}>
        {isNaN(parsedVal) ? (
          <span className="md:text-4xl">{value}</span>
        ) : (
          <span className="md:text-4xl">{parsedVal}</span>
        )}
        <span className="text-slate-500 md:font-semibold text-xs md:text-base">
          {name}
        </span>
      </div>
    );
  }
};

export default Row_elem;
