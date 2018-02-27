// @flow
import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import api from 'utils/api'
import Layout from 'components/Layout'
import MovieDetail from 'components/Movie/MovieDetail'

type Props = {
  movie: {title: string},
  url: {pathname: string},
}

const Wrapper = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1.3em 9.6em 1fr 1.3em;
  grid-template-rows: 2.5em 1fr 2.5em 1fr;
  grid-template-areas: '. . . .' '. poster . .' '. . . .' 'crews crews crews crews';
`

export default class Movie extends Component<Props> {
  static async getInitialProps({query}) {
    const {id} = query
    const res = await axios({
      method: 'get',
      url: `${api.BASE_URL}movie/${id}`,
      params: {
        api_key: process.env.API_KEY,
      },
    })
    const credits = await axios({
      method: 'get',
      url: `${api.BASE_URL}movie/${id}/credits`,
      params: {
        api_key: process.env.API_KEY,
      },
    })
    return {
      movie: res.data,
      credits: credits.data,
    }
  }

  render() {
    const {movie} = this.props
    return (
      <Layout
        hasSearchIcon={!this.props.url.pathname}
        handleSearchIconClick={null}
        handleSearch={null}
        searchFieldVisible={null}>
        <Wrapper>
          <MovieDetail movie={movie} />
        </Wrapper>
      </Layout>
    )
  }
}
