import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const DataTotals = ({strengthObject, cardioObject, sessionObject}) => {
	const {  currentDataCat } = useContext(GlobalContext); 

	const divClass = 'h-[80px] w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'; 

	return (
		<>
		  { currentDataCat > 2 ? 
		  	 (<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
				<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
					{ sessionObject.Yoga > 0 ? <div className={divClass}> Yoga: {sessionObject.Yoga} mins</div> : ''}
					{ sessionObject.Pilates > 0 ? <div className={divClass}>Pilates : {sessionObject.Pilates} mins</div> : ''}
					{ sessionObject.Spin > 0 ? <div className={divClass} >Spin: {sessionObject.Spin} mins</div> : ''}
					{ sessionObject.Zumba > 0 ? <div className={divClass}>Zumba: {sessionObject.Zumba} mins</div> : ''}
					{ sessionObject.Boxing > 0 ? <div className={divClass}>Boxing: {sessionObject.Boxing} mins</div> : ''}
			  	</div>)
		  	:
		    currentDataCat > 1 ?	 
			  	(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
				<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
					{ strengthObject.Pushups > 0 ? <div className={divClass}> Pushups: {strengthObject.Pushups}</div> : ''}
					{ strengthObject.Squats > 0 ? <div className={divClass}>Squats : {strengthObject.Squats}</div> : ''}
					{ strengthObject.Lunges > 0 ? <div className={divClass}>Lunges: {strengthObject.Lunges}</div> : ''}
					{ strengthObject.Presses > 0 ? <div className={divClass}>Presses: {strengthObject.Presses}</div> : ''}
					{ strengthObject.Curls > 0 ? <div className={divClass}>Curls: {strengthObject.Curls}</div> : ''}
			  	</div>)
			:   
				(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
					<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
					{ cardioObject.Running > 0 ? <div className={divClass}>Running: {cardioObject.Running} km</div> : ''}
					{ cardioObject.Swimming > 0 ? <div className={divClass}>Swimming : {cardioObject.Swimming} km</div> : ''}
					{ cardioObject.Cycling > 0 ? <div className={divClass}>Cycling: {cardioObject.Cycling} km</div> : ''}
					{ cardioObject.Rope > 0 ? <div className={divClass}>Rope : {cardioObject.Rope} mins</div> : ''}
					{ cardioObject.Walking > 0 ? <div className={divClass}>Walking: {cardioObject.Walking} km</div> : ''}
			  </div>)}
		</>
	)
}

export default DataTotals