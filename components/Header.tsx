import {
  FaGithub,
  FaHashtag,
  FaInstagram,
  FaRegEnvelope,
  FaTwitter,
} from 'react-icons/fa';
import HeaderItem from './HeaderItem';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="flex items-center">
      <HeaderItem href="/">S–W</HeaderItem>

      <nav className="flex items-center ml-auto text-lg">
        <HeaderItem href="/tags">
          <FaHashtag />
        </HeaderItem>
        <HeaderItem href="https://github.com/stffffn" external={true}>
          <FaGithub />
        </HeaderItem>
        <HeaderItem href="https://instagram.com/stffffn/" external={true}>
          <FaInstagram />
        </HeaderItem>
        <HeaderItem href="https://twitter.com/stffffn/" external={true}>
          <FaTwitter />
        </HeaderItem>
        <HeaderItem href="mailto:hallo@steffenweitz.de">
          <FaRegEnvelope />
        </HeaderItem>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
