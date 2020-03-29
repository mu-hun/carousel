import styled from 'styled-components';

const Carousel = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Slides = styled.ul`
  opacity: ${props => (props['aria-hidden'] ? 0 : 1)};
  transition-delay: ${props => (props['aria-hidden'] ? '200ms' : undefined)};
  z-index: ${props => (props['aria-hidden'] ? -1 : undefined)};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  list-style-type: none;
  transition: opacity 200ms ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const SlideContent = styled.div`
  background: hsla(0, 0%, 0%, 0.5);
  font-weight: 100;
  text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 1);
  color: white;
  max-width: 500px;
  padding: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;

const ProgressBarOuter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ProgressBarInner = styled.div`
  background-color: hsla(0, 100%, 100%, 0.25);
  height: 20px;
`;

const SlideNav = styled.ul`
  position: absolute;
  bottom: 36px;
  left: 20px;
  display: flex;
  padding: 0;
  justify-content: center;
  list-style-type: none;
`;

const Controls = styled.div`
  position: absolute;
  right: 20px;
  bottom: 50px;
  display: flex;
  justify-content: center;
`;

const IconButton = styled.button`
  border: none;
  background: none;
  display: inline-block;
  padding: 0;
  width: 3rem;
  height: 3rem;
  line-height: 1.8rem;
  font-size: 2rem;
  text-align: center;
  background-color: transparent;
  color: hsla(0, 100%, 100%, 0.5);
  outline: none;

  :focus-visible {
    color: hsla(0, 100%, 100%, 0.75);
    background-color: hsla(0, 100%, 100%, 0.33);
  }
`;

const SpacerGif = styled.div`
  display: inline-block;
`;

export {
  Carousel,
  Slides,
  SlideContent,
  ProgressBarOuter,
  ProgressBarInner,
  SlideNav,
  Controls,
  IconButton,
  SpacerGif
};
