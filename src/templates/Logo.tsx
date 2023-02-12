import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-3xl';

  const companyName = AppConfig.site_name;
  return (
    <span className={`inline-flex items-center ${fontStyle}`}>
      <span className="text-magenta-300">{companyName.slice(0, 4)}</span>
      <span className="text-magenta-200">{companyName.slice(4, 9)}</span>
    </span>
  );
};

export { Logo };
