'use client';

import { twMerge as tw } from 'tailwind-merge';
import Button from '@/components/atoms/Button';
import submit from '@/app/actions';
import { experimental_useOptimistic } from 'react';

const OPTIMISTIC_MESSAGE = `Thanks for reaching out! We'll get back to you soon.`;

function ContactUs() {
  // more details of optimistic updates in the docs 
  // https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#optimistic-updates
  const [optimisticMessage, setOptimisticMessage] = experimental_useOptimistic<{
    message: string;
  }>({ message: OPTIMISTIC_MESSAGE });

  const onSubmit = async () => {
    const res = await submit();

    console.log(res);
  };

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
