// @flow
import React, {Component} from 'react'
import axios from 'axios'
import api from 'utils/api'
import MovieDetail from 'components/Movie/MovieDetail'

type Props = {
  movie: {title: string},
}

export default class DetailsPage extends Component<Props> {
  static async getInitialProps({query}) {
    const {id} = query
    const res = await axios({
      method: 'get',
      url: `${api.BASE_URL}movie/${id}`,
      params: {
        api_key: process.env.API_KEY,
      },
    })
    return {
      movie: res.data,
    }
  }

  render() {
    const {movie} = this.props
    return <MovieDetail movie={movie} />
  }
}
