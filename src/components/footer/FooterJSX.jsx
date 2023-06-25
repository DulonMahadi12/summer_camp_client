import { Footer } from 'flowbite-react';
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Vite from '../../assets/react.svg';

const FooterJSX = () => {
  return (
    <>
      <Footer>
        <div className='w-full bg-[#FFFBEE] p-10'>
          <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 '>
            <div>
              <Link
                to={'/'}
                className='flex font-logoFont title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
              >
                <span className='cursor-pointer'>
                  {/* <span className='text-[#FFC000] text-5xl font-logo'>
                    SUMMER
                  </span>
                  <small className='text-[#101828] text-xl ml-1 font-bold'>
                    level
                  </small> */}
                  <small className=''>
                    <img className='w-[20rem]' src={Vite} alt='logoSVG' />
                  </small>
                </span>
              </Link>
            </div>
            <div className='grid grid-cols-2 text-[#101828] gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
                <Footer.Title title='about' />
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>Flowbite</Footer.Link>
                  <Footer.Link href='#'>Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Follow us' />
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>Github</Footer.Link>
                  <Footer.Link href='#'>Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Legal' />
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>Privacy Policy</Footer.Link>
                  <Footer.Link href='#'>Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright by='SummerLevel™' href='#' year={2023} />
            <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
              <Footer.Icon href='#' icon={BsFacebook} />
              <Footer.Icon href='#' icon={BsInstagram} />
              <Footer.Icon href='#' icon={BsTwitter} />
              <Footer.Icon href='#' icon={BsGithub} />
              <Footer.Icon href='#' icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterJSX;
