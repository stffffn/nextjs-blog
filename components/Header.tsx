import React from 'react';
import { FaGithub, FaHashtag, FaInstagram, FaTwitter } from 'react-icons/fa';
import HeaderItem from './HeaderItem';
import ThemeSwitch from './ThemeSwitch';

const Header: React.VFC = () => {
  return (
    <header className="flex items-center">
      <HeaderItem href="/" label="Home">
        Bla Bli Blog
      </HeaderItem>

      <nav className="flex items-center ml-auto text-lg">
        <HeaderItem href="/tags" label="Tags">
          <FaHashtag />
        </HeaderItem>
        <HeaderItem
          href="https://github.com/stffffn"
          label="Github"
          external={true}
        >
          <FaGithub />
        </HeaderItem>
        <HeaderItem
          href="https://instagram.com/stffffn/"
          label="Instagram"
          external={true}
        >
          <FaInstagram />
        </HeaderItem>
        <HeaderItem
          href="https://twitter.com/stffffn/"
          label="Twitter"
          external={true}
        >
          <FaTwitter />
        </HeaderItem>
        <ThemeSwitch />
      </nav>
    </header>
  );
};

export default Header;
