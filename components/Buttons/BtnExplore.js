// @flow
import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import media from 'components/Media'

export const WrapperBtn = styled.div`
  grid-area: btnExplore;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const StyledButton = styled.button`
  width: 8.3em;
  height: 3.1em;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.main_color};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: translateY(-1em);
  }

  ${media.tablet_portait`
    width: 11.3em;
    height: 3.8em;
  `};
`

export const StyledText = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeightLight};
  font-style: italic;
  font-size: 1.625em;
  color: ${props => props.theme.pure_white};
  letter-spacing: 1.2px;
  transition: all 0.5s ease;

  ${media.tablet_portait`
    font-size: 2.25em;
  `};

  ${StyledButton}:hover & {
    letter-spacing: 1.8px;
  }
`

export const StyledArrow = styled.svg`
  align-self: center;
  width: 8px;
  height: 15px;
  transition: all 0.5s ease;

  g {
    fill: ${props => props.theme.pure_white};
  }

  ${media.tablet_portait`
    width: 0.8em;
    height: 1.4em;
  `};

  ${StyledButton}:hover & {
    transform: translateX(0.2em);
  }
`

type Props = {
  text?: string,
}

const _clickHandler = () => Router.push({pathname: '/discover'})

const BtnExplore = ({text}: Props) => (
  <WrapperBtn>
    <StyledButton onClick={_clickHandler}>
      <StyledText>{text}</StyledText>
      <StyledArrow viewBox="0 0 7 12">
        <desc>arrow right</desc>
        <defs />
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
          <path d="M6.99960352,6.06037035 C6.99590205,5.90431088 6.92919664,5.75564799 6.81341384,5.64541905 L1.08626754,0.177914811 C0.837766841,-0.059304937 0.434872653,-0.059304937 0.186371952,0.177914811 C-0.0621239839,0.415139109 -0.0621239839,0.799750864 0.186371952,1.03697516 L5.46382498,6.07494923 L2.43840171,8.96302484 C2.18990578,9.20024914 2.18990578,9.58486089 2.43840171,9.82208519 C2.68690241,10.0593049 3.0897966,10.0593049 3.3382973,9.82208519 L6.81360473,6.5044794 C6.85157322,6.46829446 6.88460522,6.42767904 6.91191747,6.38359621 C6.91726263,6.37497037 6.92235325,6.3662433 6.92718935,6.35741498 C6.93923736,6.3355019 6.94986287,6.31290251 6.95900577,6.28974469 C6.96630233,6.27131861 6.97266562,6.25264954 6.97809562,6.2337375 C6.9913896,6.18665394 6.99871733,6.13821768 6.99992168,6.08946736 C7.00009137,6.0797886 6.99998532,6.0700896 6.99960352,6.06037035 Z" />
          <path d="M1.78361392,10.2163861 C1.49509362,9.92787131 1.02731566,9.92787131 0.738795358,10.2163861 L0.216386075,10.7387954 C-0.0721286918,11.0273157 -0.0721286918,11.4950936 0.216386075,11.7836139 C0.504906376,12.0721287 0.972684341,12.0721287 1.26120464,11.7836139 L1.78361392,11.2612046 C2.07212869,10.9726843 2.07212869,10.5049064 1.78361392,10.2163861 Z" />
        </g>
      </StyledArrow>
    </StyledButton>
  </WrapperBtn>
)

BtnExplore.defaultProps = {
  text: 'explore',
}

export default BtnExplore
