import * as React from "react"

import Body from "../components/body"
import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/global.css"

const IndexPage = () => (
  <div class="site-container">
    <div class="site-content-container">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  </div>
)

export default IndexPage
