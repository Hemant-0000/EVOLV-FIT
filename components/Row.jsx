import React, { useState } from 'react'
import date_icon from '../public/assets/date.svg'
import bell from '../public/assets/bell.svg'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { TbCalendarTime } from 'react-icons/tb'
import { AiOutlineExclamation } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { Progress } from '@mantine/core';
import { PieChart } from 'react-minimal-pie-chart';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Image from 'next/image'
import Link from 'next/link'

const Row = ({ id, userImage, username, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calories, caloriesTarget, protein, fats, carbs, dataMock, feedback }) => {

    const [nutritionData, setNutritionData] = useState(false)
    const [stepTarget, setStepTarget] = useState(stepsTarget)
    const [calorieTarget, setCalorieTarget] = useState(caloriesTarget)

    const date = new Date()

    const findMonth = (month) => {
        switch (month) {
            case 1:
                return "Jan"
                break;

            case 2:
                return "Feb"
                break;

            case 3:
                return "Mar"
                break;

            case 4:
                return "Apr"
                break;

            case 5:
                return "May"
                break;

            case 6:
                return "June"
                break;

            case 7:
                return "July"
                break;

            case 8:
                return "Aug"
                break;

            case 9:
                return "Sept"
                break;

            case 10:
                return "Oct"
                break;

            case 11:
                return "Nav"
                break;

            case 12:
                return "Dec"
                break;

            default:
                break;
        }
    }

    const currentDate = date.getDate() + " " + findMonth(date.getMonth() + 1)

    return (
        <div key={id} className='bg-[#1E262F] mb-4 w-full h-[80px] rounded-[10px] relative ' >

            {/* User Profile  */}
            <div className='absolute lg:left-[11px] top-[18px] md:left-[4px] flex items-center'>
                <div className='w-[40px] h-[40px] mr-[18.4px] '><img className='rounded-full' src={userImage} alt='userimage' /></div>
                <div className='absolute md:left-[45px] lg:static'>
                    <p className=' text-white font-[500] text-[14px] leading-[17px] mb-[1px] '>{username}</p>
                    <p className='text-[#BDBCBE] font-[500] text-[10px] leading-[12px]  '>{email}</p>
                </div>
            </div>

            {/* Steps  */}
            <div className='steps grelative top-[5px] 2xl:left-[750px] flex md:left-[210px] lg:left-[330px] xl:left-[580px] '>
                <div className='w-[60px] h-[60px] absolute top-[8px]'>
                    <CircularProgressbarWithChildren maxValue={stepTarget} value={stepsWalked} styles={buildStyles({
                        strokeLinecap: "butt",
                        textColor: "#BDBCBE",
                        pathColor: "#7FD18C",
                    })}>
                        <p className='font-Mont font-[700] text-[12px] leading-[15px] text-white '>{stepsWalked}</p>
                        <p className='text-[#BDBCBE] font-Mont font-[500] text-[8px] leading-[10px]'>Walked</p>
                    </CircularProgressbarWithChildren>
                </div>
                <div className='absolute left-[74px] '>
                    <button onClick={() => { setStepTarget(stepTarget + 500) }} className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>{(stepTarget / 1000)}k</p>
                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                    <button onClick={() => { setStepTarget(stepTarget - 500) }} className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                </div>
            </div>

            {/* Workout  */}
            <div className='relative 2xl:left-[930px] flex md:left-[330px] lg:left-[500px] xl:left-[760px] '>
                <div className='absolute top-[14px] space-y-[8px]'>
                    <div className='flex'>
                        <div className='ml-[3px]'><Image src={date_icon} alt='' /></div>
                        <p className='absolute left-[33px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[50px]'>{performedDate}</p>
                    </div>
                    <div className={`flex absolute top-[20px] left-[-9px] w-[99px] h-[30px] rounded-[8px] pt-[3.62px] pl-[9.25px] pr-[6px] ${currentDate === scheduledDate && 'bg-[#CC3838]'} `}>
                        <div><TbCalendarTime size={20} className='text-white ' /></div>
                        <p className='absolute left-[42px] font-Mont font-[600] text-[14px] leading-[17px] text-white w-[50px]'>{scheduledDate}</p>
                    </div>
                </div>
                <Link href={`/workout/${id}`}>
                    <div className='absolute left-[80px] '>
                        {
                            feedback ? <button className='bg-[#CC3838] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><AiOutlineExclamation /></button>
                                : <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[10px] left-[18px]'><IoIosArrowForward /></button>
                        }

                    </div>
                </Link>
            </div>

            {/* Nutrition  */}
            <div className='relative top-[5px] 2xl:left-[1110px] flex md:left-[460px] lg:left-[660px] xl:left-[920px] '>
                <div onMouseOver={() => setNutritionData(true)} onMouseLeave={() => setNutritionData(false)} className='w-[70px] h-[70px] absolute top-[2px] cursor-pointer '>
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
                        animate
                        labelStyle={{
                            fill: '#fff',
                            opacity: 0.75,
                            pointerEvents: 'none',
                        }}
                    />
                    <p className='cursor-pointer font-Mont absolute top-[24px] left-[21px] font-[700] text-[12px] leading-[15px] text-white '>{calories}</p>
                    <p className='cursor-pointer text-[#BDBCBE] absolute top-[36px] left-[19px] font-Mont font-[500] text-[8px] leading-[10px]'>calories</p>
                </div>
                {nutritionData &&
                    <>
                        <div className="absolute top-[60px] left-[25px]">
                            <div className="w-[15px] h-[15px] border-l-[10px] border-l-transparent border-b-[10px] border-b-[#333B44] border-r-[10px] border-r-transparent">
                            </div>
                        </div>
                        <div className='w-[208px] h-[165px] rounded-[10px] z-50 absolute top-[75px] left-[-70px] text-white bg-[#333B44] '>
                            {/* protein  */}
                            <div className='w-[196.1px] h-[38.9px] bg-[#1B222A] absolute top-[13px] left-[5px] rounded-[4.86px] ' >
                                <p className='absolute top-[4.86px] left-[8.91px] font-[500] text-white text-[10px] leading-[13px] font-Mont '>PROTEIN</p>
                                <p className='absolute top-[4.86px] right-[8.17px] font-[500] text-white text-[10px] leading-[13px] font-Mont '>70g</p>
                                <Progress mt={23.5} ml={8.91} mr={8.1} value={protein} color="#F45C84" label={`${protein}g`} size="md" radius="xl" />
                            </div>
                            {/* fats  */}
                            <div className='w-[196.1px] h-[38.9px] bg-[#1B222A] absolute top-[64.05px] left-[5px] rounded-[4.86px] ' >
                                <p className='absolute top-[4.86px] left-[8.91px] font-[500] text-white text-[10px] leading-[13px] font-Mont '>FATS</p>
                                <p className='absolute top-[4.86px] right-[8.17px] font-[500] text-white text-[10px] leading-[13px] font-Mont '>70g</p>
                                <Progress mt={23.5} ml={8.91} mr={8.1} value={fats} color="#03C6FA" label={`${fats}g`} size="md" radius="xl" />
                            </div>
                            {/* carbs  */}
                            <div className='w-[196.1px] h-[38.9px] bg-[#1B222A] absolute top-[111.1px] left-[5px] rounded-[4.86px] ' >
                                <p className='absolute top-[4.86px] left-[8.91px] font-[500] text-white text-[10px] leading-[13px] font-Mont '>CARBS</p>
                                <p className='absolute top-[4.86px] right-[8.17px] font-[500] text-white text-[10px] leading-[13px] font-Mont '>70g</p>
                                <Progress mt={23.5} ml={8.91} mr={8.1} value={carbs} color="#F0C50F" label={`${carbs}g`} size="md" radius="xl" />
                            </div>
                        </div>
                    </>
                }
                <div className='absolute left-[74px] '>
                    <button onClick={() => setCalorieTarget(calorieTarget + 100)} className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute left-[2px]'><FiPlus className='h-[10px] w-[10px]' /></button>
                    <p className='font-[700] text-[16px] leading-[20px] font-Mont text-white  absolute top-[21px] left-[4px]'>{calorieTarget / 1000}k</p>
                    <p className='font-[500] text-[10px] leading-[12px] text-[#BDBCBE] font-Mont absolute top-[37px] ' >target</p>
                    <button onClick={() => setCalorieTarget(calorieTarget - 100)} className='bg-[#101317] px-[8px] py-[2px] rounded-[4px] text-white font-[700] absolute top-[57px] left-[2px]'><FiMinus className='h-[10px] w-[10px]' /></button>
                </div>
                <Link href={`/nutrition/${id}`}>
                    <div className='absolute left-[74px] '>
                        <button className='bg-[#101317] px-[7px] py-[22.93px] rounded-[8px] text-white font-[700] absolute top-[4px] left-[50px]'><IoIosArrowForward /></button>
                    </div>
                </Link>
            </div>

            {/* Notifications */}
            <div className='absolute 2xl:left-[1350px] top-[20px] md:left-[620px] lg:left-[850px] xl:left-[1100px] '>
                <div className=' bg-[#36F5C7] lg:pt-[10px] lg:pb-[5px] lg:pl-[10.12px] lg:pr-[11.12px] rounded-[8px] md:p-[5px] md:pb-[2px] '><Image width={20} height={20} src={bell} alt='' /></div>
            </div>
        </div>
    )
}

export default Row