// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import SearchField from './SearchField'

const SearchWrapper = styled.div`
  grid-area: search;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`

type Props = {
  hasSearchIcon: boolean,
  handleSearchIconClick: () => void,
  handleSearch: () => void,
  searchFieldVisible: boolean,
  searchTerm?: string,
}

const Search = ({hasSearchIcon, handleSearchIconClick, searchFieldVisible, handleSearch, searchTerm}: Props) => (
  <SearchWrapper>
    <SearchField
      searchTerm={searchTerm}
      hasSearchIcon={hasSearchIcon}
      searchFieldVisible={searchFieldVisible}
      handleSearch={handleSearch}
    />
    <Icon hasSearchIcon={hasSearchIcon} handleSearchIconClick={handleSearchIconClick} />
  </SearchWrapper>
)

Search.defaultProps = {
  searchTerm: '',
}

export default Search
