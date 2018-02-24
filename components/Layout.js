// @flow
/* eslint no-unused-expressions:0 */
import * as React from 'react'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'
import 'normalize.css'
import theme from './Theme'
import media from './Media'
import Header from './Header'

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  embed,
  iframe,
  img,
  object,
  video {
    max-width: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  p,
  blockquote {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  span {
    white-space: pre;
  }
`

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4em 1fr;
  grid-template-areas:
    'header header'
    'main main';

  ${media.tablet_portait`
    grid-template-rows: 5em 1fr;
  `};

  ${media.desktop`
    grid-template-rows: 6.3em 1fr;
  `};
`

type Props = {
  children: React.Node,
  hasSearchIcon: boolean,
  handleSearchIconClick: () => void,
  handleSearch: () => void,
  searchFieldVisible: boolean,
  searchTerm?: string,
}

const Layout = ({
  children,
  hasSearchIcon,
  handleSearchIconClick,
  searchFieldVisible,
  handleSearch,
  searchTerm,
}: Props) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header
        hasSearchIcon={hasSearchIcon}
        handleSearchIconClick={handleSearchIconClick}
        searchFieldVisible={searchFieldVisible}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
      {children}
    </Container>
  </ThemeProvider>
)

Layout.defaultProps = {
  searchTerm: '',
}

export default Layout
