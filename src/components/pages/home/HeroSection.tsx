import { twMerge as tw } from 'tailwind-merge';
import Button from '@/components/atoms/Button';
import Image from 'next/image';

const HeroSection = () => (
  <header className={tw(`bg-white min-h-screen`)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`
        )}
      >
        Your website, beyond expectations
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p
          className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}
        >
          Make your website wonderful and build beyond your expectations.
        </p>
      </div>
      <div
        className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}
      >
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p
          className={tw(
            `font-mono uppercase text-center font-medium text-sm text-gray-600`
          )}
        >
          These folks get it
        </p>
        <div
          className={tw(`flex items-center justify-center mx-auto flex-wrap`)}
        >
          <Image
            src='/svgs/aws.svg'
            alt='aws'
            width={120}
            height={120}
            className={tw(`m-12 mb-8`)}
          />

          <Image
            src='/svgs/netlify.svg'
            alt='netlify'
            width={140}
            height={140}
            className={tw(`m-12`)}
          />
          <Image
            src='/svgs/nike.svg'
            alt='nike'
            width={140}
            height={140}
            className={tw(`m-12`)}
          />
          <Image
            src='/svgs/figma.svg'
            alt='figma'
            width={140}
            height={140}
            className={tw(`m-12`)}
          />
        </div>
      </div>
    </div>
  </header>
);

export default HeroSection;
