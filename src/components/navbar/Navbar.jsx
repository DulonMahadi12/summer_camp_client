import { Link } from 'react-router-dom';

const Navbar = () => {
  //TODO: when user is available change this
  const user = true;

  return (
    <>
      <section className=' bg-[#FFF2CC] font-semibold body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link
            to={'/'}
            className='flex title-font font-medium font-logoFont items-center text-gray-900 mb-4 md:mb-0'
          >
            <span className='cursor-pointer'>
              <span className='text-[#FFC000] text-5xl'>SUMMER</span>
              <small className='text-[#636262] text-xl ml-1 '>level</small>
            </span>
          </Link>
          <nav className=' uppercase font-normal md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-[#808080] justify-center'>
            <Link
              to={'/home'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              Home
            </Link>
            <Link
              to={'/about'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              about
            </Link>

            <Link
              to={'/courses'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              our-courses
            </Link>
            <Link
              to={'/'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              gallery
            </Link>
            <Link
              to={'/blog'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              blog
            </Link>
            <Link
              to={'/'}
              className='mr-5 cursor-pointer hover:text-[#FFC000] hover:underline'
            >
              contact
            </Link>
          </nav>
          <section className='mr-5 '>
            <div className='flex mt-5 lg:mt-0'>
              {/* user felid */}
              {/* TODO: conditionally change when user is available */}
              {user ? (
                <>
                  <div className='w-14 h-14 rounded-full mr-2 border border-[#FFC000]'>
                    <img
                      className='rounded-full'
                      src='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
                      alt='userName'
                    />
                  </div>
                  <div className=' flex flex-col items-start'>
                    <div className='flex items-center'>
                      <p className='font-bold text-md text-[#101828]'>
                        Alex Shatov
                      </p>
                      <small className='text-sm font-light'>
                        <button className='uppercase mr-2 px-3 font-lg hover:bg-[#F04438]  hover:text-[white]  bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1  ml-1 font-normal duration-300'>
                          sign out
                        </button>
                      </small>
                    </div>
                    <small className='text-[#12B76A]'>
                      dullonmolla88@gmail.com
                    </small>
                  </div>
                </>
              ) : (
                <>
                  <small>
                    <button className='uppercase mr-2 px-10 py-2 font-lg hover:bg-[#12B76A]  hover:text-[white] duration-300 bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1 '>
                      sign in
                    </button>
                  </small>
                </>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Navbar;
