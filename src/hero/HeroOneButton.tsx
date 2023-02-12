import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1>{props.title}</h1>
  </header>
);

export { HeroOneButton };
