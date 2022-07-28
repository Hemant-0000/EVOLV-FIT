import React from 'react'
import Image from 'next/image'
import steps from '../public/assets/steps.svg'
import nutrition from '../public/assets/nutrition.svg'
import { BiDumbbell } from 'react-icons/bi'
import 'react-circular-progressbar/dist/styles.css';
import { allData } from '../data/data'
import Row from './Row'


const MainContainer = () => {

    return (
        <div className='flex justify-center font-Mont'>
            <div className='h-[501px] w-full mx-10 bg-[#101317] rounded-[16px] mt-[90px] relative ' >

                {/* Steps  */}
                <div className='absolute top-[22px] 2xl:right-[600px] flex md:right-[380px] lg:right-[520px] '>
                    <div><Image src={steps} alt='steps' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Steps</p>
                </div>

                {/* Workout  */}
                <div className='absolute top-[22px] 2xl:right-[400px] flex md:right-[230px] lg:right-[320px] '>
                    <div><BiDumbbell className='text-white w-[23px] h-[23px] -rotate-45' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Workout</p>
                </div>

                {/* Nutrition  */}
                <div className='absolute top-[22px] 2xl:right-[200px] flex md:right-[80px] lg:right-[140px] '>
                    <div><Image src={nutrition} alt='steps' /></div>
                    <p className='ml-[11.15px] text-white font-[700] text-[18px] leading-[22px]  '>Nutrition</p>
                </div>

                {/* Rows  */}
                <div className='relative pb-[150px] h-[430px] top-[65px] mx-[15px] scrollbar-thin scrollbar-thumb-slate-700 scroll-smooth overflow-y-scroll overflow-x-hidden '>
                    {/* Mapping is held here  */}
                    {allData.map(({ id, userImage, username, email, stepsWalked, stepsTarget, performedDate, scheduledDate, calories, caloriesTarget, protein, fats, carbs, dataMock, feedback }) => {
                        return <Row key={id} id={id} userImage={userImage} username={username} email={email} stepsWalked={stepsWalked} stepsTarget={stepsTarget} performedDate={performedDate} scheduledDate={scheduledDate} calories={calories} caloriesTarget={caloriesTarget} protein={protein} fats={fats} carbs={carbs} dataMock={dataMock} feedback={feedback} />
                    })}
                </div>

            </div>
        </div>
    )
}

export default MainContainer