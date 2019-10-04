/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={`${data.site.siteMetadata.title} 🤟`}/>
      <div className="wrapper">
        <main>
          {children}
        </main>
      </div>

      <footer>
          <div className="links">
            <Link className="link" to="/question-1">one</Link>
            <Link className="link" to="/question-1">one</Link>
            <Link className="link" to="/question-1">one</Link>
            <Link className="link" to="/question-1">one</Link>
            <Link className="link" to="/question-1">one</Link>
            <Link className="link" to="/question-1">one</Link>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
