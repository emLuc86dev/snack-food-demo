import React from "react";
import "./StockCard.css";
import bearNakedImg from "../assets/media/images/stock/01.jpg";
import emerald from "../assets/media/images/stock/02.jpg";
import kashi from "../assets/media/images/stock/03.jpg";
import clif_bar from "../assets/media/images/stock/04.jpg";
import nature_valley from "../assets/media/images/stock/05.jpg";
import chobani from "../assets/media/images/stock/06.jpg";

const stockListImg = [
  {
    name: "Bear Naked",
    img: `${bearNakedImg}`,
    description: "V'Nilla Almund Granola",
    amount: 12,
  },
  {
    name: "Emerald Nuts",
    img: `${emerald}`,
    description: "Dill Pickle-Flavored Cashews",
    amount: 5,
  },
  {
    name: "Kashi",
    img: `${kashi}`,
    description: "Honey Pecan Baklava Bars",
    amount: 8,
  },
  {
    name: "Clif",
    img: `${clif_bar}`,
    description: "Cliff Energy Bars",
    amount: 29,
  },
  {
    name: "Nature Valley",
    img: `${nature_valley}`,
    description: "Crunch Granola Bars",
    amount: 3,
  },
  {
    name: "Chobani",
    img: `${chobani}`,
    description: "Greek Yogurt",
    amount: 11,
  },
];

const StockCard = () => {
  return (
    <div className="stock_card_container">
      <div className="snak-voting stock_card">
        <h2 className="hdg hdg_2 mix-hdg_dark snack stock_card">
          Currently In Stock
        </h2>
        <h4 className="hdg hdg_4 mix-hdg_dark snack stock_card">
          Here are the snacks that are available in the Nerdery kitchen now.
        </h4>
      </div>
      <div className="stock_card box_container">
        {stockListImg.map((card) => (
          <div className="card_data" key={card.name}>
            <div className="stock_card card_item" >
              <div className="stock_card baged">
                <div className="stock_card triangle">
                  <span className="stock_card triangle_number">
                    {card.amount}
                  </span>
                </div>
              </div> 
              <div className="stock_card picturte">
                <img src={`${card.img}`} alt={card.name} />
              </div>
            </div>
            <h6 className="hdg hdg_6 stock_card_description">
              {card.description}
            </h6>
            <span className="hdg stock_card_name">{card.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockCard;
