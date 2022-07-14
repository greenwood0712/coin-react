import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "./index.css";

export default function useKripto(items, setItems) {
  const [searchFormData, setSearchFormData] = useState("");

  const handleClick = (event) => {
    setItems(
      items.map((item) => {
        if (item.symbol === event.target.attributes[1].nodeValue) {
          item.isFav = !item.isFav;
        }
        return item;
      })
    );
  };

  let tablebody;
  if (items)
    tablebody = items
      .filter((val) => {
        if (searchFormData === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(searchFormData.toLowerCase())
        )
          return val.name;
      })
      .map((item) => {
        return (
          <tbody key={item.id}>
            <tr className="Kripto-moneys-tablebody">
              <td>
                <i
                  className={`fa-solid fa-star ${item.isFav ? "yellow" : "black"}`}
                  value={item.symbol}
                  onClick={handleClick}
                ></i>
              </td>
              <td>{item.market_cap_rank}</td>
              <td>
                <img className="kripto-resim" src={item.image} alt="" />
                {item.name}
              </td>
              <td>{item.symbol}</td>
              <td>{item.current_price.toLocaleString()} $</td>
              <td>{item.market_cap.toLocaleString()}</td>
              <td>
                {item.high_24h.toLocaleString()} /{" "}
                {item.low_24h.toLocaleString()}
              </td>
              <td>{item.price_change_24h.toLocaleString()}</td>
            </tr>
          </tbody>
        );
      });

  return {
    handleClick,
    render: (
      <div className="Kripto-moneys-all container">
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchFormData(event.target.value);
            }}
          />
        </form>
        <Table responsive="sm">
          <thead>
            <tr>
              <th></th>
              <th>No.</th>
              <th>İsim</th>
              <th>Sembol</th>
              <th>Fiyat(USD)</th>
              <th>Piy.Değ.</th>
              <th>(24S)En y./(24S)En d.</th>
              <th>Değ(24S)</th>
            </tr>
          </thead>
          {tablebody}
        </Table>
      </div>
    ),
  };
}
