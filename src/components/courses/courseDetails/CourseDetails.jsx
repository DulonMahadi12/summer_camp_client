import { Link } from 'react-router-dom';

const CourseDetails = () => {
  return (
    <div className='w-full flex items-center justify-center min-h-screen'>
      {/* TODO: akhane dynamically card ta render hobe */}

      <div className='bg-[#FFFBEE] flex flex-col items-center justify-center py-10 mx-auto'>
        <div className='relative ring-1 bg-gradient-to-r from-cyan-700 to-blue-700 image w-[80%] h-[400px] rounded-t-lg bg-gray-100  overflow-hidden'>
          <img
            className='opacity-50 lg:w-2/2 w-[100%] lg:h-auto object-cover object-center rounded'
            src='https://www.signupgenius.com/cms/images/groups/30-Fun-Summer-Camp-Games-for-Kids-1260x630.png'
            alt=''
          />
        </div>
        <div className='absolute top-[70%] flex justify-center items-center gap-10 '>
          <div className='sm:w-[80px] sm:h-[100px]  lg:w-[150px] lg:h-[170px] rounded-lg bg-red-300 duration-200 hover:ring-1 hover:bg-red-500 cursor-pointer text-[#101828] hover:text-[white] flex flex-col items-center justify-center'>
            <p className='lg:text-3xl sm:xl font-bold font-logoFont capitalize'>
              duration
            </p>
            <p className='lg:text-xl sm:text-sm font-bold lg:pt-3 sm:pt-0'>
              07-month
            </p>
          </div>

          <div className='sm:w-[80px] sm:h-[100px]  lg:w-[150px] lg:h-[170px]  rounded-lg bg-cyan-300 duration-200 hover:ring-1 hover:bg-cyan-500 cursor-pointer text-[#101828] hover:text-[white] flex flex-col items-center justify-center'>
            <p className='sm:text-xl lg:text-3xl font-bold font-logoFont capitalize'>
              age
            </p>
            <p className='lg:text-xl sm:text-sm font-bold lg:pt-3 sm:pt-0'>
              07-10
            </p>
          </div>

          <div className='sm:w-[80px] sm:h-[100px]  lg:w-[150px] lg:h-[170px]  rounded-lg bg-violet-300 duration-200 hover:ring-1 hover:bg-violet-500 cursor-pointer text-[#101828] hover:text-[white] flex flex-col items-center justify-center'>
            <p className='sm:text-xl lg:text-3xl font-bold font-logoFont capitalize'>
              costs
            </p>
            <p className='lg:text-xl sm:text-sm font-bold lg:pt-3 sm:pt-0'>
              220$
            </p>
          </div>

          <div className='sm:w-[80px] sm:h-[100px]  lg:w-[150px] lg:h-[170px]  rounded-lg bg-yellow-300 duration-200 hover:ring-1 hover:bg-yellow-500 cursor-pointer text-[#101828] hover:text-[white] flex flex-col items-center justify-center'>
            <p className='sm:text-xl lg:text-3xl font-bold font-logoFont capitalize'>
              class
            </p>
            <p className='lg:text-xl sm:text-sm font-bold lg:pt-3 sm:pt-0'>
              05-day / Week
            </p>
          </div>
        </div>
        <div className='paragraph w-[80%] ring-1 rounded-b-lg h-auto bg-slate-100'>
          <div className='p-12 md:w-2/2 flex flex-col items-start mt-10'>
            <span className='inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest'>
              CATEGORY
            </span>
            <h2 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4'>
              heading text for this course related.
            </h2>
            <p className='leading-relaxed mb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              minima nesciunt dolor, tempora quisquam, eius dignissimos, odio
              impedit aspernatur fuga ex et quidem labore molestiae.
            </p>
            <div className='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full'>
              <div className='flex justify-center items-center'>
                <small className='font-normal text-md'>
                  <button className='ms-2 rounded-lg w-32 h-6 duration-200 font-bold text-xs py-1 px-5 text-[#2b2b2b] capitalize bg-[#FFC000] hover:bg-[#12B76A] hover:text-white'>
                    add to cart
                  </button>
                </small>

                <small className='font-normal text-md'>
                  <Link to={'/courses'}>
                    <button className='ms-2 rounded-lg w-32 h-6 duration-200 font-bold text-xs py-1 px-5 text-[#2b2b2b] capitalize bg-[#FFC000] hover:bg-[#12B76A] hover:text-white'>
                      back to course
                    </button>
                  </Link>
                </small>
              </div>
              <span className='text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                <svg
                  className='w-4 h-4 mr-1'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                  <circle cx='12' cy='12' r='3'></circle>
                </svg>
                1.2K
              </span>
              <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                <svg
                  className='w-4 h-4 mr-1'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                </svg>
                6
              </span>
            </div>
            <a className='inline-flex items-center'>
              <img
                alt='blog'
                src='https://dummyimage.com/104x104'
                className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
              />
              <span className='flex-grow flex flex-col pl-4'>
                <span className='title-font font-medium text-gray-900'>
                  Holden Caulfield
                </span>
                <span className='text-gray-400 text-xs tracking-widest mt-0.5'>
                  UI DEVELOPER
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
