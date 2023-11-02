import { useEffect, useState } from "react";
import TopPrice from "../TopPrice";
import Topbar from "./Topbar";
import axios from "axios";
import CryptoList from "./Child_components/CryptoList";

const UIElelemts = ({ changeTheme, dark }) => {
  const [dataset, setDataset] = useState(null);
  const [first, setFirst] = useState(null);

  async function dataFetch() {
    await axios
      .get("https://crypto-api-beryl.vercel.app/top10")
      .then(({ data }) => {
        setDataset(data);
      });
  }

  useEffect(() => {
    if (dataset) setFirst(dataset[0]);
  }, [dataset]);

  useEffect(() => {
    dataFetch();
    const intervalId = setInterval(() => {
      dataFetch();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <Topbar changeTheme={changeTheme} dark={dark} />
      <TopPrice data={first} />
      <CryptoList data={dataset} />
    </div>
  );
};

export default UIElelemts;
