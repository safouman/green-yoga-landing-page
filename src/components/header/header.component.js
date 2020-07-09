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
          <span>Help Us Plant Trees And Share With Us Our Daily Yoga And Meditation
Practices. </span>
        </div>
        <div className="subhead">
          {" "}
          An online community for Yoga, Meditation and Tree Lovers.
        </div>
        <Button btn_text="Join our Green Yoga Facebook Group! " />
        <FullLady className="full-lady"></FullLady>
        <h2 className="headline-2">
        An Online Community For Us All To Share Our Experiences And Grow
With One Another
        </h2>
      </div>
    
    </div>

    <LeftCornerLeaves className="left-corner-leaves" />
    <RightCornerLeaves className="right-corner-leaves"></RightCornerLeaves>
    
  </header>
)

export default Header
