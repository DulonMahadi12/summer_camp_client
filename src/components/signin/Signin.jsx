import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='min-w-screen min-h-screen w-full py-10 bg-[#FFFBEE] flex justify-center items-center'>
      <div
        className='bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden'
        style={{ maxWidth: '1000px' }}
      >
        <div className='md:flex w-full'>
          <div className='hidden md:block w-1/2 bg-indigo-500 '>
            <img
              src='https://images.unsplash.com/photo-1570498839593-e565b39455fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1366&q=80'
              alt=''
            />
          </div>
          <div className='w-full md:w-1/2 py-10 px-8 bg-[#FFFBEE] md:px-10'>
            <div className='text-center mb-5'>
              <h1 className='font-bold text-3xl text-gray-900 uppercase'>
                sign in
              </h1>
              <p className='capitalize'>sign in, for accept your identity</p>
            </div>
            <div className='w-full mb-10 flex flex-row gap-3 items-center justify-center'>
              <button>
                <p className='bg-[#FFC000] border border-slate-800 w-10 h-10 hover:bg-slate-700 hover:text-white flex items-center justify-center text-black rounded-full'>
                  <FaGoogle></FaGoogle>
                </p>
              </button>

              <button>
                <p className='bg-[#FFC000] border border-slate-800 w-10 h-10 hover:bg-slate-700 hover:text-white flex items-center justify-center text-black rounded-full'>
                  <FaGithub></FaGithub>
                </p>
              </button>

              <button>
                <p className='bg-[#FFC000] border border-slate-800 w-10 h-10 hover:bg-slate-700 hover:text-white flex items-center justify-center text-black rounded-full'>
                  <FaFacebook></FaFacebook>
                </p>
              </button>
            </div>
            <hr className='px-10 mb-5' />
            <div>
              {/* input  */}
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label htmlFor='email' className='text-sm px-1'>
                    Email
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-email-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      id='email'
                      type='email'
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                      placeholder='example@gmail.com'
                    />
                  </div>
                </div>
              </div>
              {/* input  */}
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label htmlFor='password' className='text-sm px-1'>
                    Password
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      id='password'
                      type='password'
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                      placeholder='password'
                    />
                  </div>
                </div>
              </div>
              {/* button  */}
              <div className=''>
                <div className=''>
                  <button className='uppercase w-full mx-auto bg-[#FFC000] duration-500 hover:bg-[#12B76A] text-white rounded-lg px-6 py-2 font-semibold'>
                    sign in
                  </button>
                </div>
              </div>
              <p className='mb-0 capitalize mt-2 pt-1 text-sm font-semibold'>
                Don{"'"}t have an account?
                <Link
                  to={'/signup'}
                  className='text-[#F04438] ms-1 underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 capitalize'
                >
                  sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
