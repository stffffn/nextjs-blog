import Link from 'next/link';
import { replaceSpacesWithDashes } from '../lib/helpers';

const Tag = ({ tag }: { tag: string }) => {
  return (
    <Link key={tag} href={`/tag/${replaceSpacesWithDashes(tag)}`}>
      <a className="text-sm text-zinc-500 hover:text-blue-600 mr-2 dark:text-zinc-400 dark:hover:text-blue-500 transition-colors ease-in-out">
        #{tag}
      </a>
    </Link>
  );
};

export default Tag;
