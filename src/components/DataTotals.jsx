import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const DataTotals = ({strengthObject, cardioObject, sessionObject}) => {
	const {  currentDataCat } = useContext(GlobalContext); 

	console.log(currentDataCat);
	console.log(strengthObject);

	const divClass = 'h-[80px] w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'; 

	return (
		<>
		  { currentDataCat > 2 ? 
		  	 (<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
				<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
					{ sessionObject.yoga > 0 ? <div className={divClass}> YOGA: {sessionObject.yoga} mins</div> : ''}
					{ sessionObject.pilates > 0 ? <div className={divClass}>PILATES : {sessionObject.pilates} mins</div> : ''}
					{ sessionObject.spin > 0 ? <div className={divClass} >SPIN: {sessionObject.spin} mins</div> : ''}
					{ sessionObject.zumba > 0 ? <div className={divClass}>ZUMBA: {sessionObject.zumba} mins</div> : ''}
					{ sessionObject.boxing > 0 ? <div className={divClass}>BOXING: {sessionObject.boxing} mins</div> : ''}
			  	</div>)
		  	:
		    currentDataCat > 1 ?	 
			  	(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
				<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
					{ strengthObject.pushups > 0 ? <div className={divClass}> PUSHUPS: {strengthObject.pushups}</div> : ''}
					{ strengthObject.squats > 0 ? <div className={divClass}>SQUATS : {strengthObject.squats}</div> : ''}
					{ strengthObject.lunges > 0 ? <div className={divClass}>LUNGES: {strengthObject.lunges}</div> : ''}
					{ strengthObject.presses > 0 ? <div className={divClass}>PRESSES: {strengthObject.presses}</div> : ''}
					{ strengthObject.curls > 0 ? <div className={divClass}>CURLS: {strengthObject.curls}</div> : ''}
			  	</div>)
			:   
				(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
					<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
					{ cardioObject.running > 0 ? <div className={divClass}>RUNNING: {cardioObject.running} km</div> : ''}
					{ cardioObject.swimming > 0 ? <div className={divClass}>SWIMMING : {cardioObject.swimming} km</div> : ''}
					{ cardioObject.cycling > 0 ? <div className={divClass}>CYCLING: {cardioObject.cycling} km</div> : ''}
					{ cardioObject.rope> 0 ? <div className={divClass}>ROPE : {cardioObject.rope} mins</div> : ''}
					{ cardioObject.walking > 0 ? <div className={divClass}>WALKING: {cardioObject.walking} km</div> : ''}
			  </div>)}
		</>
	)
}

export default DataTotals