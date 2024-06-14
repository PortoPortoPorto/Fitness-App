import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { BarChart, Bar, ResponsiveContainer, Tooltip, YAxis, XAxis } from 'recharts';  

const DataTotals = ({strengthObject, cardioObject, sessionObject}) => {
	const {  currentDataCat } = useContext(GlobalContext); 
	const [ chartDisplay, setChartDisplay ] = useState(false);
	const [ barChartArray, setBarChartArray ] = useState('');


	const toggleChartDisplay = () => {
	    createChartObjects(currentDataCat);
	    if(chartDisplay === false)setChartDisplay(true);
		else if(chartDisplay === true)setChartDisplay(false);
	}

//Push totals of all exercises in current category into chartData array, and set barChartArray with the result
	const createChartObjects = (currentDataCat) => {
			let chartData = [];
			let chartCategories = [];
			let chartObject = ''; 
//Set chartCategories and chartObject depending on the current data category
			if(currentDataCat === 1) {
				chartCategories = ['Running', 'Swimming', 'Cycling', 'JumpRope', 'Walking'];
				chartObject = cardioObject;		
			} else if(currentDataCat === 2) {
				chartCategories = ['Pushups', 'Squats', 'Lunges', 'Presses', 'Curls', 'Crunches'];
				chartObject = strengthObject;		
			} else if(currentDataCat === 3) {
				chartCategories = ['Yoga', 'Pilates', 'Spin', 'Zumba', 'Boxing'];
				chartObject = sessionObject;		
			}
					chartCategories.forEach((category) => {
						console.log(`chart category: ${category}`, chartObject[category]);
						if(chartObject[category] > 0) {
							let dataObject = {
									name: category,
									reps: chartObject[category][0]
							}
							chartData.push(dataObject)
						}
					});
					setBarChartArray(chartData);			
		}

	const CustomToolTip = ({ payload, label, active }) => {
		if(active) {
			return (
				<div className = 'h-[80px] w-[100px] bg-blue-300 rounded opacity-80'>
					<p className = 'flex items-center justify-center p-1 font-semibold'>{`${label}`}</p>
					<p className = 'flex items-center justify-center p-1 text-2xl'>{`${payload[0].value}`}</p>
				</div>
			);
		}
	}		
	

	const divClass = 'h-[80px] w-[320px] sm:w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold shadow-md'; 
	const buttonClass = 'btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300 hover:border-white'


	return (
		<>
		  {chartDisplay === false ? 

			  	currentDataCat > 2 ? 
			  	 (<div className='bg-blue-100 h-[500px] w-[350px] sm:w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center shadow-md'>
					<h1 className='p-2 text-lg font-semibold text-blue-400'>TOTALS</h1>	
						{ sessionObject.Yoga > 0 ? <div className={divClass}> Yoga: {sessionObject.Yoga}<span className='text-base p-1'>mins</span></div> : ''}
						{ sessionObject.Pilates > 0 ? <div className={divClass}>Pilates : {sessionObject.Pilates}<span className='text-base p-1'>mins</span></div> : ''}
						{ sessionObject.Spin > 0 ? <div className={divClass} >Spin: {sessionObject.Spin}<span className='text-base p-1'>mins</span></div> : ''}
						{ sessionObject.Zumba > 0 ? <div className={divClass}>Zumba: {sessionObject.Zumba}<span className='text-base p-1'>mins</span></div> : ''}
						{ sessionObject.Boxing > 0 ? <div className={divClass}>Boxing: {sessionObject.Boxing}<span className='text-base p-1'>mins</span></div> : ''}
						<button className={buttonClass} onClick={toggleChartDisplay}>Chart</button>
				  	</div>)
			  	:
			    currentDataCat > 1 ?	 
				  	(<div className='bg-blue-100 h-[500px] w-[350px] sm:w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center shadow-md'>
					<h1 className='p-2 text-lg font-semibold text-blue-400'>TOTALS</h1>	
						{ strengthObject.Pushups > 0 ? <div className={divClass}> Pushups: {strengthObject.Pushups}</div> : ''}
						{ strengthObject.Squats > 0 ? <div className={divClass}>Squats : {strengthObject.Squats}</div> : ''}
						{ strengthObject.Lunges > 0 ? <div className={divClass}>Lunges: {strengthObject.Lunges}</div> : ''}
						{ strengthObject.Presses > 0 ? <div className={divClass}>Presses: {strengthObject.Presses}</div> : ''}
						{ strengthObject.Curls > 0 ? <div className={divClass}>Curls: {strengthObject.Curls}</div> : ''}
						{ strengthObject.Crunches > 0 ? <div className={divClass}>Crunches: {strengthObject.Crunches}</div> : ''}
						<button className={buttonClass} onClick={toggleChartDisplay}>Chart</button>
				  	</div>)
				:   
					(<div className='bg-blue-100 h-[500px] w-[350px] sm:w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center shadow-md'>
						<h1 className='p-2 text-lg font-semibold text-blue-400'>TOTALS</h1>	
						{ cardioObject.Running > 0 ? <div className={divClass}>Running: {cardioObject.Running}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Swimming > 0 ? <div className={divClass}>Swimming : {cardioObject.Swimming}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Cycling > 0 ? <div className={divClass}>Cycling: {cardioObject.Cycling}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Rope > 0 ? <div className={divClass}>Rope : {cardioObject.Rope}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Walking > 0 ? <div className={divClass}>Walking: {cardioObject.Walking}<span className='text-base p-1'>km</span></div> : ''}
						<button className={buttonClass} onClick={toggleChartDisplay}>Chart</button>
				  </div>)
		    : <div className='bg-blue-100 h-[500px] w-[350px] sm:w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
		    	<h1 className='p-2 text-lg text-blue-400 font-semibold'>TOTALS CHART</h1>
		    	<div className='h-[470px] w-[350px] sm:w-[400px] flex flex-col justify-center items-center'>
		    		<BarChart width={330} height={370} data={barChartArray}>
		    			<YAxis/>
		    			<XAxis dataKey='name'/>
		    			<Tooltip content={<CustomToolTip/>} />
		    			<Bar dataKey='reps' fill='#60a5fa'/>
		    		</BarChart>
		    	</div>
		    	<button className='btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300 m-2 hover:border-white' onClick={toggleChartDisplay}>Totals</button>
		      </div>
			}
		</>
	)
}

export default DataTotals