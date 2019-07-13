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

    return <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

        <div className="container my-5">
          <div className="row">
            <div className="col-6">
              <h1 className="display-3 h-100 font-weight-lighter text-muted">
                stackcheats
              </h1>
            </div>
          </div>
        </div>

        <div className="container card-columns">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return <div className="card rounded-5" key={node.fields.slug}>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link style={{ textDecoration: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h5>
                  <p className="card-text">{node.frontmatter.intro}</p>

                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      {node.frontmatter.author} on {node.frontmatter.updated}
                    </small>
                  </footer>
                </div>
              </div>
          })}
        </div>
      </Layout>
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
            author
            short
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
