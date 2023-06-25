import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import FooterJSX from '../components/footer/FooterJSX';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterJSX></FooterJSX>
    </div>
  );
};

export default MainLayout;
