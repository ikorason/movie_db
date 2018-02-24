import React from 'react'
import styled from 'styled-components'
import {TextBlock, RectShape} from 'react-placeholder/lib/placeholders'
import {Wrapper} from 'components/Movie/Movies'
import {Wrapper as PlaceHolderWrapper} from 'components/Movie/Movie'

const WrapperSpinnerHomeScreen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

// below is for loading home screen
export const LoadingHomeScreen = () => (
  <WrapperSpinnerHomeScreen>
    <LoadingSpinner viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring">
      <circle
        cx="50"
        cy="50"
        ng-attr-r="{{config.radius}}"
        ng-attr-stroke-width="{{config.width}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-dasharray="{{config.dasharray}}"
        fill="none"
        strokeLinecap="round"
        r="40"
        strokeWidth="4"
        stroke="#355c7d"
        strokeDasharray="62.83185307179586 62.83185307179586"
        transform="rotate(66 50 50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </LoadingSpinner>
  </WrapperSpinnerHomeScreen>
)

// below is before fetching more movies, display loading
const WrapperLoadMore = styled.div`
  grid-area: loadingMoreMovies;
  display: flex;
  justify-content: center;
`

const LoadingSpinner = styled.svg`
  width: 48px;
  height: 48px;
`

export const LoadingMoreMovies = () => (
  <WrapperLoadMore>
    <LoadingSpinner viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring">
      <circle
        cx="50"
        cy="50"
        ng-attr-r="{{config.radius}}"
        ng-attr-stroke-width="{{config.width}}"
        ng-attr-stroke="{{config.stroke}}"
        ng-attr-stroke-dasharray="{{config.dasharray}}"
        fill="none"
        strokeLinecap="round"
        r="40"
        strokeWidth="4"
        stroke="#355c7d"
        strokeDasharray="62.83185307179586 62.83185307179586"
        transform="rotate(66 50 50)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </LoadingSpinner>
  </WrapperLoadMore>
)

/* below is for loading movies on inital render */
const StyledTextBlock = styled(TextBlock)`
  grid-area: info;
  display: flex;
  padding: 20px;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const StyledRectShape = styled(RectShape)`
  grid-area: poster;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const LoadingDiscoverScreen = (
  <Wrapper>
    <PlaceHolderWrapper>
      <StyledRectShape color="#ffffff" />
      <StyledTextBlock rows={5} color="#ffffff" />
    </PlaceHolderWrapper>
    <PlaceHolderWrapper>
      <StyledRectShape color="#ffffff" />
      <StyledTextBlock rows={5} color="#ffffff" />
    </PlaceHolderWrapper>
    <PlaceHolderWrapper>
      <StyledRectShape color="#ffffff" />
      <StyledTextBlock rows={5} color="#ffffff" />
    </PlaceHolderWrapper>
    <PlaceHolderWrapper>
      <StyledRectShape color="#ffffff" />
      <StyledTextBlock rows={5} color="#ffffff" />
    </PlaceHolderWrapper>
  </Wrapper>
)
