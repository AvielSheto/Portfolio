import React from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <div className='absolute xs:top-4 bottom-30 w-full flex justify-center items-center '>
        <img style={{ width: "60px" }} src="https://icon-library.com/images/360-degree-icon/360-degree-icon-14.jpg" alt="" />
      </div>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "") 