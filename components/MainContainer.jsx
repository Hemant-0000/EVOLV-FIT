import React from 'react'
import Image from 'next/image'
import steps from '../public/assets/steps.svg'
import nutrition from '../public/assets/nutrition.svg'
import userimage from '../public/assets/userimage.svg'
import date from '../public/assets/date.svg'
import bell from '../public/assets/bell.svg'
import { BiDumbbell } from 'react-icons/bi'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { TbCalendarTime } from 'react-icons/tb'
import { IoIosArrowForward } from 'react-icons/io'
import { PieChart } from 'react-minimal-pie-chart';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const MainContainer = () => {

    const dataMock = [
        { title: 'Protien', value: 45, color: '#F45C84' },
        { title: 'Fats', value: 30, color: '#03C6FA' },
        { title: 'carbs', value: 50, color: '#F0C50F' },
    ];
    const shiftSize = 7;

    return (
        <div className='flex justify-center font-Mont'>
            <div className='h-[501px] w-full mx-10 bg-[#101317] rounded-[16px] mt-[90px] relative ' >

                {/* Steps  */}
                <div className='absolute top-[22px] right-[590px] flex'>
                    <div><Image src={steps} alt='steps' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Steps</p>
                </div>

                {/* Workout  */}
                <div className='absolute top-[22px] right-[390px] flex'>
                    <div><BiDumbbell className='text-white w-[23px] h-[23px] -rotate-45' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Workout</p>
                </div>

                {/* Nutrition  */}
                <div className='absolute top-[22px] right-[190px] flex'>
                    <div><Image src={nutrition} alt='steps' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Nutrition</p>
                </div>

                {/* Rows  */}
                <div className='relative  h-[430px] top-[65px] mx-[15px] scrollbar-thin scrollbar-thumb-slate-700 scroll-smooth overflow-y-scroll overflow-x-hidden '>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                        {/* Will do mapping later here  */}
                        <div className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

                            {/* User Profile  */}
                            <div className='absolute left-[11px] top-[18px] flex items-center'>
                                <div className='mr-[18.32px]'><Image src={userimage} alt='userimage' /></div>
                                <div>
                                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>Charvie Sharma</p>
                                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>charviesharma.cs@gmail.com</p>
                                </div>
                            </div>

                            {/* Steps  */}
                            <div className='relative top-[5px] left-[750px] flex'>
                                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                                    <CircularProgressbarWithChildren value={2547 / 40} styles={buildStyles({
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
                            <div className='relative left-[930px] flex'>
                                <div className='absolute top-[14px] space-y-[8px]'>
                                    <div className='flex'>
                                        <div className='ml-[3px]'><Image src={date} alt='' /></div>
                                        <h1 className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>15 Oct</h1>
                                    </div>
                                    <div className='flex'>
                                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[45px]'>22 Oct</p>
                                    </div>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                                </div>
                            </div>

                            {/* Nutrition  */}
                            <div className='relative top-[5px] left-[1100px] flex'>
                                <div className='w-[70px] h-[70px] absolute top-[2px]'>
                                    <PieChart
                                        style={{
                                            fontFamily:
                                                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                                            fontSize: '8px',
                                        }}
                                        data={dataMock}
                                        radius={PieChart.defaultProps.radius - 6}
                                        lineWidth={30}
                                        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                                        segmentsShift={(index) => (index === shiftSize ? 6 : 1)}
                                        animate
                                        labelPosition={100 - shiftSize / 2}
                                        labelStyle={{
                                            fill: '#fff',
                                            opacity: 0.75,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                    <p className='font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>2547</p>
                                    <p className='text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>2.5k</p>
                                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                                    <button className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                                </div>
                                <div className='absolute left-[74px] '>
                                    <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                                </div>

                            </div>

                            {/* Notifications */}
                            <div className='absolute left-[1350px] top-[20px] '>
                                <div className=' bg-[#36F5C7] pt-[10px] pb-[5px] pl-[10.12px] pr-[11.12px] rounded-[8px]  '><Image width={20} height={20} src={bell} alt='' /></div>
                            </div>


                        </div>
                </div>

            </div>
        </div>
    )
}

export default MainContainer