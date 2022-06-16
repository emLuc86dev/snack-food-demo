import React from "react";
import { FaPlus, FaPlusSquare } from "react-icons/fa";
import "./SnackVoting.css";

const itemsList = [
  { name: "Nabisco Oreo Cookies", amount: 3 },
  { name: "General Mills Chex Mix", amount: 11 },
  { name: "Clif Chocolate Chip Energy Bar", amount: 8 },
  { name: "Cheetos Chips", amount: 12 },
  { name: "Baked Lays Potato Chips", amount: 4 },
  { name: "Hersheys Milk Chocolate", amount: 5 },
  { name: "Jack Links Beef Jerky", amount: 8 },
  { name: "Planters Salted Peanuts", amount: 2 },
];
const SnackVoting = () => {
  return (
    <div className="snak-voting">
      <h2 className="hdg hdg_2 mix-hdg_dark snack">Snack Voting</h2>
      <h4 className="hdg hdg_4 mix-hdg_dark snack">
      Vote on the snacks you want to see in this month's rotation
      </h4>
      <div className="snack-info">
        <span className="assideText snack">3 Votes Remaining</span>
      </div>
      <div className="snack-content-items">
        <div className="snack-avilable-items">
          <div className="snack-tb-info">
            <h4 className="hdg hdg_4 snack-avilable-item">Available Items</h4>
            <div className="snack-baged">
              <span className="snack-baged-num">{itemsList.length}</span>
            </div>
          </div>
          {itemsList.map((item) => (
            <div className="snack-tb-item" key={item.name}>
              <div className="snack-tb-item snack_plus_icon">
                <FaPlus className="sanck_svg fa-plus" height={"100%"} fill={"#ffffff"} />
              </div>
              <div className="snack-tb-item snack_name">
                <h6 className="hdg hdg_6 mix-hdg_dark snack-avilable-item">
                  {item.name}
                </h6>
                <div className="snack-baged snack_amount">
                  <span className="snack-baged-num">{item.amount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="snack-avilable-items selection">
          <div className="snack-tb-info selection">
            <h4 className="hdg hdg_4 mix-hdg_dark snack-avilable-item selection">
              Selection
            </h4>
            <div className="snack-baged selection">
              <span className="snack-baged-num selection">
                {itemsList.length}
              </span>
            </div>
          </div>
          {itemsList.map((item) => (
            <div className="snack-tb-item selection" key={item.name}>
              <div className="snack-tb-item snack_name selection">
                <h6 className="hdg hdg_6 mix-hdg_dark snack-avilable-item selection">
                  {item.name}
                </h6>
                <div className="snack-baged snack_amount">
                  <span className="snack-baged-num">{item.amount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnackVoting;
