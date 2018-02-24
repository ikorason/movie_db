// @flow
import React from 'react'
import styled from 'styled-components'
import media from 'components/Media'
import Movie from './Movie'

export const Wrapper = styled.div`
  grid-area: movies;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.3em;
  margin-bottom: 2em;

  ${media.tablet_portait`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.1em;
    grid-row-gap: 2.5em;
  `};

  ${media.desktop`
    grid-column-gap: 10em;
  `};
`

type MovieModel = {
  id: number,
}

type GenreListsModel = {
  id: number,
  name: string,
}

type Props = {
  movies: MovieModel[],
  genreLists: GenreListsModel[],
}

const Movies = ({movies, genreLists}: Props) => (
  <Wrapper>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        movie={movie}
        genres={genreLists.filter(genre => movie.genre_ids.map(id => id).includes(genre.id))}
      />
    ))}
  </Wrapper>
)

export default Movies
