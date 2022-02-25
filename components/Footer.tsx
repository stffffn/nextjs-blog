import { getYear } from 'date-fns';
import Link from 'next/link';
import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsNc,
} from 'react-icons/fa';

const Footer = () => {
  const currDate = new Date();
  const currYear = getYear(currDate);

  return (
    <footer className="flex items-center text-zinc-500 dark:text-zinc-400">
      <span className="pr-2 text-sm">© {currYear} Steffen Weitz</span>

      <Link href={'https://creativecommons.org/licenses/by-nc/4.0/'}>
        <a
          target="_blank"
          className="flex items-center ml-auto text-lg hv:hover:text-blue-600 dark:hv:hover:text-blue-500 transition-colors ease-in-out duration-200"
          rel="noopener noreferrer"
          aria-label="Creative Commens CC BY-NC 4.0"
        >
          <FaCreativeCommons className="mr-1" />
          <FaCreativeCommonsBy className="mr-1" />
          <FaCreativeCommonsNc />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
