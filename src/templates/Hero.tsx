import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-magenta-200">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Contact Us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-60 pb-60">
      <HeroOneButton
        title={
          <span className="text-magenta-200">
            Bringing your <span className="text-magenta-50">ideas</span> to{' '}
            <span className="text-magenta-50">life</span>,{' '}
            <span className="text-magenta-100">one project at a time</span>
          </span>
        }
      />
    </Section>
  </Background>
);

export { Hero };
