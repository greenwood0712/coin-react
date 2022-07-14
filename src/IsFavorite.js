import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function IsFavorite({ items, setItems, handleClick }) {
  const [favitems, setFavItems] = useState();
  useEffect(() => {
    if (items) {
      setFavItems(items.filter((item) => item.isFav === true));
    }
  }, [items]);

  const removeStar = (e, id) => {
    e.preventDefault();
    setFavItems([...favitems.filter((item) => item.id !== id)]);
    setItems(items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            isFav: false,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="container">
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
        {favitems &&
          favitems.map((item) => {
            return (
              <tbody key={item.id}>
                <tr className="Kripto-moneys-tablebody">
                  <td>
                    <i
                      className="fa-solid fa-star yellow"
                      onClick={(e) => removeStar(e, item.id)}
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
          })}
      </Table>
    </div>
  );
}

export default IsFavorite;
