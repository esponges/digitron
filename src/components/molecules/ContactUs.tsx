'use client';

import { experimental_useOptimistic as useOptimistic } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { experimental_useFormState as useFormState } from 'react-dom';
import { twMerge as tw } from 'tailwind-merge';

import Button from '@/components/atoms/Button';
import submit from '@/app/actions';

const OPTIMISTIC_MESSAGE = `Thanks for reaching out! We'll get back to you soon.`;

function ContactUs() {
  // more details of optimistic updates in the docs
  // https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#optimistic-updates
  const [optimisticMessage, setOptimisticMessage] = useOptimistic<{
    message: string;
  }>({ message: OPTIMISTIC_MESSAGE });
  const { pending } = useFormStatus();
  const [formStatus, formAction] = useFormState(submit, {
    message: '',
  });

  return (
    <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
      <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
        <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>
          Dudas? Escríbenos
        </h4>
        <form
          className={tw(`flex w-full`)}
          // onSubmit={handleSubmit}
          action={formAction}
        >
          <input
            aria-label='email address'
            value='foo'
            type='text'
            className={tw(
              `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
            )}
            readOnly
            placeholder='Enter your email'
          />
          <Button type='submit'>Contáctanos</Button>
          <p className={tw(`text-sm text-gray-500`)}>{formStatus.message}</p>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
