import Link from 'next/link';
import React from 'react';
import { replaceSpacesWithDashes } from '../lib/helpers';

const TagBubble: React.VFC<{ name: string; active?: boolean }> = ({
  name,
  active,
}) => {
  return (
    <Link href={`/tag/${replaceSpacesWithDashes(name)}`}>
      <a
        className={`inline-block mr-2 my-1 px-2 py-1 rounded-full bg-zinc-300 hv:hover:bg-blue-600 overflow-hidden text-ellipsis no-underline text-sm whitespace-nowrap dark:font-medium dark:text-zinc-800 hv:hover:text-white dark:hv:hover:text-zinc-800 dark:hv:hover:bg-blue-500 transition-colors ease-in-out duration-200 ${
          active && 'bg-blue-600 dark:bg-blue-500 text-white'
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default TagBubble;
