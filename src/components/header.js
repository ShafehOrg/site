import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <h1 className="siteTitle">
        <Link to="/" >{siteTitle}</Link>
      </h1>
      <nav>
        <Link to="/siddur/">Siddur</Link>
        <Link to="/tikkun/">Tikkun Korim</Link>
        <Link to="/megillah/">Megillah</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `hi`,
}

export default Header
