

import { twMerge as tw } from 'tailwind-merge';
import Button from '@/components/atoms/Button';

function ContactUs() {
  return (
    <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
      <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
        <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>
          Dudas? Escríbenos
        </h4>
        <div className={tw(`flex w-full`)}>
          <input
            aria-label='email address'
            type='text'
            className={tw(
              `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
            )}
            placeholder='Enter your email'
          />
          <Button>Contáctanos</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
