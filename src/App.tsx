import React from 'react';

import * as S from './whatevs/styled';
import slides from './whatevs/slides';
import './whatevs/index.css';

import { FaPause, FaPlay, FaBackward, FaForward } from 'react-icons/fa';
import VisuallyHidden from '@reach/visually-hidden';
import Alert from '@reach/alert';

let SLIDE_DURATION = 3000;

export default function App() {
  let currentIndex = 0;
  return (
    <S.Carousel aria-label="Images from Space">
      <S.Slides>
        {slides.map((image, index) => (
          <Slide
            key={index}
            id={`image-${index}`}
            title={image.title}
            isCurrent={index === currentIndex}
            takeFocus={false}
            image={image.img}
            children={<p>{image.content}</p>}
          />
        ))}
      </S.Slides>
      <S.SlideNav>
        {slides.map((slide, index) => (
          <SlideNavItem
            key={index}
            isCurrent={index === currentIndex}
            aria-label={`Slide ${index}`}
            label={`Slide ${index + 1}`}
            onClick={() => {}}
          />
        ))}
      </S.SlideNav>
      <S.Controls>
        {false ? (
          <S.IconButton
            aria-label="Pause"
            onClick={() => {}}
            children={<FaPause />}
          />
        ) : (
          <S.IconButton
            aria-label="Play"
            onClick={() => {}}
            children={<FaPlay />}
          />
        )}
        <S.SpacerGif />
        <S.IconButton
          aria-label="Previous Slide"
          onClick={() => {}}
          children={<FaBackward />}
        />
        <S.IconButton
          aria-label="Next Slide"
          onClick={() => {}}
          children={<FaForward />}
        />
      </S.Controls>
      <ProgressBar time={SLIDE_DURATION} animate={false} />
      <VisuallyHidden>
        <Alert children={`Item ${currentIndex + 1} of ${slides.length}`} />
      </VisuallyHidden>
    </S.Carousel>
  );
}

const Slide: React.FC<{
  isCurrent: boolean;
  takeFocus: boolean;
  image: string;
  id: string;
  title: string;
}> = ({ isCurrent, takeFocus, image, id, title, children }) => {
  return (
    <li
      aria-hidden={!isCurrent}
      tabIndex={-1}
      aria-labelledby={id}
      className="Slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <S.SlideContent>
        <h2 id={id}>{title}</h2>
        {children}
      </S.SlideContent>
    </li>
  );
};

const SlideNavItem: React.FC<{
  isCurrent: boolean;
  label: string;
  onClick: () => void;
}> = ({ isCurrent, label, onClick }) => (
  <li className="SlideNavItem">
    <button aria-label={label} aria-current={isCurrent} onClick={onClick}>
      <span />
    </button>
  </li>
);

const ProgressBar: React.FC<{ animate: boolean; time: number }> = ({
  animate,
  time
}) => {
  let progress = 0.5;

  return (
    <S.ProgressBarOuter>
      <S.ProgressBarInner progress={progress} />
    </S.ProgressBarOuter>
  );
};
