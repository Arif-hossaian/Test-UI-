import clsx from 'clsx';
import { Card } from '../Card/Card';

const ItemsCard = ({ className, Icon, title, subtitle }) => {
  return (
    <Card className={clsx('px-4 py-6 text-center md:text-left', className)}>
      <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#255d52] dark:bg-indigo-600 md:mx-0">
        {Icon}
      </span>

      <span className="mt-6 block text-lg font-semibold text-gray-900 dark:text-gray-50">
        {title}
      </span>
      <p className="text-sm">{subtitle}</p>
    </Card>
  );
};

export default ItemsCard;
