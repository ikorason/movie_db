// @flow
/* eslint camelcase: 0 */
import React, {Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import api from 'utils/api'
import {isBottom, wait} from 'utils/helpers'
import {LoadingDiscoverScreen, LoadingMoreMovies} from 'components/Loading'
import media from 'components/Media'
import Layout from 'components/Layout'
import Movies from 'components/Movie/Movies'
import BtnShowFilters from 'components/Buttons/BtnShowFilters'
import {AnimateSearchFieldIn} from 'components/Animation'

const Container = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1.3em 1fr 1.3em;
  grid-template-rows: 5.5em 1fr 1fr;
  grid-template-areas: '. showFilterBtn .' '. movies .' '. loadingMoreMovies .';
  overflow-y: scroll;

  ${media.tablet_portait`
    grid-template-columns: 2.5em 1fr 2.5em;
    grid-template-rows: 8.8em 1fr;
  `};

  ${media.desktop`
    grid-template-columns: 3.8em 1fr 3.8em;
    grid-template-rows: 12.3em 1fr;
  `};
`

/* TYPE CHECKING */
type State = {
  loaded: boolean,
}

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
  url: {pathname: string},
  page: number,
}

export default class DiscoverPage extends Component<Props, State> {
  static async getInitialProps() {
    // fetch movies
    const movies = await axios({
      method: 'get',
      url: `${api.BASE_URL}${api.DISCOVER_MOVIE}`,
      params: {
        api_key: process.env.API_KEY,
        language: api.LANG,
        sort_by: api.POPULARITY_DESC,
        include_adult: api.IS_ADULT,
        include_video: api.HAS_VIDEO,
        page: api.PAGE_N,
      },
    })
    // fetch list of genres
    const genreLists = await axios({
      method: 'get',
      url: `${api.BASE_URL}${api.GENRE_MOVIE_LIST}`,
      params: {
        api_key: process.env.API_KEY,
        language: api.LANG,
      },
    })
    // return objects are stored in this.props
    return {
      movies: movies.data.results,
      genreLists: genreLists.data.genres,
      page: movies.data.page,
    }
  }

  state = {
    loaded: false,
    movies: this.props.movies,
    page: this.props.page,
    isFetching: false,
    searchFieldVisible: false,
    searchTerm: '',
    hasMore: true,
  }

  componentDidMount() {
    const {loaded} = this.state
    // update loading screen only if data is fetched
    if (this.props) {
      this.setState({loaded: !loaded}, () => {
        // attached scroll listener for container
        const wrappedEl = document.querySelector(`.${Container.styledComponentId}`)
        wrappedEl.addEventListener('scroll', this.handleOnScroll)
      })
    }
  }

  componentWillUnmount() {
    // important to remove scroll event when component is not being use
    const wrappedEl = document.querySelector(`.${Container.styledComponentId}`)
    wrappedEl.removeEventListener('scroll', this.handleOnScroll)
  }

  handleOnScroll = () => {
    const {hasMore} = this.state
    // after user scroll to end we want to fetch more movies and append them on screen
    // but we need to have loading indicator for ui/ux experience
    const wrappedEl = document.querySelector(`.${Container.styledComponentId}`)
    if (isBottom(wrappedEl) && !this.state.isFetching && hasMore) {
      // once user scrolled to bottom
      // we want to show loading component
      // in the meantime fetching more movies
      this.handleLoadMoreMovies()
    }
  }

  handleLoadMoreMovies = () => {
    this.setState(
      (prevState, props) => ({
        isFetching: !prevState.isFetching,
        page: prevState.page + props.page,
      }),
      () => this.fetchAddtionalMovies(),
    )
  }

  fetchAddtionalMovies = async () => {
    const {searchTerm, page} = this.state
    try {
      // wait 2000ms
      await wait(1500)
      if (searchTerm.length !== 0) {
        // fetch additional queried movies beside initial movies that are queried
        const res = await axios({
          method: 'get',
          url: `${api.BASE_URL}${api.SEARCH_MOVIES}`,
          params: {
            api_key: process.env.API_KEY,
            language: api.LANG,
            query: searchTerm,
            include_adult: api.IS_ADULT,
            include_video: api.HAS_VIDEO,
            page,
          },
        })
        let newMovies = []
        newMovies = res.data.results
        const {total_pages} = res.data
        this.setState(
          prevState => ({
            movies: prevState.movies.concat(newMovies),
            isFetching: !prevState.isFetching,
          }),
          () => (this.state.page === total_pages ? this.setState({hasMore: false}) : null),
        )
      } else if (searchTerm.length === 0) {
        // we want to use this ajax call for normal fetch additional movies
        // when there is no search term involves
        // then fetch addtional movies
        const res = await axios({
          method: 'get',
          url: `${api.BASE_URL}${api.DISCOVER_MOVIE}`,
          params: {
            api_key: process.env.API_KEY,
            language: api.LANG,
            sort_by: api.POPULARITY_DESC,
            include_adult: api.IS_ADULT,
            include_video: api.HAS_VIDEO,
            page,
          },
        })
        let newMovies = []
        newMovies = res.data.results
        const {total_page} = res.data
        this.setState(
          prevState => ({movies: prevState.movies.concat(newMovies), isFetching: !prevState.isFetching}),
          () => (this.state.page === total_page ? this.setState({hasMore: false}) : null),
        )
      }
    } catch (e) {
      console.log(e)
    }
  }

  handleSearchIconClick = () => {
    const animate = AnimateSearchFieldIn()
    this.setState(
      prevState => ({searchFieldVisible: !prevState.searchFieldVisible}),
      () => {
        if (this.state.searchFieldVisible) {
          animate.play()
        } else if (!this.state.searchFieldVisible) {
          animate.reverse()
        }
      },
    )
  }

  handleSearch = e => {
    this.setState({searchTerm: e.target.value}, () => {
      axios({
        method: 'get',
        url: `${api.BASE_URL}${api.SEARCH_MOVIES}`,
        params: {
          api_key: process.env.API_KEY,
          language: api.LANG,
          query: this.state.searchTerm,
          include_adult: api.IS_ADULT,
          include_video: api.HAS_VIDEO,
          page: api.PAGE_N,
        },
      }).then(res => {
        const searchedMovies = res.data.results
        this.setState({movies: searchedMovies})
      })
    })
  }

  render() {
    const {loaded, movies, page, isFetching, searchFieldVisible, searchTerm} = this.state
    const {genreLists, url} = this.props
    return (
      <Layout
        hasSearchIcon={!!url.pathname}
        handleSearchIconClick={this.handleSearchIconClick}
        searchFieldVisible={searchFieldVisible}
        handleSearch={this.handleSearch}
        searchTerm={searchTerm}>
        <Container>
          <BtnShowFilters />
          <ReactPlaceholder showLoadingAnimation ready={loaded} customPlaceholder={LoadingDiscoverScreen}>
            <Movies movies={movies} genreLists={genreLists} page={page} />
          </ReactPlaceholder>
          {isFetching ? <LoadingMoreMovies /> : null}
        </Container>
      </Layout>
    )
  }
}
