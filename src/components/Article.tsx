import React, { useState } from "react";
import EmailSVG from "./svg/EmailSVG";
import FaxSVG from "./svg/FaxSVG";
import LocateSVG from "./svg/LocateSVG";
import SnackVoting from "./SnackVoting";
import StockCard from "./StockCard";

type checkEventType = React.ChangeEvent<HTMLInputElement>;

type checkListType = {
  name: string;
  value: string;
  checked: boolean;
};

let checkList: checkListType[] = [
  {
    name: "form-employee",
    value: "I am a Nerdery employee",
    checked: false,
  },
  {
    name: "form-notify",
    value: "Notify Me for Special Offers!",
    checked: false,
  },
];
const Article = () => {
  const [isChecked, setIsChecked] = useState<checkListType[]>(checkList);

  const handleCheck = (e: checkEventType) => {
    const findEl = checkList.findIndex((item) => item.name === e.target.value);
    const saveValue = e.target.checked;
    checkList[findEl].checked =
      checkList[findEl].checked === saveValue ? !saveValue : saveValue;

    setIsChecked([...checkList]);
  };

  return (
    <div className="site-bd">
      <div className="site-bd-section">
        <div className="heroBanner">
          <div className="heroBanner-content u-constrainer">
            <div className="heroBanner-content-hd">
              <h1 className="hdg hdg_1">Nerdery Snack Food System</h1>
            </div>
            <div className="heroBanner-content-bd">
              <p className="copy">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="heroBanner-content-ft">
              <button className="btn">Vote Now</button>
            </div>
          </div>
        </div>
      </div>
      <StockCard />
      <SnackVoting />
      <div className="site-bd-section site-bd-section_gray">
        <div className="u-constrainer">
          <div className="layoutPanel">
            <div className="layoutPanel-hd">
              <div className="layoutPanel-hd-title">
                <h2 className="hdg hdg_2 mix-hdg_dark">
                  Sign up for Snafoo updates!
                </h2>
              </div>
            </div>
            <div className="layoutPanel-bd">
              <div className="grid">
                <div className="grid-col grid-col_2of3">
                  <form className="inputForm">
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Fist Name</label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Fist Name"
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Last Name</label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Email</label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label className="u-isVisuallyHidden">Phone Number</label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="inputForm-item">
                      <label className="u-isVisuallyHidden">Message</label>{" "}
                      <textarea
                        className="inputForm-area"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="inputForm-item">
                      {isChecked.map((item, index: number) => {
                        return (
                          <div
                            className="inputForm-item-checkGroup"
                            key={index}
                          >
                            <input
                              id={`${item.name}`}
                              className="u-isVisuallyHidden"
                              type="checkbox"
                              name={item.name}
                              value={item.name}
                              onChange={handleCheck}
                              checked={item.checked}
                            />
                            <label htmlFor={item.name}>{item.value}</label>
                            {item.checked}
                          </div>
                        );
                      })}
                    </div>
                    <div className="inputForm-item">
                      <input
                        className="btn btn_dark"
                        type="submit"
                        value="Sign Up"
                      />
                    </div>
                  </form>
                </div>
                <div className="grid-col grid-col_1of3">
                  <div className="media u-vr_x4">
                    <div className="media-figure">
                      <svg className="icon">
                        <EmailSVG />
                      </svg>
                    </div>
                    <div className="media-bd">
                      <span className="assideText">info@nerdery.com</span>
                    </div>
                  </div>
                  <div className="media u-vr_x4">
                    <div className="media-figure">
                      <svg className="icon">
                        <FaxSVG />
                      </svg>
                    </div>
                    <div className="media-bd">
                      <span className="assideText">(877) 664.6373</span>
                    </div>
                  </div>
                  <div className="media u-vr_x4">
                    <div className="media-figure">
                      <svg className="icon">
                        <LocateSVG />
                      </svg>
                    </div>
                    <div className="media-bd">
                      <span className="assideText">
                        The Nerdery Snafoo Team
                        <br />
                        9555 James Ave. S.
                        <br />
                        Bloomington MN, 55431
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
