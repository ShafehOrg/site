import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Shafeh: Your Bookcase.</h1>
    <p>We provide resources for common Jewish practices.</p>
    <div>
      {/* <Image /> */}
    </div>
    <Link to="/siddur/">Siddur</Link>
    <br />
    <Link to="/tikkun/">Tikkun Korim</Link>
    <br />
    <Link to="/megillah/">Megillah</Link>
  </Layout>
)

export default IndexPage
