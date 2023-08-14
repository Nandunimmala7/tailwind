import React from 'react';

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-4 border border-black'>
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://rukminim1.flixcart.com/image/612/612/xif7klw2/kurta/j/a/r/1-poch521835-peter-england-original-imag7jg47g7chg3-bb.jpeg?q=79"
         alt="Image Alt Text" />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>nofilter</h3>
        <p className='mt-2 text-sm text-gray-500'>men solid pure cotton</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
