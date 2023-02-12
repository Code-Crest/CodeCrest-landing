import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto ${
      props.yPadding ? props.yPadding : 'py-40'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-magenta-300 font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-2xl md:px-40">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
