import React, { Component } from "react"
import { PropTypes } from "react"
import Helmet from "react-helmet"
import Sidebar from "react-sidebar"

import Footer from "../Footer"
import SidebarContent from "../SidebarContent"

import styles from "./index.css"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
  }

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <Sidebar
        sidebar={ <SidebarContent /> }
        docked
      >
        <Helmet
          meta={ [
            { property: "og:site_name", content: pkg.name },
            { name: "twitter:site", content: `@${ pkg.twitter }` },
          ] }
        />
        <div className={ styles.content }>
          { this.props.children }
        </div>
        <Footer />
      </Sidebar>
    )
  }
}
