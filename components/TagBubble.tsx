import Link from 'next/link';
import { replaceSpacesWithDashes } from '../lib/helpers';

const TagBubble = ({ name, active }: { name: string; active?: boolean }) => {
  return (
    <Link href={`/tag/${replaceSpacesWithDashes(name)}`}>
      <a
        className={`overflow-hidden text-ellipsis bg-zinc-300 hv:hover:bg-blue-600 hv:hover:text-white dark:text-zinc-800 dark:hv:hover:text-zinc-800 dark:hv:hover:bg-blue-500 transition-colors ease-in-out rounded-full px-2 py-1 no-underline text-sm mr-2 my-1 inline-block whitespace-nowrap dark:font-medium ${
          active && 'bg-blue-600 text-white dark:bg-blue-500'
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default TagBubble;
