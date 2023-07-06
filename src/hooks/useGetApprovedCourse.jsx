import { useContext } from 'react';
import { MyContext } from '../context/ContextPassData';
import { useQuery } from '@tanstack/react-query';
import useAxiosIntercept from './useAxiosIntercept';

const useGetApprovedCourse = () => {
  const { user } = useContext(MyContext);
  const [axiosSecure] = useAxiosIntercept();
  const { isLoading, error, data } = useQuery({
    queryKey: ['uiCourses'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses?email=${user?.email}`);
      return res?.data;
    },
  });

  return [isLoading, error, data];
};

export default useGetApprovedCourse;
