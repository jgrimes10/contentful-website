import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className="card">
    <Img className="card-img-top" alt="" sizes={article.heroImage.sizes} />
    <div className="card-body">
      <h3
        className="card-title"
        onClick={() => navigateTo(`/blog/${article.slug}`)}
      >
        {article.title}
      </h3>
      <small className="text-secondary">{article.publishDate}</small>
      <p
        className="card-text"
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
    <button
      className="btn btn-outline-secondary"
      onClick={() => navigateTo(`/blog/${article.slug}`)}
      role="link"
    >
      Read More
    </button>
  </div>
)
