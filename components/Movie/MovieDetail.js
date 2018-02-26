/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

// const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w300'

const Poster = styled.img`
  border-radius: 10px;
`

// const MovieDetail = ({movie}) => <Poster src={`${BACKDROP_PATH}${movie.backdrop_path}`} />
const MovieDetail = ({movie}) => (
  <Overdrive id={movie.id}>
    <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
  </Overdrive>
)

export default MovieDetail
