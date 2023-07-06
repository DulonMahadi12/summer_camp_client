import useAdminApproved from '../../../../hooks/useAdminApproved';

const CourseRow = ({ course }) => {
  const [approvedCourse] = useAdminApproved();

  const handleApproveCourse = (id, courseStatus) => {
    approvedCourse(id, courseStatus);
  };

  return (
    <>
      <tr>
        <td className='p-2 whitespace-nowrapz'>
          <div className='flex items-center'>
            <img
              className='rounded-lg items-start w-36 h-20 flex-shrink-0 mr-3'
              src={course?.courseImage}
              // width='200'
              // height='30'
              alt='instructor image'
            />
          </div>
        </td>
        <td className='p-2 whitespace-nowrapz'>
          <span className='flex items-center'>
            <div className='w-12 h-12 overflow-hidden rounded-full mr-2 border border-[#FFC000]'>
              <img
                className='rounded-full w-14'
                src={course?.instructor_image}
                alt={course?.instructor_image}
              />
            </div>
            <div>
              <h4 className='text-sm font-semibold text-gray-900'>
                {course?.instructor_name}
              </h4>
              <div className='text-[13px]'>{course?.instructor_email}</div>
            </div>
          </span>
        </td>

        <td className='p-2 whitespace-nowrap'>
          <span className='text-left text-sm'>{course?.courseName}</span>
        </td>
        <td className='p-2 whitespace-nowrap'>
          <span className='text-left text-sm'>{course?.courseSets}</span>
        </td>
        <td className='p-2 whitespace-nowrap'>
          <span className='text-left font-medium text-green-500'>
            ${course?.coursePrice}
          </span>
        </td>
        <td className='p-2 whitespace-nowrap'>
          <div className='text-left font-medium text-green-500'>
            {course?.course_status === 'pending' ? (
              <>
                <span className='rounded-full w-32 h-6 animate-pulse py-0.5 duration-700 font-bold text-xs px-3 text-[#2b2b2b] capitalize bg-[#FFC000]'>
                  pending...
                </span>
              </>
            ) : course?.course_status === 'approved' ? (
              <>
                <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-[#2b2b2b] capitalize bg-[#12B76A]'>
                  approved
                </span>
              </>
            ) : course?.course_status === 'denied' ? (
              <>
                <span className='rounded-full w-32 h-6 duration-700 py-0.5 font-bold text-xs px-3 text-[#2b2b2b] capitalize bg-[#F04438]'>
                  denied
                </span>{' '}
              </>
            ) : (
              <></>
            )}
          </div>
        </td>
        <td
          className={`${
            course?.course_status !== 'pending' && 'hidden'
          } p-2 whitespace-nowrap`}
        >
          <div className='text-lg text-center text-yellow-500'>
            <button
              onClick={() => handleApproveCourse(course?._id, 'approved')}
              className={`${
                course?.course_status !== 'pending' && 'hidden'
              } rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#12B76A] hover:bg-[#0c884e] hover:text-white`}
            >
              approve
            </button>

            <button
              onClick={() => handleApproveCourse(course?._id, 'denied')}
              className={`${
                course?.course_status !== 'pending' && 'hidden'
              } ms-2 rounded-lg h-6 duration-200 font-bold text-xs px-2 text-[#2b2b2b] capitalize bg-[#F04438] hover:bg-[#c7170b] hover:text-white`}
            >
              deny
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CourseRow;
