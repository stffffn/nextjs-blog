import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  let { theme } = useTheme();
  const { setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (
    theme === 'system' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    theme = 'light';
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === 'dark' || theme === 'system' ? 'light' : 'dark')
      }
      className="inline-block mr-2.5 last:mr-0 only-of-type:mr-0 hv:hover:text-blue-600 dark:hv:hover:text-blue-500 transition-colors ease-in-out"
    >
      {theme === 'dark' || theme === 'system' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeSwitch;
