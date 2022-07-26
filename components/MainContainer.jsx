import React from 'react'
import Image from 'next/image'
import steps from '../public/assets/steps.svg'
import nutrition from '../public/assets/nutrition.svg'
import userimage from '../public/assets/userimage.svg'
import date from '../public/assets/date.svg'
import { BiDumbbell } from 'react-icons/bi'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const MainContainer = () => {
    return (
        <div className='flex justify-center font-Mont'>
            <div className='h-[501px] w-full mx-10 bg-[#101317] rounded-[16px] mt-[90px] relative ' >

                {/* Steps  */}
                <div className='absolute top-[22px] right-[542px] flex'>
                    <div><Image src={steps} alt='steps' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Steps</p>
                </div>

                {/* Workout  */}
                <div className='absolute top-[22px] right-[351px] flex'>
                    <div><BiDumbbell className='text-white w-[23px] h-[23px] -rotate-45' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Workout</p>
                </div>

                {/* Nutrition  */}
                <div className='absolute top-[22px] right-[140px] flex'>
                    <div><Image src={nutrition} alt='steps' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Nutrition</p>
                </div>

                {/* Rows  */}
                <div className='relative top-[65px] mx-[15px] ' >
                    {/* Will do mapping later here  */}
                    <div className='bg-[#1E262F] w-full h-[80px] rounded-[10px] ' >
                        {/* User Profile  */}
                        <div className='absolute left-[11px] top-[18px] flex items-center'>
                            <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                            <div>
                                <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                            </div>
                        </div>

                        {/* Steps  */}
                        <div className='relative top-[5px] left-[310px] flex'>
                            <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                <CircularProgressbarWithChildren value={2547/40} styles={buildStyles({
                                    strokeLinecap: "butt",
                                    textColor: "#BDBCBE",
                                    pathColor: "#7FD18C",
                                })}>
                                    <p className='font-Mont font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] font-Mont font-[500] text-[8px] leading-[10px]'>Walked</p>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className='absolute left-[74px] '>
                                {/* <div className=''><Image src={plus} alt=''/></div> */}
                                <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>4k</p>
                                <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                            </div>
                        </div>

                        {/* Workout  */}
                        {/* <div className='relative left-[468px] flex'>
                            <div className='absolute top-[14px]'>
                                <div><Image src={date} alt='' /></div>
                            </div>
                            <div className='absolute left-[74px] '>
                                <div className=''><Image src={plus} alt=''/></div>
                                <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>4k</p>
                                <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                            </div>
                        </div> */}
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainContainer