import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <AniLink paintDrip duration={.75} color="rebeccapurple" to="/">{siteTitle}</AniLink>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
