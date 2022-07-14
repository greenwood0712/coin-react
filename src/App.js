import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import useKripto from "./Kripto";
import IsFavorite from "./IsFavorite";
import Header from "./Header";

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h"
      );
      let data = await res.json();
      data = data.map((item) => ({ ...item, isFav: false }));
      setItems(data);
    }
    getData();
  }, []);

  const { render, handleClick } = useKripto(items, setItems);

  return (
    <div className="App">
      <Header />
      <IsFavorite items={items} setItems={setItems} handleClick={handleClick} />
      {render}
    </div>
  );
}

export default App;
