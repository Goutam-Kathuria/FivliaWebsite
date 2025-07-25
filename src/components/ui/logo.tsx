import Image from 'next/image';
import Link from '@components/ui/link';
import cn from 'classnames';
import { siteSettings } from '@settings/site-settings';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-block focus:outline-none max-w-[131px] w-full',
        className
      )}
      {...props}
    >
      <span className="text-2xl md:text-3xl font-bold text-green-800 hover:text-brand transition-colors duration-200">
        {siteSettings.name}
      </span>
    </Link>
  );
};

export default Logo;
