// @flow
import React from 'react'
import styled from 'styled-components'
import media from 'components/Media'

const Wrapper = styled.div`
  background-color: ${props => props.theme.pure_white};
  border-radius: 8px;
  padding: 5px;
  margin: 2px;

  ${media.tablet_portait`
    padding: 7px;
    margin: 3px;
  `};

  ${media.desktop`
    padding: 12px;
    margin: 5px;
  `};
`

const StyledText = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 0.75em;
  font-weight: ${props => props.theme.fontWeightBook};
  color: ${props => props.theme.main_color};
  font-style: italic;
  text-align: left;

  ${media.desktop`
    font-size: 1.1em;
  `};
`

type Props = {
  name: string,
}

const Genre = ({name}: Props) => (
  <Wrapper>
    <StyledText>{name}</StyledText>
  </Wrapper>
)

export default Genre
