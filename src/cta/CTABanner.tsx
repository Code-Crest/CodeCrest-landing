import { ReactNode } from 'react';

import { MouseParallax, ScrollParallax } from 'react-just-parallax';

type ICTABannerProps = {
  title?: string;
  subtitle?: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <ScrollParallax>
    <div className="text-center flex flex-col mb-40 p-4 sm:text-left sm:flex-row sm:items-center sm:justify-center sm:p-12 bg-magenta-500 rounded-md">
      <div className="text-3xl font-semibold">
        <div className="text-magenta-400 text-center">{props.title}</div>
        <div className="text-magenta-200 text-center">{props.subtitle}</div>
      </div>
      <MouseParallax strength={0.1}>
        <div className="mt-3 sm:mt-0 sm:ml-2 flex justify-center">
          {props.button}
        </div>
      </MouseParallax>
    </div>
  </ScrollParallax>
);

export { CTABanner };
