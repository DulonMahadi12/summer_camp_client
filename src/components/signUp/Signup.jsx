import { Link } from 'react-router-dom';
import { FaPaperclip } from 'react-icons/fa6';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const Signup = () => {
  return (
    <div className='min-w-screen min-h-screen w-full py-10 bg-[#FFFBEE] flex justify-center items-center'>
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
          <div className='w-full md:w-1/2 py-10 px-8 bg-[#FFFBEE] md:px-10'>
            <div className='text-center mb-5'>
              <h1 className='font-bold text-3xl text-gray-900 uppercase'>
                sign up now!
              </h1>
              <p className='capitalize'>sign up, enjoy your challenge.</p>
            </div>
            <div>
              {/* input user name first name and last name */}
              <div className='flex -mx-3'>
                <div className='w-1/2 px-3 mb-5'>
                  <label htmlFor='firstName' className='text-sm px-1'>
                    First name
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      id='firstName'
                      type='text'
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                      placeholder='first name'
                    />
                  </div>
                </div>
                {/* input  */}
                <div className='w-1/2 px-3 mb-5'>
                  <label htmlFor='lastName' className='text-sm px-1'>
                    Last name
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-account-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      id='lastName'
                      type='text'
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                      placeholder='last name'
                    />
                  </div>
                </div>
              </div>
              {/* input user photo url and contact  */}
              <div className='flex -mx-3'>
                <div className='w-1/2 px-3 mb-5'>
                  <label htmlFor='photoURL' className='text-sm px-1'>
                    photoURL
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <p>
                        <FaPaperclip></FaPaperclip>
                      </p>
                    </div>
                    <input
                      id='photoURL'
                      type='text'
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                      placeholder='image url'
                    />
                  </div>
                </div>
                {/* input  */}
                <div className='w-1/2 px-3 mb-5'>
                  <label htmlFor='contact' className='text-sm px-1'>
                    contact (phone)
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <IoPhonePortraitOutline></IoPhonePortraitOutline>
                    </div>
                    <input
                      id='contact'
                      type='text'
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                      placeholder='+008-12256'
                    />
                  </div>
                </div>
              </div>
              {/* input user email  */}
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

              {/* input user password  */}
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
              {/* input user confirm password */}
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label htmlFor='confirmPassword' className='text-sm px-1'>
                    Confirm Password
                  </label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                      <i className='mdi mdi-lock-outline text-gray-400 text-lg'></i>
                    </div>
                    <input
                      id='confirmPassword'
                      type='password'
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                      placeholder='confirm password'
                    />
                  </div>
                </div>
              </div>
              {/* button  */}
              <div className=''>
                <div className=''>
                  <button className='uppercase w-full mx-auto bg-[#FFC000] duration-500 hover:bg-[#12B76A] text-white rounded-lg px-6 py-2 font-semibold'>
                    sign up
                  </button>
                </div>
              </div>
              <p className='mb-0 capitalize mt-2 pt-1 text-sm font-semibold'>
                already have an account?
                <Link
                  to={'/signin'}
                  className='text-[#12B76A] ms-1 underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 capitalize'
                >
                  sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;