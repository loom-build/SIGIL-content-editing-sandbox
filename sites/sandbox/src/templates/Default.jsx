import React from 'react'
import { Layout } from 'gatsby-theme-contentful'
import { graphql } from 'gatsby'

const DefaultTemplate = ({ data }) => (
  <Layout data={data} />
)
export default DefaultTemplate

export const query = graphql`
  query DefaultTemplateQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      ...LeshenPage
    }
    site {
      ...LeshenMetadata
    }
  }
`
