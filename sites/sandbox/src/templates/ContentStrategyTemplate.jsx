import React from 'react'
import { Layout } from '@leshen/gatsby-theme-contentful'
import { Header, Footer, Link, Main } from '@leshen/gatsby-theme-leshen'
import { graphql } from 'gatsby'
import {
  mapSections,
  mapRichTextHero,
} from '@leshen/gatsby-theme-contentful/utils/determiners'
import headerLogo from '../images/clearlink-logo.png'
import {
  defaultTemplatePrimary,
  topBarItems,
  footerNavItems,
} from '../siteData/navigation.yml'

const ContentStrategyTemplate = ({ data }) => {
  const {
    contentfulPage: { sections, hero, path, customCrumbs },
  } = data
  const { siteURL, removeTrailingSlashes } = data.site.siteMetadata

  const heroOptions = {
    mapper: mapRichTextHero,
    breadcrumbProps: {
      path,
      crumbs: customCrumbs,
      siteURL,
      removeTrailingSlashes,
    },
    headingLevel: 1,
    isImageCritical: true,
  }

  return (
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
      main={
        <Main>
          {/* Pass the hero to Leshens map so it behaves like normal when coming from Contentful */}
          {mapSections(hero, heroOptions)}
          {/* Map over the rest of the sections from Contentful like normal */}
          {sections && sections.map(section => mapSections(section))}
        </Main>
      }
      footer={
        <Footer
          logo={<img src={headerLogo} alt="Clearlink Logo" />}
          navData={footerNavItems}
          disclaimers={data.contentfulPage?.template?.footerDisclaimers?.map(
            disclaimer => disclaimer.brandy
          )}
        />
      }
    />
  )
}
export default ContentStrategyTemplate

export const query = graphql`
  query ContentStrategyTemplateQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
      ...LeshenPage
    }
    site {
      ...LeshenMetadata
    }
  }
`
