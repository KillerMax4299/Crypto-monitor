import Row_elem from "./Row_elem";

const CryptoList = ({ data }) => {
  if (!data) {
    return (
      <div className="h-[560px] bg-sky-200 dark:bg-slate-800 animate-pulse" />
    );
  } else {
    return (
      <div
        className="flex  flex-col"
        style={{ fontFamily: "Barlow Condensed" }}
      >
        {/* <Rows elem={""} /> */}
        {data.slice(1).map((elem, rank) => {
          return <Rows elem={elem} rank={rank + 2} />;
        })}
      </div>
    );
  }
};

export default CryptoList;

const Rows = ({ elem, rank }) => {
  const { base_unit, volume, last, buy, sell, open } = elem;

  return (
    <div className="justify-evenly md:justify-around flex backdrop-brightness-105 cursor-pointer dark:backdrop-brightness-150 hover:backdrop-brightness-95 dark:hover:backdrop-brightness-200 text-black dark:text-white rounded-xl mt-2 h-auto items-center uppercase">
      <Row_elem value={rank} name={"rank"} type={"rank"} />
      <Row_elem value={base_unit} name={"currency"} type={"currency"} />
      <Row_elem value={last} name={"Last Trade price"} type={"last"} />
      <Row_elem value={volume} name={"volume"} type={"volume"} />
      <Row_elem value={sell - buy} name={"profit"} type={"price"} />
      <Row_elem
        value={((last - open) / open) * 100}
        name={"% of return"}
        type={"percent"}
      />
    </div>
  );
};
