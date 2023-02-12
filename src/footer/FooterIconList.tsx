import { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex flex-wrap">
    {props.children}

    <style jsx>
      {`
        .footer-icon-list :global(a:not(:last-child)) {
          @apply mr-3;
        }

        .footer-icon-list :global(a) {
          @apply text-magenta-200;
        }

        .footer-icon-list :global(a:hover) {
          @apply text-magenta-600;
        }

        .footer-icon-list :global(svg) {
          @apply fill-current w-5 h-5;
        }
      `}
    </style>
  </div>
);

export { FooterIconList };
