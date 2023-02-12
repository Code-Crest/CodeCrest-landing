import Link from 'next/link';

import DropDown from '../animations/dropDown';
import FadeIn from '../animations/fadeIn';
import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background>
    <Section yPadding="py-6">
      <DropDown delay={1}>
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </DropDown>
    </Section>

    <Section yPadding="pt-60 pb-60">
      <HeroOneButton
        title={
          <span className="text-magenta-200">
            <FadeIn delay={1} repeat={false}>
              Bringing your <span className="text-magenta-50">ideas</span> to{' '}
              <span className="text-magenta-50">life</span>,{' '}
              <FadeIn delay={2} repeat={false}>
                <span className="text-magenta-100">one project at a time</span>
              </FadeIn>
            </FadeIn>
          </span>
        }
      />
    </Section>
  </Background>
);

export { Hero };
