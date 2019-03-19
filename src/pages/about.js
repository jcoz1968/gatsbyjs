import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>This is the about page</h1>
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About me</Link>
    </div>    
    <p>
      Lorem ipsum dolor sit amet.
    </p>
  </Layout>
)
