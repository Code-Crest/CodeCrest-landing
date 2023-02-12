import { ReactNode } from 'react';

import { MouseParallax } from 'react-just-parallax';

import FadeIn from '../animations/fadeIn';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-2xl mx-auto ${
      props.yPadding ? props.yPadding : 'py-40'
    }`}
  >
    <MouseParallax strength={0.015}>
      <FadeIn delay={1} repeat={false}>
        {(props.title || props.description) && (
          <div className="mb-12 text-center">
            {props.title && (
              <h2 className="text-5xl text-magenta-200 font-bold">
                {props.title}
              </h2>
            )}
            {props.description && (
              <div className="mt-4 text-3xl md:px-40">{props.description}</div>
            )}
          </div>
        )}
      </FadeIn>
    </MouseParallax>
    {props.children}
  </div>
);

export { Section };
