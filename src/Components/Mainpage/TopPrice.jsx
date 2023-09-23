import DataElem from "./UIElements/Child_components/DataElem";
import Last from "./UIElements/Child_components/Last";

const TopPrice = ({ data }) => {
  if (!data) {
    return <div className="my-4 bg-sky-200 dark:bg-slate-800 animate-pulse h-60 rounded-2xl"></div>;
  } else {
    const { base_unit, volume, last, buy, sell, open } = data;
    return (
      <>
        <div
          className="my-4 h-60 flex flex-col md:flex-row justify-around items-center text-black dark:text-white"
          style={{ fontFamily: "Barlow Condensed" }}
        >
          <div className="flex flex-row">
            <DataElem value={base_unit} name={"currency"} />
            <DataElem value={volume} name={"volume"} />
          </div>
          <Last value={last} />
          <div className="flex flex-row">
            <DataElem value={sell - buy} name={"profit"} type={"price"} />
            <DataElem
              value={((last - open) / open) * 100}
              name={"% of return"}
              type={"percent"}
            />
          </div>
        </div>
      </>
    );
  }
};

export default TopPrice;
