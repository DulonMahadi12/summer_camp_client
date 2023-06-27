import '../../../node_modules/flowbite/dist/flowbite';
//

const Demo = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className='flex overflow-hidden bg-white'>
          <nav className='bg-white border-b border-gray-200 fixed z-30 w-full'>
            <div className='px-3 py-3 lg:px-5 lg:pl-3'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                  <button
                    id='toggleSidebarMobile'
                    aria-expanded='true'
                    aria-controls='sidebar'
                    className='lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded'
                  >
                    <svg
                      id='toggleSidebarMobileHamburger'
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <svg
                      id='toggleSidebarMobileClose'
                      className='w-6 h-6 hidden'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                  <a
                    href='#'
                    className='text-xl font-bold flex items-center lg:ml-2.5'
                  >
                    <img
                      src='https://demo.themesberg.com/windster/images/logo.svg'
                      className='h-6 mr-2'
                      alt='Windster Logo'
                    />
                    <span className='self-center whitespace-nowrap'>
                      Windster
                    </span>
                  </a>
                  <form
                    action='#'
                    method='GET'
                    className='hidden lg:block lg:pl-32'
                  >
                    <label htmlFor='topbar-search' className='sr-only'>
                      Search
                    </label>
                    <div className='mt-1 relative lg:w-64'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <svg
                          className='w-5 h-5 text-gray-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </div>
                      <input
                        type='text'
                        name='email'
                        id='topbar-search'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5'
                        placeholder='Search'
                      />
                    </div>
                  </form>
                </div>
                <div className='flex items-center'>
                  <button
                    id='toggleSidebarMobileSearch'
                    type='button'
                    className='lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg'
                  >
                    <span className='sr-only'>Search</span>
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                  <div className='hidden lg:flex items-center'>
                    <span className='text-base font-normal text-gray-500 mr-5'>
                      Open source ❤️
                    </span>
                    <div className='-mb-1'>
                      <a
                        className='github-button'
                        href='#'
                        data-color-scheme='no-preference: dark; light: light; dark: light;'
                        data-icon='octicon-star'
                        data-size='large'
                        data-show-count='true'
                        aria-label='Star themesberg/windster-tailwind-css-dashboard on GitHub'
                      >
                        Star
                      </a>
                    </div>
                  </div>
                  <a
                    href='#'
                    className='hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3'
                  >
                    <svg
                      className='svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fas'
                      data-icon='gem'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z'
                      ></path>
                    </svg>
                    Upgrade to Pro
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <aside className='flex fixed w-full -translate-x-full transform transition-transform duration-200 ease-in md:translate-x-0'>
            <div className='flex flex-col items-center w-16 h-screen py-8 bg-white dark:bg-gray-900 dark:border-gray-700'>
              <nav className='flex flex-col items-center flex-1 space-y-8 '>
                <a href='#'>
                  <img
                    className='w-auto h-6'
                    src='https://merakiui.com/images/logo.svg'
                    alt=''
                  />
                </a>

                <a
                  href='#'
                  className='p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='p-1.5 inline-block text-blue-500 transition-colors duration-200 bg-blue-100 rounded-lg dark:text-blue-400 dark:bg-gray-800'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </a>

                <a
                  href='#'
                  className='p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </a>
              </nav>

              <div className='flex flex-col items-center mt-4 space-y-4'>
                <a href='#'>
                  <img
                    className='object-cover w-8 h-8 rounded-lg'
                    src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80'
                    alt='avatar'
                  />
                </a>

                <a
                  href='#'
                  className='text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className='h-screen px-5 py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700'>
              <div className='relative'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='w-5 h-5 text-gray-400'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </span>

                <input
                  type='text'
                  className='w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                  placeholder='Search'
                />
              </div>

              <nav className='mt-4 -mx-3 space-y-6 '>
                <div className='space-y-3 '>
                  <label className='px-3 text-xs text-gray-500 uppercase dark:text-gray-400'>
                    analytics
                  </label>

                  <a
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605'
                      />
                    </svg>

                    <span className='mx-2 text-sm font-medium'>Dashboard</span>
                  </a>

                  <a
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6'
                      />
                    </svg>

                    <span className='mx-2 text-sm font-medium'>
                      Preformance
                    </span>
                  </a>
                </div>

                <div className='space-y-3 '>
                  <label className='px-3 text-xs text-gray-500 uppercase dark:text-gray-400'>
                    content
                  </label>

                  <a
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                      />
                    </svg>

                    <span className='mx-2 text-sm font-medium'>Guides</span>
                  </a>

                  <a
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3'
                      />
                    </svg>

                    <span className='mx-2 text-sm font-medium'>Hotspots</span>
                  </a>

                  <a
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                      />
                    </svg>

                    <span className='mx-2 text-sm font-medium'>Checklists</span>
                  </a>
                </div>

                <div className='space-y-3 '>
                  <label className='px-3 text-xs text-gray-500 uppercase dark:text-gray-400'>
                    Customization
                  </label>

                  <a
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z'
                      />
                    </svg>

                    <span className='mx-2 text-sm font-medium'>Themes</span>
                  </a>

                  <a
                    className='flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>

                    <span className='mx-2 text-sm font-medium'>Setting</span>
                  </a>
                </div>
              </nav>
            </div>
          </aside>
          {/* <div className='flex bg-blue-300 w-full'></div> */}
          <div
            id='main-content'
            className='h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 pt-16'
          >
            <main>
              <div className='pt-6 px-4'>
                <div className='w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
                  <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2'>
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex-shrink-0'>
                        <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                          $45,385
                        </span>
                        <h3 className='text-base font-normal text-gray-500'>
                          Sales this week
                        </h3>
                      </div>
                      <div className='flex items-center justify-end flex-1 text-green-500 text-base font-bold'>
                        12.5%
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div id='main-chart'></div>
                  </div>
                  <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                    <div className='mb-4 flex items-center justify-between'>
                      <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-2'>
                          Latest Transactions
                        </h3>
                        <span className='text-base font-normal text-gray-500'>
                          This is a list of latest transactions
                        </span>
                      </div>
                      <div className='flex-shrink-0'>
                        <a
                          href='#'
                          className='text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2'
                        >
                          View all
                        </a>
                      </div>
                    </div>
                    <div className='flex flex-col mt-8'>
                      <div className='overflow-x-auto rounded-lg'>
                        <div className='align-middle inline-block min-w-full'>
                          <div className='shadow overflow-hidden sm:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                              <thead className='bg-gray-50'>
                                <tr>
                                  <th
                                    scope='col'
                                    className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                  >
                                    Transaction
                                  </th>
                                  <th
                                    scope='col'
                                    className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                  >
                                    Date & Time
                                  </th>
                                  <th
                                    scope='col'
                                    className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                                  >
                                    Amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='bg-white'>
                                <tr>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                                    Payment from{' '}
                                    <span className='font-semibold'>
                                      Bonnie Green
                                    </span>
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    Apr 23 ,2021
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
                                    $2300
                                  </td>
                                </tr>
                                <tr className='bg-gray-50'>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left'>
                                    Payment refund to{' '}
                                    <span className='font-semibold'>
                                      #00910
                                    </span>
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    Apr 23 ,2021
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
                                    -$670
                                  </td>
                                </tr>
                                <tr>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                                    Payment failed from{' '}
                                    <span className='font-semibold'>
                                      #087651
                                    </span>
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    Apr 18 ,2021
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
                                    $234
                                  </td>
                                </tr>
                                <tr className='bg-gray-50'>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left'>
                                    Payment from{' '}
                                    <span className='font-semibold'>
                                      Lana Byrd
                                    </span>
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    Apr 15 ,2021
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
                                    $5000
                                  </td>
                                </tr>
                                <tr>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                                    Payment from{' '}
                                    <span className='font-semibold'>
                                      Jese Leos
                                    </span>
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    Apr 15 ,2021
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
                                    $2300
                                  </td>
                                </tr>
                                <tr className='bg-gray-50'>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left'>
                                    Payment from{' '}
                                    <span className='font-semibold'>
                                      THEMESBERG LLC
                                    </span>
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    Apr 11 ,2021
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
                                    $560
                                  </td>
                                </tr>
                                <tr>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
                                    Payment from{' '}
                                    <span className='font-semibold'>
                                      Lana Lysle
                                    </span>
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
                                    Apr 6 ,2021
                                  </td>
                                  <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
                                    $1437
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                  <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                        <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                          2,340
                        </span>
                        <h3 className='text-base font-normal text-gray-500'>
                          New products this week
                        </h3>
                      </div>
                      <div className='ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold'>
                        14.6%
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                        <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                          5,355
                        </span>
                        <h3 className='text-base font-normal text-gray-500'>
                          Visitors this week
                        </h3>
                      </div>
                      <div className='ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold'>
                        32.9%
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                        <span className='text-2xl sm:text-3xl leading-none font-bold text-gray-900'>
                          385
                        </span>
                        <h3 className='text-base font-normal text-gray-500'>
                          User signups this week
                        </h3>
                      </div>
                      <div className='ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold'>
                        -2.7%
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4'>
                  <div className='bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full'>
                    <div className='flex items-center justify-between mb-4'>
                      <h3 className='text-xl font-bold leading-none text-gray-900'>
                        Latest Customers
                      </h3>
                      <a
                        href='#'
                        className='text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2'
                      >
                        View all
                      </a>
                    </div>
                    <div className='flow-root'>
                      <ul role='list' className='divide-y divide-gray-200'>
                        <li className='py-3 sm:py-4'>
                          <div className='flex items-center space-x-4'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-8 w-8 rounded-full'
                                src='https://demo.themesberg.com/windster/images/users/neil-sims.png'
                                alt='Neil image'
                              />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <p className='text-sm font-medium text-gray-900 truncate'>
                                Neil Sims
                              </p>
                              <p className='text-sm text-gray-500 truncate'>
                                <a
                                  href='/cdn-cgi/l/email-protection'
                                  className='__cf_email__'
                                  data-cfemail='17727a767e7b57607e7973646372653974787a'
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                              $320
                            </div>
                          </div>
                        </li>
                        <li className='py-3 sm:py-4'>
                          <div className='flex items-center space-x-4'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-8 w-8 rounded-full'
                                src='https://demo.themesberg.com/windster/images/users/bonnie-green.png'
                                alt='Neil image'
                              />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <p className='text-sm font-medium text-gray-900 truncate'>
                                Bonnie Green
                              </p>
                              <p className='text-sm text-gray-500 truncate'>
                                <a
                                  href='/cdn-cgi/l/email-protection'
                                  className='__cf_email__'
                                  data-cfemail='d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9'
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                              $3467
                            </div>
                          </div>
                        </li>
                        <li className='py-3 sm:py-4'>
                          <div className='flex items-center space-x-4'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-8 w-8 rounded-full'
                                src='https://demo.themesberg.com/windster/images/users/michael-gough.png'
                                alt='Neil image'
                              />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <p className='text-sm font-medium text-gray-900 truncate'>
                                Michael Gough
                              </p>
                              <p className='text-sm text-gray-500 truncate'>
                                <a
                                  href='/cdn-cgi/l/email-protection'
                                  className='__cf_email__'
                                  data-cfemail='57323a363e3b17203e3933242332257934383a'
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                              $67
                            </div>
                          </div>
                        </li>
                        <li className='py-3 sm:py-4'>
                          <div className='flex items-center space-x-4'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-8 w-8 rounded-full'
                                src='https://demo.themesberg.com/windster/images/users/thomas-lean.png'
                                alt='Neil image'
                              />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <p className='text-sm font-medium text-gray-900 truncate'>
                                Thomes Lean
                              </p>
                              <p className='text-sm text-gray-500 truncate'>
                                <a
                                  href='/cdn-cgi/l/email-protection'
                                  className='__cf_email__'
                                  data-cfemail='284d45494144685f41464c5b5c4d5a064b4745'
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                              $2367
                            </div>
                          </div>
                        </li>
                        <li className='pt-3 sm:pt-4 pb-0'>
                          <div className='flex items-center space-x-4'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-8 w-8 rounded-full'
                                src='https://demo.themesberg.com/windster/images/users/lana-byrd.png'
                                alt='Neil image'
                              />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <p className='text-sm font-medium text-gray-900 truncate'>
                                Lana Byrd
                              </p>
                              <p className='text-sm text-gray-500 truncate'>
                                <a
                                  href='/cdn-cgi/l/email-protection'
                                  className='__cf_email__'
                                  data-cfemail='a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf'
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div className='inline-flex items-center text-base font-semibold text-gray-900'>
                              $367
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
                    <h3 className='text-xl leading-none font-bold text-gray-900 mb-10'>
                      Acquisition Overview
                    </h3>
                    <div className='block w-full overflow-x-auto'>
                      <table className='items-center w-full bg-transparent border-collapse'>
                        <thead>
                          <tr>
                            <th className='px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap'>
                              Top Channels
                            </th>
                            <th className='px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap'>
                              Users
                            </th>
                            <th className='px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px'></th>
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                          <tr className='text-gray-500'>
                            <th className='border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left'>
                              Organic Search
                            </th>
                            <td className='border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4'>
                              5,649
                            </td>
                            <td className='border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4'>
                              <div className='flex items-center'>
                                <span className='mr-2 text-xs font-medium'>
                                  30%
                                </span>
                                <div className='relative w-full'>
                                  <div className='w-full bg-gray-200 rounded-sm h-2'>
                                    <div
                                      className='bg-cyan-600 h-2 rounded-sm'
                                      style={{ width: '30%' }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className='text-gray-500'>
                            <th className='border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left'>
                              Referral
                            </th>
                            <td className='border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4'>
                              4,025
                            </td>
                            <td className='border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4'>
                              <div className='flex items-center'>
                                <span className='mr-2 text-xs font-medium'>
                                  24%
                                </span>
                                <div className='relative w-full'>
                                  <div className='w-full bg-gray-200 rounded-sm h-2'>
                                    <div
                                      className='bg-orange-300 h-2 rounded-sm'
                                      style={{ width: '24%' }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className='text-gray-500'>
                            <th className='border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left'>
                              Direct
                            </th>
                            <td className='border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4'>
                              3,105
                            </td>
                            <td className='border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4'>
                              <div className='flex items-center'>
                                <span className='mr-2 text-xs font-medium'>
                                  18%
                                </span>
                                <div className='relative w-full'>
                                  <div className='w-full bg-gray-200 rounded-sm h-2'>
                                    <div
                                      className='bg-teal-400 h-2 rounded-sm'
                                      style={{ width: '18%' }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className='text-gray-500'>
                            <th className='border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left'>
                              Social
                            </th>
                            <td className='border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4'>
                              1251
                            </td>
                            <td className='border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4'>
                              <div className='flex items-center'>
                                <span className='mr-2 text-xs font-medium'>
                                  12%
                                </span>
                                <div className='relative w-full'>
                                  <div className='w-full bg-gray-200 rounded-sm h-2'>
                                    <div
                                      className='bg-pink-600 h-2 rounded-sm'
                                      style={{ width: '12%' }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className='text-gray-500'>
                            <th className='border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left'>
                              Other
                            </th>
                            <td className='border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4'>
                              734
                            </td>
                            <td className='border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4'>
                              <div className='flex items-center'>
                                <span className='mr-2 text-xs font-medium'>
                                  9%
                                </span>
                                <div className='relative w-full'>
                                  <div className='w-full bg-gray-200 rounded-sm h-2'>
                                    <div
                                      className='bg-indigo-600 h-2 rounded-sm'
                                      style={{ width: '9%' }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className='text-gray-500'>
                            <th className='border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left'>
                              Email
                            </th>
                            <td className='border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0'>
                              456
                            </td>
                            <td className='border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0'>
                              <div className='flex items-center'>
                                <span className='mr-2 text-xs font-medium'>
                                  7%
                                </span>
                                <div className='relative w-full'>
                                  <div className='w-full bg-gray-200 rounded-sm h-2'>
                                    <div
                                      className='bg-purple-500 h-2 rounded-sm'
                                      style={{ width: '7%' }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className='bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4'>
              <ul className='flex items-center flex-wrap mb-6 md:mb-0'>
                <li>
                  <a
                    href='#'
                    className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
                  >
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
                  >
                    Licensing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6'
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm font-normal text-gray-500 hover:underline'
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className='flex sm:justify-center space-x-6'>
                <a href='#' className='text-gray-500 hover:text-gray-900'>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-900'>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-900'>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-900'>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a href='#' className='text-gray-500 hover:text-gray-900'>
                  <svg
                    className='h-5 w-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </footer>
            <p className='text-center text-sm text-gray-500 my-10'>
              &copy; 2019-2021{' '}
              <a href='#' className='hover:underline' target='_blank'>
                Themesberg
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
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
