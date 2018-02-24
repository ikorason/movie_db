// @flow
import React from 'react'
import styled from 'styled-components'
import media from 'components/Media'

export const WrapperBtn = styled.div`
  grid-area: showFilterBtn;
  display: flex;
  align-items: center;
`

export const StyledButton = styled.button`
  width: 5.9em;
  height: 2.3em;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.main_color};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  ${media.tablet_portait`
    width: 7.1em;
    height: 2.5em;
  `};

  ${media.desktop`
    width: 9.6em;
    height: 3.5em;
  `};
`

export const StyledText = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeightLight};
  font-style: italic;
  font-size: 0.875em;
  color: ${props => props.theme.pure_white};
  letter-spacing: 0.65px;

  ${media.tablet_portait`
    font-size: 1.125em;
    letter-spacing: 0.83px;
  `};

  ${media.desktop`
    font-size: 1.5em;
  `};
`

export const StyledPlusIcon = styled.svg`
  align-self: center;
  width: 8px;
  height: 8px;

  g {
    fill: ${props => props.theme.pure_white};
  }

  ${media.tablet_portait`
    width: 0.6em;
    height: 0.6em;
  `};

  ${media.desktop`
    width: 1em;
    height: 1em;
  `};
`

type Props = {
  text?: string,
}

const BtnShowFilters = (props: Props) => (
  <WrapperBtn>
    <StyledButton>
      <StyledPlusIcon viewBox="0 0 8 8">
        <desc>show filters button</desc>
        <defs />
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M7.6,3.6 L4.4,3.6 L4.4,0.4 C4.4,0.1790861 4.2209139,1.3527075e-17 4,0 C3.7790861,-1.3527075e-17 3.6,0.1790861 3.6,0.4 L3.6,3.6 L2.8,3.6 C2.5790861,3.6 2.4,3.7790861 2.4,4 C2.4,4.2209139 2.5790861,4.4 2.8,4.4 L3.6,4.4 L3.6,7.6 C3.6,7.8209139 3.7790861,8 4,8 C4.2209139,8 4.4,7.8209139 4.4,7.6 L4.4,4.4 L7.6,4.4 C7.8209139,4.4 8,4.2209139 8,4 C8,3.7790861 7.8209139,3.6 7.6,3.6 Z" />
          <path d="M0.8,3.6 L0.4,3.6 C0.1790861,3.6 2.705415e-17,3.7790861 0,4 C2.705415e-17,4.2209139 0.1790861,4.4 0.4,4.4 L0.8,4.4 C1.0209139,4.4 1.2,4.2209139 1.2,4 C1.2,3.7790861 1.0209139,3.6 0.8,3.6 Z" />
        </g>
      </StyledPlusIcon>
      <StyledText>{props.text}</StyledText>
    </StyledButton>
  </WrapperBtn>
)

BtnShowFilters.defaultProps = {
  text: 'show filters',
}

export default BtnShowFilters
