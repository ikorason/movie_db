/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const PROFILE_PATH = 'https://image.tmdb.org/t/p/w185'

const Poster = styled.img`
  flex: 0 0 auto;
`

const Casts = ({cast}) => <Poster src={`${PROFILE_PATH}${cast.profile_path}`} />

export default Casts
