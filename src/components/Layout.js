import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    // checks for home page and post page to render different types of header elements
    // if (location.pathname === rootPath) {
    //   header = (
    //     <h3 className="container display-4 mt-5">
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // } else {
    //   header = (
    //     <h3 className="container display-4 mt-5">
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }

    // header = (
    //   <h3 className="container display-4 mt-5">
    //     <Link
    //       style={{
    //         boxShadow: `none`,
    //         textDecoration: `none`,
    //         color: `inherit`
    //       }}
    //       to={`/`}
    //     >
    //       {title}
    //     </Link>
    //   </h3>
    // )

    if (location.pathname === rootPath) {
      header = <div className="container pt-5" />
    } else {
      header = (
        <h4 className="display-5 py-5 px-3 font-weight-light text-muted">
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h4>
      )
    }

    return (
      <div className="container">
        {/* head element */}
        {header}

        {/* body or child element */}
        {children}
      </div>
    )
  }
}

export default Layout
