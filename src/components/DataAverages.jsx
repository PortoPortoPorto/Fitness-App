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
					{ sessionObject.yoga > 0 ? <div className={divClass}> YOGA: {Math.round(sessionObject.yoga / days)} mins per day</div> : ''}
					{ sessionObject.pilates > 0 ? <div className={divClass}>PILATES : {Math.round(sessionObject.pilates / days)} mins per day</div> : ''}
					{ sessionObject.spin > 0 ? <div className={divClass} >SPIN: {Math.round(sessionObject.spin / days)} mins per day</div> : ''}
					{ sessionObject.zumba > 0 ? <div className={divClass}>ZUMBA: {Math.round(sessionObject.zumba / days)} mins per day</div> : ''}
					{ sessionObject.boxing > 0 ? <div className={divClass}>BOXING: {Math.round(sessionObject.boxing / days)} mins per day</div> : ''}
			  	</div>)
		  	:
		    currentDataCat > 1 ?	 
			  	(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
				<h1 className='p-2 text-lg font-semibold'>AVERAGES</h1>	
					{ strengthObject.pushups > 0 ? <div className={divClass}> PUSHUPS: {Math.round(strengthObject.pushups / days)} per day</div> : ''}
					{ strengthObject.squats > 0 ? <div className={divClass}>SQUATS : {Math.round(strengthObject.squats / days)} per day</div> : ''}
					{ strengthObject.lunges > 0 ? <div className={divClass}>LUNGES: {Math.round(strengthObject.lunges / days)} per day</div> : ''}
					{ strengthObject.presses > 0 ? <div className={divClass}>PRESSES: {Math.round(strengthObject.presses / days)} per day</div> : ''}
					{ strengthObject.curls > 0 ? <div className={divClass}>CURLS: {Math.round(strengthObject.curls / days)} per day</div> : ''}
			  	</div>)
			:   
				(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
					<h1 className='p-2 text-lg font-semibold'>AVERAGES</h1>	
					{ cardioObject.running > 0 ? <div className={divClass}>RUNNING: {Math.round(cardioObject.running / days)} km / day</div> : ''}
					{ cardioObject.swimming > 0 ? <div className={divClass}>SWIMMING : {Math.round(cardioObject.swimming / days)} km / day</div> : ''}
					{ cardioObject.cycling > 0 ? <div className={divClass}>CYCLING: {Math.round(cardioObject.cycling / days)} km / day</div> : ''}
					{ cardioObject.rope> 0 ? <div className={divClass}>ROPE : {Math.round(cardioObject.rope / days)} mins / day</div> : ''}
					{ cardioObject.walking > 0 ? <div className={divClass}>WALKING: {Math.round(cardioObject.walking / days)} km / day</div> : ''}
			  </div>)}
		</>
	)
}

export default DataAverages