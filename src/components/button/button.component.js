import React from "react"
import "./button.styles.scss"

const Button = ({ btn_text }) => (
  <a
    href="https://www.facebook.com/groups/184268029569784/"
    className="cta-btn"
  >
    {btn_text}
  </a>
)

export default Button
