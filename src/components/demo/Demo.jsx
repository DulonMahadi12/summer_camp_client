import '../../../node_modules/flowbite/dist/flowbite';
//

const Demo = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <p className='text-2xl'>section heder title with background image</p>
      <br />
      <br />
      <br />
      <br />
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
            We invest in the world’s potential
          </h1>
          <p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
            <a
              href='#'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
            >
              Get started
              <svg
                aria-hidden='true'
                className='ml-2 -mr-1 w-4 h-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
            <a
              href='#'
              className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5'>
        <div
          className='bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden'
          style={{ maxWidth: '1000px' }}
        >
          <div className='md:flex w-full'>
            <div className='hidden md:block w-1/2 bg-indigo-500 '>
              <img
                src='https://images.unsplash.com/photo-1622659097509-4d56de14539e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1366&q=80'
                alt=''
              />
            </div>
            <div className='w-full md:w-1/2 py-10 px-5 bg-[#FFFBEE] md:px-10'>
              <div className='text-center mb-10'>
                <h1 className='font-bold text-3xl text-gray-900'>REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div className='flex -mx-3'>
                  <div className='w-1/2 px-3 mb-5'>
                    <label htmlFor='' className='text-xs font-semibold px-1'>
                      First name
                    </label>
                    <div className='flex'>
                      <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                        <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                      </div>
                      <input
                        type='text'
                        className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                        placeholder='John'
                      />
                    </div>
                  </div>
                  <div className='w-1/2 px-3 mb-5'>
                    <label htmlFor='' className='text-xs font-semibold px-1'>
                      Last name
                    </label>
                    <div className='flex'>
                      <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                        <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                      </div>
                      <input
                        type='text'
                        className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                        placeholder='Smith'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex -mx-3'>
                  <div className='w-full px-3 mb-5'>
                    <label htmlFor='' className='text-xs font-semibold px-1'>
                      Email
                    </label>
                    <div className='flex'>
                      <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                        <i className='mdi mdi-email-outline text-gray-400 text-lg'></i>
                      </div>
                      <input
                        type='email'
                        className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                        placeholder='johnsmith@example.com'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex -mx-3'>
                  <div className='w-full px-3 mb-12'>
                    <label htmlFor='' className='text-xs font-semibold px-1'>
                      Password
                    </label>
                    <div className='flex'>
                      <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                        <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                      </div>
                      <input
                        type='password'
                        className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                        placeholder='************'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex -mx-3'>
                  <div className='w-full px-3 mb-5'>
                    <button className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'>
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
