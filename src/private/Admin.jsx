import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/loader/Loading';
import useGetUser from '../hooks/useGetUser';

const Admin = ({ children }) => {
  const [isLoading, error, data] = useGetUser();
  let location = useLocation();

  if (!data?.user_role) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    Navigate('/');
  }

  if (data?.user_role === 'admin') {
    return children;
  }
};

export default Admin;
