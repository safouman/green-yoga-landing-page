import React from "react"
import "./header.styles.scss"
import Button from "../button/button.component"

import UpperLeaves from "../../assets/upper-leaves.svg"
import FullLady from "../../assets/full-lady.svg"
import LeftCornerLeaves from "../../assets/left-corner-leaves.svg"
import RightCornerLeaves from "../../assets/right-corner-leaves.svg"
const Header = () => (
  <header>
    <UpperLeaves className="upper-leaves" />

    <div className="main">
      <div className="header-text">
        <div className="headline">
          <span>Let's Yoga & Plant Trees</span>
        </div>
        <div className="subhead">
          {" "}
          Green Yoga wants to support you on your way to find yourSelf.
        </div>
        <Button btn_text="Join our FREE FACEBOOK group now !" />
        <FullLady className="full-lady"></FullLady>
      </div>
    </div>

    <LeftCornerLeaves className="left-corner-leaves" />
    <RightCornerLeaves className="right-corner-leaves"></RightCornerLeaves>
  </header>
)

export default Header
