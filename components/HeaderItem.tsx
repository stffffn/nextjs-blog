import Link from 'next/link';
import { ReactNode } from 'react';

const HeaderItem = ({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) => {
  return (
    <Link href={href}>
      <a
        className="inline-block mr-2.5 last:mr-0 only-of-type:mr-0 hover:text-blue-600 dark:hover:text-blue-500 transition-colors ease-in-out"
        target={external ? '_blank' : '_self'}
      >
        {children}
      </a>
    </Link>
  );
};

export default HeaderItem;
