import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql, Link } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <TransitionPortal>
          <Header siteTitle={`🤟`}/>
      </TransitionPortal> */}

      <div className="wrapper">
        <main>
          {children}
        </main>
      </div>

      <TransitionPortal>
        <footer>
          <div className="links">
            <AniLink className="link" paintDrip duration={.75} color="rebeccapurple" to="/">{`🏠`}</AniLink>
            <AniLink className="link" swipe direction="down" entryOffset={200}to="/question-1">Q1</AniLink>
            <AniLink className="link" swipe direction="left" entryOffset={200} to="/question-2">Q2</AniLink>
            <AniLink className="link" swipe direction="left" entryOffset={200} to="/question-3">Q3</AniLink>
            <AniLink className="link" swipe direction="left" entryOffset={200} to="/questions-4-12">Q4</AniLink>
            {/* <Link className="link" to="/question-1">Q5</Link>
            <Link className="link" to="/question-1">Q6</Link> */}
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
