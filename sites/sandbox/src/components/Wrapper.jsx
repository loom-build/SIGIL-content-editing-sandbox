import React from 'react'

import ThemeProvider from 'gatsby-theme-leshen/src/components/ThemeProvider'
import siteTheme from '../../theme'

const Wrapper = ( { children }) => {
  return (
    <ThemeProvider theme={siteTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Wrapper
