/* eslint-disable */
import React, {Fragment} from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import media from 'components/Media'
import Cast from './Cast'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w300'

const StyledOverdrive = styled(Overdrive)`
  grid-area: poster;
  object-fit: fill;
`

const Poster = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`

const InfoWrapper = styled.div`
  grid-area: info;
  display: flex;
  flex-flow: column wrap;
  padding: 0 0.5em;
  justify-content: flex-start;

  ${media.desktop`
    padding: 0 1em;
  `};
`

const StyledMovieTitle = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.2em;
  font-weight: ${props => props.theme.fontWeightBook};
  color: ${props => props.theme.main_color};
  font-style: italic;
  text-align: left;

  ${media.desktop`
    font-size: 2.5em;
  `};
`

const StyledMovieOverview = styled(StyledMovieTitle)`
  margin-top: 0.5em;
  font-size: 0.8em;
  font-weight: ${props => props.theme.fontWeightLight};
  flex: 1 0 auto;

  ${media.desktop`
    font-size: 1.6em;
  `};
`

const WrapperBtn = styled.div`
  grid-area: playTrailer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const StyledPlayTrailerBtn = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  width: 60%;
  visibility: ${props => (props.hasVideos ? 'visible' : 'hidden')};
`

const StyledPlayIcon = styled.svg`
  width: 1em;
  height: 1em;
  flex: 1 0 auto;
`

const StyledText = styled(StyledMovieTitle)`
  font-size: 1em;
  flex: 1 0 auto;
`

const CastsWrapper = styled.div`
  grid-area: casts;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
`

const YOUTUBE_LINK = 'https://www.youtube.com/watch?v='

const MovieDetail = ({movie, casts, hasVideos, videos}) => (
  <Fragment>
    <StyledOverdrive id={`${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
    </StyledOverdrive>
    <InfoWrapper>
      <StyledMovieTitle>
        {movie.title} ({movie.release_date})
      </StyledMovieTitle>
      <StyledMovieOverview>{movie.overview}</StyledMovieOverview>
    </InfoWrapper>
    <WrapperBtn>
      <StyledPlayTrailerBtn
        onClick={() => Router.push(`${YOUTUBE_LINK}${videos[0].key}`)}
        videos={videos}
        hasVideos={hasVideos}>
        <StyledPlayIcon viewBox="0 0 16 21">
          <desc>play icon</desc>
          <defs />
          <g
            id="Mobile"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round">
            <g id="Detail_View" transform="translate(-210, -379)" fill="#355C7D" stroke="#FFFFFF" strokeWidth="2">
              <polygon id="Play" points="211 380 225.99 389.226922 211 398.453844" />
            </g>
          </g>
        </StyledPlayIcon>
        <StyledText>play trailer</StyledText>
      </StyledPlayTrailerBtn>
    </WrapperBtn>
    <CastsWrapper>{casts.map(cast => <Cast key={cast.cast_id} cast={cast} />)}</CastsWrapper>
  </Fragment>
)

export default MovieDetail
