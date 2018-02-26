// @flow
/* eslint no-underscore-dangle: 0 */
import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import CircularProgressbar from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import media from 'components/Media'
import {StyledArrow} from 'components/Buttons/BtnExplore'
import Overdrive from 'react-overdrive'
import Genre from './Genre'

const POSTER_PATH = 'https://image.tmdb.org/t/p/w300'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.main_color};
  display: grid;
  grid-template-columns: 9.6em 1fr;
  grid-template-areas: 'poster info';
  border-radius: 10px;
  box-shadow: 6px 7px 15px rgba(55, 55, 55, 0.7);

  ${media.desktop`
    grid-template-columns: 15.6em 1fr;
  `};
`

export const Poster = styled.img`
  grid-area: poster;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const InfoWrapper = styled.div`
  grid-area: info;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 'title' 'genres' 'vote';
  padding: 0.6em;

  ${media.desktop`
    padding: 1.3em;
  `};
`

const WrapperTitle = styled.div`
  grid-area: title;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  margin: 2px;

  ${media.tablet_portait`
    margin: 3px;
  `};

  ${media.desktop`
    margin: 5px;
  `};
`

const StyledMovieTitle = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 1.2em;
  font-weight: ${props => props.theme.fontWeightBook};
  color: ${props => props.theme.pure_white};
  font-style: italic;
  text-align: left;

  ${media.desktop`
    font-size: 2em;
  `};
`

const StyledReleasedDate = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 0.8em;
  font-weight: ${props => props.theme.fontWeightLight};
  color: ${props => props.theme.pure_white};
  font-style: normal;
  text-align: left;
  margin-top: 10px;

  ${media.desktop`
    font-size: 1em;
  `};
`

const WrapperGenres = styled.div`
  grid-area: genres;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`

const WrapperBottom = styled.div`
  grid-area: vote;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2px;

  ${media.tablet_portait`
    margin: 3px;
  `};

  ${media.desktop`
    margin: 5px;
  `};
`

const StyledVoteAverage = styled(CircularProgressbar)`
  width: 2.5em;
  height: 2.5em;
  .CircularProgressbar-trail {
    stroke: ${props => props.theme.main_color};
  }
  .CircularProgressbar-path {
    stroke: ${props => props.theme.pure_white};
  }
  .CircularProgressbar-text {
    stroke: ${props => props.theme.pure_white};
    fill: ${props => props.theme.pure_white};
  }

  ${media.desktop`
    width: 4em;
    height: 4em;
  `};
`

const StyledArrowMovie = styled(StyledArrow)`
  align-self: flex-end;
  margin: 0.2em;
  width: 0.4em;
  height: 0.8em;
  cursor: pointer;

  ${media.tablet_portait`
    width: 0.6em;
    height: 1em;
  `};

  ${media.desktop`
    width: 1.5em;
    height: 1.5em;
  `};
`

type MovieType = {
  id: number,
}

type Props = {
  movie: MovieType[],
  genres: Array<string>,
}

const precisionRound = (number, precision) => {
  const factor = 10 ** precision
  return Math.round(number * factor) / factor
}

const Movie = ({movie, genres}: Props) => (
  <Wrapper>
    <Overdrive id={movie.id}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
    <InfoWrapper>
      <WrapperTitle>
        <StyledMovieTitle>{movie.title}</StyledMovieTitle>
        <StyledReleasedDate>{movie.release_date}</StyledReleasedDate>
      </WrapperTitle>
      <WrapperGenres>{genres.map(genre => <Genre key={genre.id} name={genre.name} />)}</WrapperGenres>
      <WrapperBottom>
        <StyledVoteAverage strokeWidth={4} percentage={precisionRound(movie.vote_average / 10 * 100, 1)} />
        <StyledArrowMovie viewBox="0 0 7 12" onClick={() => Router.push({pathname: '/details', query: {id: movie.id}})}>
          <desc>arrow right</desc>
          <defs />
          <g stroke="none" strokeWidth="1" fillRule="evenodd">
            <path d="M6.99960352,6.06037035 C6.99590205,5.90431088 6.92919664,5.75564799 6.81341384,5.64541905 L1.08626754,0.177914811 C0.837766841,-0.059304937 0.434872653,-0.059304937 0.186371952,0.177914811 C-0.0621239839,0.415139109 -0.0621239839,0.799750864 0.186371952,1.03697516 L5.46382498,6.07494923 L2.43840171,8.96302484 C2.18990578,9.20024914 2.18990578,9.58486089 2.43840171,9.82208519 C2.68690241,10.0593049 3.0897966,10.0593049 3.3382973,9.82208519 L6.81360473,6.5044794 C6.85157322,6.46829446 6.88460522,6.42767904 6.91191747,6.38359621 C6.91726263,6.37497037 6.92235325,6.3662433 6.92718935,6.35741498 C6.93923736,6.3355019 6.94986287,6.31290251 6.95900577,6.28974469 C6.96630233,6.27131861 6.97266562,6.25264954 6.97809562,6.2337375 C6.9913896,6.18665394 6.99871733,6.13821768 6.99992168,6.08946736 C7.00009137,6.0797886 6.99998532,6.0700896 6.99960352,6.06037035 Z" />
            <path d="M1.78361392,10.2163861 C1.49509362,9.92787131 1.02731566,9.92787131 0.738795358,10.2163861 L0.216386075,10.7387954 C-0.0721286918,11.0273157 -0.0721286918,11.4950936 0.216386075,11.7836139 C0.504906376,12.0721287 0.972684341,12.0721287 1.26120464,11.7836139 L1.78361392,11.2612046 C2.07212869,10.9726843 2.07212869,10.5049064 1.78361392,10.2163861 Z" />
          </g>
        </StyledArrowMovie>
      </WrapperBottom>
    </InfoWrapper>
  </Wrapper>
)

export default Movie
