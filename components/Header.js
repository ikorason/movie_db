// @flow
import React from 'react'
import styled from 'styled-components'
import media from 'components/Media'
import Logo from 'components/Logo'
import Search from 'components/Search/Search'

export const Container = styled.div`
  background-color: ${props => props.theme.main_color};
  grid-area: header;
  display: grid;
  grid-template-columns: 1.3em 6em 1fr 1.3em;
  grid-template-areas: '. logo search .';

  ${media.tablet_portait`
    grid-template-columns: 2.5em 7.2em 1fr 2.5em;
  `};

  ${media.desktop`
    grid-template-columns: 3.8em 10em 1fr 3.8em;
  `};
`

type Props = {
  hasSearchIcon: boolean,
  handleSearchIconClick: () => void,
  handleSearch: () => void,
  searchFieldVisible: boolean,
  searchTerm?: string,
}

const Header = ({hasSearchIcon, handleSearchIconClick, searchFieldVisible, handleSearch, searchTerm}: Props) => (
  <Container>
    <Logo />
    <Search
      hasSearchIcon={hasSearchIcon}
      handleSearchIconClick={handleSearchIconClick}
      searchFieldVisible={searchFieldVisible}
      handleSearch={handleSearch}
      searchTerm={searchTerm}
    />
  </Container>
)

Header.defaultProps = {
  searchTerm: '',
}

export default Header
