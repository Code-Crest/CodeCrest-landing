import { ReactNode } from 'react';

import styled from 'styled-components';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const BackgroundBackground = styled.div`
  background-color: #19040a;
  background-image: url('./assets/images/mountain.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
`;

const Background = (props: IBackgroundProps) => (
  <BackgroundBackground className={props.color}>
    {props.children}
  </BackgroundBackground>
);

export { Background };
