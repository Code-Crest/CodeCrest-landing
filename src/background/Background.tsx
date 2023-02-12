import { ReactNode } from 'react';

import { MouseParallax, ScrollParallax } from 'react-just-parallax';
import styled from 'styled-components';

import FadeIn from '../animations/fadeIn';

type IBackgroundProps = {
  children: ReactNode;
};

const MountainSVG = styled.div`
  background-image: url('./assets/images/mountain.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const Background = (props: IBackgroundProps) => (
  <>
    <MouseParallax strength={0.01}>
      <ScrollParallax strength={0.15}>
        <FadeIn delay={2} repeat={false}>
          <MountainSVG />
        </FadeIn>
      </ScrollParallax>
    </MouseParallax>
    <FadeIn delay={1} repeat={false}>
      {props.children}
    </FadeIn>
  </>
);

export { Background };
