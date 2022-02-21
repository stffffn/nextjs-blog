import { getYear } from 'date-fns';

const Footer = () => {
  const currDate = new Date();
  const currYear = getYear(currDate);

  return (
    <footer className="text-sm text-zinc-300 dark:text-zinc-600">
      © {currYear} Steffen Weitz
    </footer>
  );
};

export default Footer;
