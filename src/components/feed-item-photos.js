// @ts-ignore
/* eslint-disable */
import React, { useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';

import ArrowButton from './arrow_button';
import 'keen-slider/keen-slider.min.css';

export default function FeedItemPhotos({ photos }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <div
        ref={sliderRef}
        className={`feed-photo-container flex relative items-center keen-slider outline-none ${
          photos?.length > 1 ? 'mb-0' : 'mb-2'
        }`}
      >
        {photos.map((item, index) => {
          return (
            <img
              key={index}
              className="keen-slider__slide flex-1 object-fill hide-photo absolute overflow-hidden"
              src={item || 'https://picsum.photos/512/512'}
            />
          );
        })}

        {slider && (
          <>
            <ArrowButton
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
              direction="left"
            />
            <ArrowButton
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
              direction="right"
            />
          </>
        )}
      </div>

      {slider && photos?.length > 1 && (
        <div className="slide-dots flex items-center justify-center mt-3">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                className="slide-dot flex justify-center"
                onClick={() => slider.moveToSlideRelative(idx)}
                style={{ backgroundColor: currentSlide === idx && '#364EF7' }}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
