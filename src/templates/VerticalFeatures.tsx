import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="What we do"
    description="We offer a straightforward approach to software development by defining a clear deadline and tasks, ensuring efficient and cost-effective results for our clients."
  >
    <VerticalFeatureRow
      title="Streamline Your Business Operations"
      description="Outsource with us and free up valuable time and resources to focus on core business activities. Our team of experts will handle all your non-core tasks efficiently and effectively."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />

    <VerticalFeatureRow
      title="Save Money and Time"
      description="With outsourcing, you only pay for the services you need, when you need them. No more worrying about the costs of hiring and training full-time employees. Let us take care of it for you."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />

    <VerticalFeatureRow
      title="Talents in our hands"
      description="Our team of highly skilled professionals come from a variety of industries and backgrounds, bringing a wealth of expertise to your business. Outsource with us to gain access to top talent without the hassle of hiring and training in-house."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
