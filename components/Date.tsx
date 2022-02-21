import { parseISO, format } from 'date-fns';

const Date = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="text-sm text-zinc-500 dark:text-zinc-400"
    >
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
};

export default Date;
