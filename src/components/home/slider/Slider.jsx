import 'flowbite';
const Slider = () => {
  return (
    <>
      <div
        id='controls-carousel'
        className='relative w-full'
        data-carousel='static'
      >
        {/* <!-- Carousel wrapper --> */}
        <div className='relative h-56 overflow-hidden md:h-96'>
          {/* <!-- Item 1 --> */}
          <div
            className=' h-96 duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            data-carousel-item
          >
            <img
              src='https://as2.ftcdn.net/v2/jpg/04/55/46/91/1000_F_455469145_aCuxuoCZvNTGOO8bKD9xBf8t35W0f6CH.jpg'
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-40 '
              alt='...'
            />

            <div className='absolute top-[10%] left-[15%] lg:top-[40%] lg:left-[10%]'>
              <h2 className='text-3xl lg:text-4xl text-white font-bold font-logoFont w-12/12 lg:w-8/12'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis.
              </h2>
              <button className=' mt-2 uppercase mr-2 px-3 py-1 font-semibold font-logoFont hover:bg-[#FFF2CC]  hover:text-[#101828]  bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1  ml-1  duration-300'>
                sign out
              </button>
            </div>
          </div>

          {/* <!-- Item 1 --> */}
          <div
            className=' h-96 duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            data-carousel-item
          >
            <img
              src='https://t3.ftcdn.net/jpg/03/53/15/04/240_F_353150466_2s2qebykEGB4HWRwczDXdHjUEuM7OjVG.jpg'
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-40 '
              alt='...'
            />
            <div className='absolute top-[10%] left-[15%] lg:top-[40%] lg:left-[10%]'>
              <h2 className='text-3xl lg:text-4xl text-white font-bold font-logoFont w-12/12 lg:w-8/12'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis.
              </h2>
              <button className=' mt-2 uppercase mr-2 px-3 py-1 font-semibold font-logoFont hover:bg-[#FFF2CC]  hover:text-[#2b2b2b]  bg-[#FFC000] text-[#2b2b2b] rounded-lg hover:ring-1  ml-1  duration-300'>
                sign out
              </button>
            </div>
          </div>

          {/* <!-- Item 3 --> */}
          <div
            className=' h-96 duration-700 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            data-carousel-item
          >
            <img
              src='https://as2.ftcdn.net/v2/jpg/05/28/30/35/1000_F_528303572_KjQDY3scMNhxS15wYfkUUH9bUR7i4IGo.jpg'
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-40'
              alt='...'
            />
          </div>
          <div className='absolute top-[10%] left-[15%] lg:top-[40%] lg:left-[10%]'>
            <h2 className='text-3xl lg:text-4xl text-white font-bold font-logoFont w-12/12 lg:w-8/12'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis.
            </h2>
            <button className=' mt-2 uppercase mr-2 px-3 py-1 font-semibold font-logoFont hover:bg-[#FFF2CC]  hover:text-[#101828]  bg-[#FFC000] text-[#101828] rounded-lg hover:ring-1  ml-1  duration-300'>
              sign out
            </button>
          </div>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-white dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-white dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Slider;
