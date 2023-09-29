'use client';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { twMerge as tw } from 'tailwind-merge';

const CARROUSEL_IMAGES = [
  {
    source: '/images/hp_printer.jpg',
    alt: 'printer',
  },
  {
    source: '/images/hp_toner.jpg',
    alt: 'toner',
  },
];

const VideoSection = () => {
  return (
    <section
      className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}
    >
      <div className={tw(`max-w-7xl mx-auto`)}>
        <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
          <div className={tw(`w-full`)}>
            <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
              <AwesomeSlider startup bullets media={CARROUSEL_IMAGES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
