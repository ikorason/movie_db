import React from 'react'
import styled from 'styled-components'

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/original'

const Poster = styled.img`
  border-radius: 10px;
`

const MovieDetail = ({movie}) => <Poster src={`${BACKDROP_PATH}${movie.backdrop_path}`} />

export default MovieDetail
