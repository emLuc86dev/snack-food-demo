import { type } from "os";
import React, { useState } from "react";
import EmailSVG from "./svg/EmailSVG";
import FaxSVG from "./svg/FaxSVG";
import LocateSVG from "./svg/LocateSVG";
import SnackVoting from "./SnackVoting";

type checkEventType = React.ChangeEvent<HTMLInputElement>;
// | React.MouseEvent<HTMLInputElement>;

const checkList = [
  { name: "form-employee", value: "I am a Nerdery employee" },
  { name: "form-notify", value: "Notify Me for Special Offers!" },
];
const Article = () => {
  const [isChecked, setIsChecked] = useState<boolean[]>(
    new Array(checkList.length).fill(false)
  );

  const handleCheck = (e: checkEventType) => {
    const findEl = checkList.findIndex((item) => item.name === e.target.value);
    console.log(findEl);
    console.log(e.target.name);

    setIsChecked((prev) => {
      return [(prev[findEl] = prev[findEl] === true ? false : true)];
    });
    console.log("index", findEl, isChecked);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // console.log("clicked");
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
                      <label
                        className="u-isVisuallyHidden"
                        // for="form-firstname"
                      >
                        Fist Name
                      </label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Fist Name"
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label
                        className="u-isVisuallyHidden"
                        //    for="form-lastname"
                      >
                        Last Name
                      </label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label
                        className="u-isVisuallyHidden"
                        //   for="form-email"
                      >
                        Email
                      </label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Email"
                      />
                    </div>
                    <div className="inputForm-item inputForm-item_half">
                      <label
                        className="u-isVisuallyHidden"
                        // for="form-phonenumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="inputForm-text"
                        type="text"
                        name=""
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="inputForm-item">
                      <label
                        className="u-isVisuallyHidden"
                        //   for="form-message"
                      >
                        Message
                      </label>{" "}
                      <textarea
                        className="inputForm-area"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="inputForm-item">
                      {checkList.map((item, index: number) => {
                        return (
                          <div
                            className="inputForm-item-checkGroup"
                            key={index}
                          >
                            <label

                            // for="form-employee"
                            >
                              <input
                                id={`${item.name}`}
                                className="u-isVisuallyHidden"
                                type="checkbox"
                                name={item.name}
                                value={item.name}
                                checked={isChecked[index]}
                                onChange={handleCheck}
                                // onClick={handleClick}
                              />

                              {item.value}
                              {/* I am a Nerdery employee */}
                            </label>
                          </div>
                        );
                      })}
                      {/* <div className="inputForm-item-checkGroup">
                        <input
                          id="form-employee"
                          className="u-isVisuallyHidden"
                          type="checkbox"
                          name="checkFirst"
                          checked={isChecked}
                          onChange={handleCheck}
                          // onClick={handleCheck}
                        />
                        <label
                        // for="form-employee"
                        >
                          I am a Nerdery employee
                        </label>
                      </div> */}
                      {/* <div className="inputForm-item-checkGroup">
                        <input
                          id="form-notify"
                          className="u-isVisuallyHidden"
                          type="checkbox"
                          name="checkSecond"
                          checked={isChecked}
                          onChange={handleCheck}
                          // onClick={handleCheck}
                        />
                        <label
                        // for="form-notify"
                        >
                          Notify Me for Special Offers!
                        </label>
                      </div> */}
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
                        {/* <use xlink:href="#icon-email"></use> */}
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
                        {/* <use xlink:href="#icon-fax"></use> */}
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
                        {/* <use xlink:href="#icon-locate"></use> */}
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
