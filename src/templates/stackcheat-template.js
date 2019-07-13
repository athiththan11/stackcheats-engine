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

        <div className="container stackcheat-container my-5">
          <div className="row mb-2">
            {/* title block */}
            <div className="col">
              <h1 style={{ fontFamily: 'Poiret none' }}>
                {post.frontmatter.title}
              </h1>
              <h4
                className="text-secondary font-weight-light"
                style={{ fontFamily: 'Poiret none' }}
              >
                {post.frontmatter.intro}
              </h4>
            </div>
          </div>

          {/* intro block */}
          <div className="row pt-4">
            <div className="col text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />
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
