import React from 'react'
import { Layout } from 'gatsby-theme-contentful'
import { Header, Footer, Link } from 'gatsby-theme-leshen'
import { graphql } from 'gatsby'
import headerLogo from '../images/clearlink-logo.png'
import {
  defaultTemplatePrimary,
  topBarItems,
  footerNavItems,
} from '../siteData/navigation.yml'

const DefaultTemplate = ({ data }) => (
  <Layout
    data={data}
    header={
      <Header
        logo={
          <Link to="/">
            <img
              src={headerLogo}
              alt="Logo"
              style={{ height: '45px', padding: '5px 0' }}
            />
          </Link>
        }
        navData={defaultTemplatePrimary}
        topBarNavData={topBarItems}
      />
    }
    footer={
      <Footer
        logo={<img src={headerLogo} alt="Clearlink Logo" />}
        navData={footerNavItems}
      />
    }
  />
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
