import React from "react"
import "./button.styles.scss"

const Button = ({ btn_text }) => (
  <button
    
    className="cta-btn"
    onClick={( )=>(window.location.href="https://www.facebook.com/groups/184268029569784/")}
  >
    {btn_text}
  </button>
)

export default Button
