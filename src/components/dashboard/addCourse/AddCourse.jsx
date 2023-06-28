import { Link } from 'react-router-dom';
import {
  FaChair,
  FaClock,
  FaImagePortrait,
  FaMoneyCheckDollar,
  FaOdnoklassniki,
  FaPaperclip,
  FaPen,
  FaPhone,
  FaSquarePollHorizontal,
} from 'react-icons/fa6';

const AddCourse = () => {
  return (
    <div className='w-full md:w-2/2 py-10 px-8 bg-[#FFFBEE] md:px-10'>
      <div className='text-center mb-5'>
        <h1 className='font-bold text-3xl underline text-gray-900 uppercase'>
          provide your course!
        </h1>
      </div>
      <div>
        {/* input user name first name and last name */}
        <div className='flex -mx-3'>
          <div className='w-1/2 px-3 mb-5'>
            <label htmlFor='courseName' className='text-sm px-1 capitalize'>
              course name
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaPen></FaPen>
                </p>
              </div>
              <input
                id='courseName'
                type='text'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='course name'
              />
            </div>
          </div>
          {/* input  */}
          <div className='w-1/2 px-3 mb-5'>
            <label htmlFor='courseTitle' className='text-sm px-1 capitalize'>
              course title
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaPen></FaPen>
                </p>
              </div>
              <input
                id='courseTitle'
                type='text'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='course title'
              />
            </div>
          </div>
        </div>
        {/* input user photo url and contact  */}
        <div className='flex -mx-3'>
          <div className='w-1/2 px-3 mb-5'>
            <label htmlFor='courseImage' className='text-sm px-1 capitalize'>
              course Image
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaPaperclip></FaPaperclip>
                </p>
              </div>
              <input
                id='courseImage'
                type='text'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='course image url'
              />
            </div>
          </div>
          {/* input  */}
          <div className='w-1/2 px-3 mb-5'>
            <label
              htmlFor='courseDescription'
              className='text-sm px-1 capitalize'
            >
              course Description
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaSquarePollHorizontal></FaSquarePollHorizontal>
                </p>
              </div>
              <input
                id='courseDescription'
                type='text'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='course description'
              />
            </div>
          </div>
        </div>
        {/* input user photo url and contact  */}
        <div className='flex -mx-3'>
          <div className='w-1/2 px-3 mb-5'>
            <label
              htmlFor='courseParticipate'
              className='text-sm px-1 capitalize'
            >
              course Participate age
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaOdnoklassniki></FaOdnoklassniki>
                </p>
              </div>
              <input
                id='courseParticipate'
                type='text'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='course participate age'
              />
            </div>
          </div>
          {/* input  */}
          <div className='w-1/2 px-3 mb-5'>
            <label htmlFor='courseTiming' className='text-sm px-1 capitalize'>
              course Timing
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaClock></FaClock>
                </p>
              </div>
              <input
                id='courseTiming'
                type='number'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='how many weeks'
              />
            </div>
          </div>
        </div>
        {/* input user photo url and contact  */}
        <div className='flex -mx-3'>
          <div className='w-1/2 px-3 mb-5'>
            <label htmlFor='courseSets' className='text-sm px-1 capitalize'>
              course sets
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaChair></FaChair>
                </p>
              </div>
              <input
                id='courseSets'
                type='number'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='course participate sets'
              />
            </div>
          </div>
          {/* input  */}
          <div className='w-1/2 px-3 mb-5'>
            <label htmlFor='coursePrice' className='text-sm px-1 capitalize'>
              course Price
            </label>
            <div className='flex'>
              <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                <p className='text-slate-500'>
                  <FaMoneyCheckDollar></FaMoneyCheckDollar>
                </p>
              </div>
              <input
                id='courseTiming'
                type='number'
                className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-yellow-200 outline-none focus:border-yellow-200'
                placeholder='course price'
              />
            </div>
          </div>
        </div>

        {/* button  */}
        <div className=''>
          <div className=''>
            <button className='uppercase w-full mx-auto bg-[#FFC000] duration-500 hover:bg-[#12B76A] text-white rounded-lg px-6 py-2 font-semibold'>
              add course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
