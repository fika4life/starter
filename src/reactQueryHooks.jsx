import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

export const useFetchTasks = () => {
  const { isPending, data, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    }
  });
  return { isPending, isError, data };
};

export const useCreateTask = (taskTitle) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Task added');
    },
    onError: (error) => toast.error(error.response.data.msg)
  });
  return { mutate, isLoading };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ taskId, isDone }) =>
      customFetch.patch(`/${taskId}`, { isDone }),
    onError: (error) => toast.error(error.response.data.msg),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks']
      });
      toast.success('Task edited');
    }
  });
  return { mutate };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
    onError: (error) => toast.error(error.response.data.msg),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks']
      });
      toast.success('Task deleted');
    }
  });
  return { mutate, isPending };
};
