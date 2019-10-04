import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
      <TransitionPortal>
          <Header siteTitle={`${data.site.siteMetadata.title} 🤟`}/>
      </TransitionPortal>
      <div className="wrapper">

        <main>
          {children}
        </main>
      </div>

      <TransitionPortal>
        <footer>
          <div className="links">

            <AniLink
              className="link"
              swipe
              direction="down"
              entryOffset={200}
              to="/question-1">
                Q1
              </AniLink>
            <AniLink className="link" swipe direction="up" entryOffset={200} to="/question-2">Q2</AniLink>
            <Link className="link" to="/question-1">Q3</Link>
            <Link className="link" to="/question-1">Q4</Link>
            <Link className="link" to="/question-1">Q5</Link>
            <Link className="link" to="/question-1">Q6</Link>
          </div>
        </footer>
      </TransitionPortal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
