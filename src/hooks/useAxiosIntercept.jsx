import axios from 'axios';

const useAxiosIntercept = () => {
  //
  const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
  });
  //
  // Request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers[`authorization`] = `bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //
  // Response interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login page
        // or clear token from localStorage
      }
      return Promise.reject(error);
    }
  );

  return [axiosSecure];
};

export default useAxiosIntercept;
