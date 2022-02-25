import Link from 'next/link';
import { ReactNode } from 'react';

const HeaderItem = ({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
}) => {
  return (
    <Link href={href}>
      <a
        className="mr-2.5 last:mr-0 only-of-type:mr-0 hv:hover:text-blue-600 dark:hv:hover:text-blue-500 transition-colors ease-in-out duration-200"
        target={external ? '_blank' : '_self'}
        rel="noopener noreferrer"
        aria-label={label}
      >
        {children}
      </a>
    </Link>
  );
};

export default HeaderItem;
