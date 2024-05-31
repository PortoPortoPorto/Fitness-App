import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const DataAverages = ({strengthObject, cardioObject, sessionObject, days}) => {
	const { currentDataCat, dateRange } = useContext(GlobalContext); 

	const divClass = 'h-[80px] w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'; 

	return (
		<>
		  { currentDataCat > 2 ? 
		  	 (<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
				<h1 className='p-2 text-lg font-semibold'>AVERAGES</h1>	
					{ sessionObject.Yoga > 0 ? <div className={divClass}> Yoga:{Math.round(sessionObject.Yoga / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
					{ sessionObject.Pilates > 0 ? <div className={divClass}>Pilates : {Math.round(sessionObject.Pilates / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
					{ sessionObject.Spin > 0 ? <div className={divClass} >Spin: {Math.round(sessionObject.Spin / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
					{ sessionObject.Zumba> 0 ? <div className={divClass}>ZUMBA: {Math.round(sessionObject.Zumba/ days)}<span className='text-base p-1'>mins per day</span></div> : ''}
					{ sessionObject.Boxing > 0 ? <div className={divClass}>Boxing: {Math.round(sessionObject.Boxing / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
			  	</div>)
		  	:
		    currentDataCat > 1 ?	 
			  	(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
				<h1 className='p-2 text-lg font-semibold'>AVERAGES</h1>	
					{ strengthObject.Pushups > 0 ? <div className={divClass}> Pushups: {Math.round(strengthObject.Pushups / days)}<span className='text-base p-1'>per day</span></div> : ''}
					{ strengthObject.Squats > 0 ? <div className={divClass}>Squats : {Math.round(strengthObject.Squats / days)}<span className='text-base p-1'>per day</span></div> : ''}
					{ strengthObject.Lunges > 0 ? <div className={divClass}>Lunges: {Math.round(strengthObject.Lunges / days)}<span className='text-base p-1'>per day</span></div> : ''}
					{ strengthObject.Presses > 0 ? <div className={divClass}>Presses: {Math.round(strengthObject.Presses / days)}<span className='text-base p-1'>per day</span></div> : ''}
					{ strengthObject.Curls > 0 ? <div className={divClass}>Curls: {Math.round(strengthObject.Curls / days)}<span className='text-base p-1'>per day</span></div> : ''}
			  	</div>)
			:   
				(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
					<h1 className='p-2 text-lg font-semibold'>DAILY AVERAGES</h1>	
					{ cardioObject.Running > 0 ? <div className={divClass}>Running: {Math.round(cardioObject.Running / days)}<span className='text-base p-1'>km</span></div> : ''}
					{ cardioObject.Swimming > 0 ? <div className={divClass}>Swimming : {Math.round(cardioObject.Swimming / days)}<span className='text-base p-1'>km</span></div> : ''}
					{ cardioObject.Cycling > 0 ? <div className={divClass}>Cycling: {Math.round(cardioObject.Cycling / days)}<span className='text-base p-1'>km</span></div> : ''}
					{ cardioObject.Rope> 0 ? <div className={divClass}>Rope : {Math.round(cardioObject.Rope / days)}<span className='text-base p-1'>km</span></div> : ''}
					{ cardioObject.Walking > 0 ? <div className={divClass}>Walking: {Math.round(cardioObject.Walking / days)}<span className='text-base p-1'>km</span></div> : ''}
			  </div>)}
		</>
	)
}

export default DataAverages