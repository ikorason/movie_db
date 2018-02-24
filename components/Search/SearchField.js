// @flow
import React from 'react'
import styled from 'styled-components'
import media from 'components/Media'

export const StyledInput = styled.input`
  margin-right: 2em;
  border: none;
  background-color: ${props => props.theme.main_color};
  color: ${props => props.theme.pure_white};
  border-bottom: 2px solid ${props => props.theme.pure_white};
  font-family: ${props => props.theme.fontFamily};
  font-style: italic;
  font-weight: ${props => props.theme.fontWeightLight};
  font-size: 1em;
  letter-spacing: 0.8px;
  display: ${props => (props.hasSearchIcon && props.searchFieldVisible ? 'block' : 'none')};

  ${media.desktop`
    font-size: 1.5em;
  `};
`

type Props = {
  hasSearchIcon: boolean,
  searchFieldVisible: boolean,
  handleSearch: () => void,
  searchTerm?: string,
}

const SearchField = ({hasSearchIcon, searchFieldVisible, handleSearch, searchTerm}: Props) => (
  <StyledInput
    value={searchTerm}
    onChange={handleSearch}
    placeholder="search for something ..."
    type="text"
    hasSearchIcon={hasSearchIcon}
    searchFieldVisible={searchFieldVisible}
  />
)

SearchField.defaultProps = {
  searchTerm: '',
}

export default SearchField
