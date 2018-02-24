// @flow
import anime from 'animejs'
import {StyledInput} from 'components/Search/SearchField'
import {Container} from './Header'
import {StyledLogo} from './Logo'
import {StyledTitle, StyledGithubIcon} from '../pages'
import {WrapperBtn} from './Buttons/BtnExplore'

const animateInHomePage = (delay?: number): {play: () => void} => {
  const timeline = anime.timeline({
    autoplay: false,
    loop: false,
    direction: 'normal',
    delay,
  })

  timeline
    .add({
      targets: `.${StyledTitle.styledComponentId}`,
      scale: {
        value: [0, 1],
        duration: 750,
      },
      easing: [0.28, 0.07, 0.11, 0.88],
    })
    .add({
      targets: `.${StyledGithubIcon.styledComponentId}`,
      scale: {
        value: [0, 1],
        duration: 750,
      },
      easing: [0.28, 0.07, 0.11, 0.88],
      offset: '-=850',
    })
    .add({
      targets: `.${WrapperBtn.styledComponentId}`,
      scale: {
        value: [0, 1],
        duration: 750,
      },
      easing: [0.28, 0.07, 0.11, 0.88],
      offset: '-=850',
    })
    .add({
      targets: `.${Container.styledComponentId}`,
      height: {
        value: ['0', '100%'],
        duration: 750,
      },
      easing: 'easeOutBack',
      offset: '-=850',
    })
    .add({
      targets: `.${StyledLogo.styledComponentId}`,
      scale: {
        value: [0, 1],
        duration: 750,
      },
      easing: [0.28, 0.07, 0.11, 0.88],
      offset: '-=850',
    })

  return timeline
}

const AnimateInMovieLists = () => {}

const AnimateSearchFieldIn = () => {
  const animate = anime({
    targets: `.${StyledInput.styledComponentId}`,
    duration: 850,
    width: ['0', '10em'],
    direction: 'normal',
    loop: false,
  })
  return animate
}

export {animateInHomePage, AnimateInMovieLists, AnimateSearchFieldIn}
