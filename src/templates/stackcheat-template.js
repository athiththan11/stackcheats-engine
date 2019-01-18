import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class StackCheatTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <div className="mt-5 container">
          <div className="row mb-2">
            {/* title block */}
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
              {/* <h1>{post.frontmatter.title}</h1> */}

              <div className="card bg-primary text-white border-0 p-3">
                <div className="card-body">
                  <h5 className="card-title mb-0">{post.frontmatter.title}</h5>
                </div>
              </div>
            </div>
          </div>

          {/* intro block */}
          <div className="row mb-5">
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-4">
              {/* <h1>{post.frontmatter.title}</h1> */}

              <div className="card p-3">
                <div className="card-body">
                  <p className="card-text">{post.frontmatter.intro}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default StackCheatTemplate

export const pageQuery = graphql`
  query StackCheatBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        intro
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
