import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div className="container my-5">
          <div className="row">
            <div className="col-4">
              <div className="card h-100 border-0">
                <div className="card-body">
                  <p className="card-title display-1 h-100 font-weight-lighter text-muted">stack<br/>cheats</p>
                </div>
              </div>
            </div>
            <div className="col">

              <div className="row">
                <div className="container card-columns count-2">

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Getting Started with MEAN Stack
                      </h5>
                      <p className="card-text">A simple guide on getting started with MEAN Stack</p>

                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Wickram updated 2019
                    </small>
                      </footer>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        In-Depth of MEAN Stack with NG2+
                      </h5>
                      <p className="card-text">In-depth tech review on MEAN Stack with NG2+</p>

                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Dhinesh Kumar updated 2018
                        </small>
                      </footer>
                    </div>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="container card-columns count-2">

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        What's new on NG8
                  </h5>
                      <p className="card-text">An overall study about NG8 and its performance measures</p>

                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Jeneepan Rajadurai updated 2020 
                    </small>
                      </footer>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        OAuth Grant Types: A Story Guide
                  </h5>
                      <p className="card-text">A story guide explaining all relative OAuth2 grant flows</p>

                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Athiththan updated 2017
                    </small>
                      </footer>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="container card-columns">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div className="card" key={node.fields.slug}>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link
                      style={{ textDecoration: `none` }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h5>
                  <p className="card-text">{node.frontmatter.intro}</p>

                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      {node.frontmatter.updated}
                    </small>
                  </footer>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            intro
            updated(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
