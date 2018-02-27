/* eslint-disable */
import React, {Fragment} from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'

const StyledContainer = styled.div`
  grid-area: crews;
`

const POSTER_PATH = 'https://image.tmdb.org/t/p/w300'

const StyledOverdrive = styled(Overdrive)`
  grid-area: poster;
`

const Poster = styled.img`
  border-radius: 10px;
`

const MovieDetail = ({movie}) => (
  <Fragment>
    <StyledOverdrive id={`${movie.id}`} duration={500}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} />
    </StyledOverdrive>
    <StyledContainer />
  </Fragment>
)

export default MovieDetail
