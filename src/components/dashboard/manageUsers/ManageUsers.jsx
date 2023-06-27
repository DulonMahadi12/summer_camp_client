import { Link } from 'react-router-dom';

const ManageUsers = () => {
  return (
    <div className='h-full'>
      <div className='w-9/12 bg-white shadow-lg rounded-sm border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <h2 className='font-bold text-xl text-gray-800 capitalize'>
            courses
          </h2>
        </header>
        <div className='p-3'>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead className='text-sm font-semibold uppercase text-gray-500 bg-[#FFF2CC]'>
                <tr>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>user info</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>user phone</div>
                  </th>

                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>user role</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-center'>change role</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                <tr>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <img
                        className='rounded-full items-start flex-shrink-0 mr-3'
                        src='https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg'
                        width='50'
                        height='50'
                        alt='instructor image'
                      />
                      <div>
                        <h4 className='text-sm font-semibold text-gray-900'>
                          instructor-name
                        </h4>
                        <div className='text-[13px]'>instructor-email</div>
                      </div>
                    </div>
                  </td>

                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left font-medium text-green-500'>
                      +21546-258
                    </div>
                  </td>

                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-left font-medium text-green-500'>
                      {/* TODO: when user role is comming conditionals change it status change to approved  */}
                      <span className='rounded-full w-32 h-6 py-0.5 duration-700 font-bold text-xs px-3 text-white capitalize bg-[#08854b]'>
                        admin
                      </span>
                      {/* approved span do not remove this */}
                      {/* <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-white capitalize bg-[#2a0cb3]'>
                        instructor
                      </span>
                      //
                      <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-white capitalize bg-[#5B6061]'>
                        basic
                      </span> */}
                    </div>
                  </td>
                  <td className='p-2 whitespace-nowrap'>
                    <div className='text-lg text-center text-yellow-500'>
                      <Link to={''}>
                        <button className=' rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#12B76A] hover:bg-[#0c884e] hover:text-white'>
                          admin permission
                        </button>
                      </Link>
                      {/* change it conditonaly toggled button  */}
                      {/* <Link to={''}>
                        <button className=' ms-2 rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#9a88e9] hover:bg-[#2a0cb3] hover:text-white'>
                          instructor permission
                        </button>
                      </Link> */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
