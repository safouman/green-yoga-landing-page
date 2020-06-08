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
          <span>If You Can’t Go Outside </span>
          <span>Go Inside</span>
        </div>
        <div className="subhead">Our Green Yoga Tribe Is Growing</div>
        <Button btn_text="join the green yoga tribe" />
        <h2 className="headline-3">
          Green Yoga wants to support you on your way to find your true self.
        </h2>
      </div>
    </div>
    <FullLady className="full-lady"></FullLady>
    <LeftCornerLeaves className="left-corner-leaves" />
    <RightCornerLeaves className="right-corner-leaves"></RightCornerLeaves>
  </header>
)

export default Header
