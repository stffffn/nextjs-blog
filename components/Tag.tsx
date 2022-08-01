import Link from 'next/link';
import React from 'react';
import { replaceSpacesWithDashes } from '../lib/helpers';

const Tag: React.VFC<{ tag: string }> = ({ tag }) => {
  return (
    <Link key={tag} href={`/tag/${replaceSpacesWithDashes(tag)}`}>
      <a className="overflow-hidden text-ellipsis text-sm text-zinc-500 dark:text-zinc-400 hv:hover:text-blue-600 mr-2 dark:hv:hover:text-blue-500 transition-colors ease-in-out duration-200">
        #{tag}
      </a>
    </Link>
  );
};

export default Tag;
