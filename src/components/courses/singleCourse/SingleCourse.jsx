const SingleCourse = ({ data }) => {
  // console.log(data);
  return (
    <div>
      {/* card-1  */}
      <div className='p-4 md:w-3/3'>
        <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
          <img
            className='lg:h-48 md:h-36 w-full object-cover object-center'
            src={data?.courseImage}
            alt='blog'
          />
          <div className='p-6'>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
              {data?.courseName}
            </h2>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
              {data?.courseTitle}
            </h1>
            <p className='leading-relaxed mb-3'>{data?.courseDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
