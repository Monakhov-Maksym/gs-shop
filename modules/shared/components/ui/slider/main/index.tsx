import React from 'react';
// views
import { SliderWrapper, Wrapper, ArrowButton } from './views';

interface Props {
  items: React.ReactNode[];
  currentSlide?: number;
}

const Slider: React.FC<Props> = ({ items, currentSlide = 0 }) => {
  const [current, setCurrent] = React.useState(currentSlide);
  const length = items.length;

  const itemComponent = React.useMemo(
    () =>
      items?.map((item, index) => (
        <Wrapper key={index} active={index === current}>
          {index === current && item}
        </Wrapper>
      )),
    [items, current]
  );

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <SliderWrapper>
      <ArrowButton src='/static/images/left-arrow.svg' onClick={prevSlide} />

      {itemComponent}

      <ArrowButton src='/static/images/right-arrow.svg' onClick={nextSlide} />
    </SliderWrapper>
  );
};

export default Slider;
