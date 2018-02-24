// @flow
import React, {Component} from 'react'
import styled from 'styled-components'
import media from 'components/Media'
import Layout from 'components/Layout'
import {LoadingHomeScreen} from 'components/Loading'
import BtnExplore from 'components/Buttons/BtnExplore'
import {animateInHomePage} from 'components/Animation'

const Wrapper = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 'title' 'githubIcon' 'btnExplore';
  grid-row-gap: 1em;
`

export const StyledTitle = styled.h1`
  grid-area: title;
  align-self: flex-end;
  font-size: 3em;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeightThin};
  color: ${props => props.theme.main_color};
  font-style: italic;
  text-align: center;

  ${media.tablet_portait`
    font-size: 4.5em;
  `};
`

export const StyledGithubIcon = styled.svg`
  grid-area: githubIcon;
  align-self: flex-start;
  justify-self: center;
  width: 1.5em;
  height: 1.5em;
  g {
    fill: ${props => props.theme.main_color};
  }

  ${media.tablet_portait`
    width: 3em;
    height: 3em;
  `};
`

type State = {
  loaded: boolean,
}

export default class IndexPage extends Component<Props, State> {
  state = {
    loaded: false,
  }

  componentDidMount = async () => {
    await this.wait(1500)
    return this.setState({loaded: true}, () => {
      const animate = animateInHomePage(250)
      return animate.play()
    })
  }

  wait = ms => new Promise(r => setTimeout(r, ms))

  renderLoading = () => <LoadingHomeScreen />

  renderIndexPage = () => (
    <Layout
      hasSearchIcon={!this.props.url.pathname}
      handleSearchIconClick={null}
      handleSearch={null}
      searchFieldVisible={null}>
      <Wrapper>
        <StyledTitle>Movie DB</StyledTitle>
        <StyledGithubIcon viewBox="0 0 24 24">
          <desc>github icon</desc>
          <defs />
          <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <path d="M12,0.297 C5.37,0.297 0,5.67 0,12.297 C0,17.6 3.438,22.097 8.205,23.682 C8.805,23.795 9.025,23.424 9.025,23.105 C9.025,22.82 9.015,22.065 9.01,21.065 C5.672,21.789 4.968,19.455 4.968,19.455 C4.422,18.07 3.633,17.7 3.633,17.7 C2.546,16.956 3.717,16.971 3.717,16.971 C4.922,17.055 5.555,18.207 5.555,18.207 C6.625,20.042 8.364,19.512 9.05,19.205 C9.158,18.429 9.467,17.9 9.81,17.6 C7.145,17.3 4.344,16.268 4.344,11.67 C4.344,10.36 4.809,9.29 5.579,8.45 C5.444,8.147 5.039,6.927 5.684,5.274 C5.684,5.274 6.689,4.952 8.984,6.504 C9.944,6.237 10.964,6.105 11.984,6.099 C13.004,6.105 14.024,6.237 14.984,6.504 C17.264,4.952 18.269,5.274 18.269,5.274 C18.914,6.927 18.509,8.147 18.389,8.45 C19.154,9.29 19.619,10.36 19.619,11.67 C19.619,16.28 16.814,17.295 14.144,17.59 C14.564,17.95 14.954,18.686 14.954,19.81 C14.954,21.416 14.939,22.706 14.939,23.096 C14.939,23.411 15.149,23.786 15.764,23.666 C20.565,22.092 24,17.592 24,12.297 C24,5.67 18.627,0.297 12,0.297" />
          </g>
        </StyledGithubIcon>
        <BtnExplore />
      </Wrapper>
    </Layout>
  )

  render() {
    const {loaded} = this.state
    return loaded ? this.renderIndexPage() : this.renderLoading()
  }
}
