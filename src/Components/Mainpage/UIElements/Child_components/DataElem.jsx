import { useEffect, useState } from "react";

const DataElem = ({ value, name, type }) => {

  const [color, setColor] = useState("")
  

  function colorHandle() {
    if ((type == "price" || type == "percent") && value < 0) {
      setColor("text-red-500")
    } else {
      setColor("text-green-500")
    }
  }
  useEffect(() => {
    colorHandle()
  },[])


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
      <div className={`w-36 md:w-28 lg:w-32 2xl:w-52 flex flex-col items-center uppercase ${color}`}>
        {isNaN(parsedVal) ? (
          <span className="text-4xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase">
            {value}
          </span>
        ) : (
          <span className="text-4xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase">
            {formattedString}
          </span>
        )}
        <span className="text-sm lg:text-base xl:text-xl font-semibold text-slate-400 dark:text-slate-500">
          {name}
        </span>
      </div>
    );
  } else if (type == "percent") {
    return (
      <div className={`w-36 md:w-28 lg:w-32 2xl:w-52 flex flex-col items-center uppercase ${color}`}>
        {isNaN(parsedVal) ? (
          <span className="text-4xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase">
            {value}
          </span>
        ) : (
          <span className="text-4xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase">
            {parsedVal + "%"}
          </span>
        )}
        <span className="text-sm lg:text-base xl:text-xl font-semibold text-slate-400 dark:text-slate-500">
          {name}
        </span>
      </div>
    );
  } else
    return (
      <div
        className={`w-36 md:w-28 lg:w-32 2xl:w-52 flex flex-col items-center uppercase`}
      >
        {isNaN(parsedVal) ? (
          <span className="text-4xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase">
            {value}
          </span>
        ) : (
          <span className="text-4xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase">
            {parsedVal}
          </span>
        )}
        <span className="text-sm lg:text-base xl:text-xl font-semibold text-slate-400 dark:text-slate-500">
          {name}
        </span>
      </div>
    );
};

export default DataElem;
