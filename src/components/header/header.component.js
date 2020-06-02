import React from "react"
import "./header.styles.scss"
import Button from "../button/button.component"
const Header = () => (
  <header>
    <div className="header-text">
      <div className="headline">
        <span>If You Can’t Go Outside</span>
        <span>Go Inside</span>
      </div>
      <div className="subhead">Our Green Yoga Tribe Is Growing</div>
      <Button btn_text="join the green yoga tribe" />
    </div>
  </header>
)

export default Header
