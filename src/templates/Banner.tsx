import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Let your ideas reach the crest with us."
      subtitle="Don't let your dreams for the future."
      button={
        <Link href="/">
          <a>
            <Button>Contact Us</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
