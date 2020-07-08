/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header/header.component"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
   
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Green Yoga</footer>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
