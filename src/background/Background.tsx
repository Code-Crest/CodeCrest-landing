import { ReactNode } from 'react';

import styled from 'styled-components';

import FadeIn from '../animations/fadeIn';

type IBackgroundProps = {
  children: ReactNode;
};

const BackgroundBackground = styled.div`
  background-color: #19040a;
  background-image: url('./assets/images/mountain.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto;
`;

const Background = (props: IBackgroundProps) => (
  <FadeIn delay={1} repeat={false}>
    <BackgroundBackground>{props.children}</BackgroundBackground>
  </FadeIn>
);

export { Background };
