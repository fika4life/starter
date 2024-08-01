import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';
import { useFetchTasks } from './reactQueryHooks';

const Items = () => {
  const { isPending, data, isError } = useFetchTasks();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error.</div>;
  }

  return (
    <div className="items">
      {data &&
        data.taskList.map((item) => {
          return <SingleItem key={item.id} item={item} />;
        })}
    </div>
  );
};
export default Items;
