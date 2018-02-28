/* eslint-disable */
import React, {Fragment} from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import Casts from './Casts'

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
`

const StyledMovieTitle = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.2em;
  font-weight: ${props => props.theme.fontWeightBook};
  color: ${props => props.theme.main_color};
  font-style: italic;
  text-align: left;
`

const StyledMovieOverview = styled(StyledMovieTitle)`
  margin-top: 0.5em;
  font-size: 0.8em;
  font-weight: ${props => props.theme.fontWeightLight};
  flex: 1 0 auto;
`

const StyledPlayTrailerBtn = styled.button`
  align-self: flex-end;
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
  overflow-x: auto;
`

const MovieDetail = ({movie, credits, hasVideos}) => (
  <Fragment>
    <StyledOverdrive id={`${movie.id}`}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
    </StyledOverdrive>
    <InfoWrapper>
      <StyledMovieTitle>
        {movie.title} ({movie.release_date})
      </StyledMovieTitle>
      <StyledMovieOverview>{movie.overview}</StyledMovieOverview>
      <StyledPlayTrailerBtn hasVideos={hasVideos}>
        <StyledPlayIcon viewBox="0 0 16 21">
          <desc>play icon</desc>
          <defs />
          <g
            id="Mobile"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round">
            <g id="Detail_View" transform="translate(-210, -379)" fill="#355C7D" stroke="#FFFFFF" stroke-width="2">
              <polygon id="Play" points="211 380 225.99 389.226922 211 398.453844" />
            </g>
          </g>
        </StyledPlayIcon>
        <StyledText>play trailer</StyledText>
      </StyledPlayTrailerBtn>
    </InfoWrapper>
  </Fragment>
)

export default MovieDetail
