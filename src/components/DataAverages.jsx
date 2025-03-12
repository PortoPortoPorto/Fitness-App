import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 
import { BarChart, Bar, ResponsiveContainer, Tooltip, YAxis, XAxis } from 'recharts'; 

const DataAverages = ({strengthObject, cardioObject, sessionObject, days}) => {
	const { currentDataCat, dateRange } = useContext(GlobalContext);
	const [ chartDisplay, setChartDisplay ] = useState(false);
	const [ barChartArray, setBarChartArray ] = useState('');
	const [ dataAvailable, setDataAvailable ] = useState('');


//Set chart objects and toggle chart visibility, if no data, simply return. 
	const toggleChartDisplay = () => {
	    console.log('DATA AVAILABLE:', dataAvailable);
	    if(dataAvailable === false) return;
	    else if(chartDisplay === false)setChartDisplay(true);
		else if(chartDisplay === true)setChartDisplay(false);
	}


	const chartAverages = (exercise, units,) => {
 		console.log('charting averages')
 		let dayNumber = days;
 		let average = Math.round(exercise / dayNumber);
 		if(average === NaN) {
 			return 0;
 		} else {
 			return average;  			
 		}
	}

	

//Push averages (chartAverages function) of all exercises in current category into chartData array, and set barChartArray with the result
	const createChartObjects = (currentDataCat) => {
				let chartCategories = [];
				let chartData = [];
				let chartObject = '';
				let measurement = 'reps';
//Set chartCategories, chartObject and measurement depending on the current data category
				if(currentDataCat === 1){
					chartCategories = ['Running', 'Swimming', 'Cycling', 'JumpRope', 'Walking'];
					chartObject = cardioObject;
					measurement = 'km';			
				} else if(currentDataCat === 2) {
					chartCategories = ['Pushups', 'Squats', 'Lunges', 'Presses', 'Curls', 'Crunches'];
					chartObject = strengthObject;	
				} else if(currentDataCat === 3) {
					chartCategories = ['Yoga', 'Pilates', 'Spin', 'Zumba', 'Boxing'];
					chartObject = sessionObject;
					measurement = 'mins';	
				}
					chartCategories.forEach((category) => {	
						console.log(`chart category: ${category}`, chartObject[category]);	
						if(chartObject[category] > 0) {
							let dataObject = {
								name: category,
								reps: chartAverages(chartObject[category], measurement)
							}
							console.log('CURRENT DATA OBJECT', dataObject)
							setDataAvailable(true);
							chartData.push(dataObject);
						} else {
							setDataAvailable(false);
							return;
						}				
					});

					setBarChartArray(chartData);		
				}
			

	useEffect(() => {
		if(dataAvailable === '') {
			createChartObjects(currentDataCat);
		}
	},[ currentDataCat])


//custom tool tip when mouse hovers over bar chart element 
	const CustomToolTip = ({ payload, label, active }) => {
		if(active) {
			return (
				<div className = 'h-[80px] w-[100px] bg-blue-300 rounded opacity-80'>
					<p className = 'flex items-center justify-center p-1 font-semibold'>{`${label}`}</p>
					<p className = 'flex items-center justify-center p-1 text-xl'>{`${payload[0].value} / day`}</p>
				</div>
			);
		}
	}

	const dataContainer = 'bg-blue-100 h-[500px] w-[350px] sm:w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center shadow-md';
	const divClass = 'h-[80px] w-[320px] sm:w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold shadow-md'; 
	const buttonClass = 'btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300 hover:border-white'

	return (
		<>
		    {chartDisplay === false ? 
			 	currentDataCat > 2 ? 
			  	 (<div className={dataContainer}>
					<h1 className='p-2 text-lg font-semibold text-blue-400'>AVERAGES</h1>	
						{ sessionObject.Yoga > 0 ? <div className={divClass}> Yoga:{Math.round(sessionObject.Yoga / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
						{ sessionObject.Pilates > 0 ? <div className={divClass}>Pilates : {Math.round(sessionObject.Pilates / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
						{ sessionObject.Spin > 0 ? <div className={divClass} >Spin: {Math.round(sessionObject.Spin / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
						{ sessionObject.Zumba> 0 ? <div className={divClass}>ZUMBA: {Math.round(sessionObject.Zumba/ days)}<span className='text-base p-1'>mins per day</span></div> : ''}
						{ sessionObject.Boxing > 0 ? <div className={divClass}>Boxing: {Math.round(sessionObject.Boxing / days)}<span className='text-base p-1'>mins per day</span></div> : ''}
						<button className={buttonClass} onClick={toggleChartDisplay}>Chart</button>
				  	</div>)
			  	:
			    currentDataCat > 1 ?	 
				  	(<div className={dataContainer}>
					<h1 className='p-2 text-lg font-semibold text-blue-400'>AVERAGES</h1>	
						{ strengthObject.Pushups > 0 ? <div className={divClass}> Pushups: {Math.round(strengthObject.Pushups / days)}<span className='text-base p-1'>per day</span></div> : ''}
						{ strengthObject.Squats > 0 ? <div className={divClass}>Squats : {Math.round(strengthObject.Squats / days)}<span className='text-base p-1'>per day</span></div> : ''}
						{ strengthObject.Lunges > 0 ? <div className={divClass}>Lunges: {Math.round(strengthObject.Lunges / days)}<span className='text-base p-1'>per day</span></div> : ''}
						{ strengthObject.Presses > 0 ? <div className={divClass}>Presses: {Math.round(strengthObject.Presses / days)}<span className='text-base p-1'>per day</span></div> : ''}
						{ strengthObject.Curls > 0 ? <div className={divClass}>Curls: {Math.round(strengthObject.Curls / days)}<span className='text-base p-1'>per day</span></div> : ''}
						{ strengthObject.Crunches > 0 ? <div className={divClass}>Crunches: {Math.round(strengthObject.Crunches / days)}<span className='text-base p-1'>per day</span></div> : ''}
						<button className={buttonClass} onClick={toggleChartDisplay}>Chart</button>
				  	</div>)
				:   
					(<div className={dataContainer}>
						<h1 className='p-2 text-lg font-semibold text-blue-400'>DAILY AVERAGES</h1>	
						{ cardioObject.Running > 0 ? <div className={divClass}>Running: {Math.round(cardioObject.Running / days)}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Swimming > 0 ? <div className={divClass}>Swimming : {Math.round(cardioObject.Swimming / days)}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Cycling > 0 ? <div className={divClass}>Cycling: {Math.round(cardioObject.Cycling / days)}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Rope> 0 ? <div className={divClass}>Rope : {Math.round(cardioObject.Rope / days)}<span className='text-base p-1'>km</span></div> : ''}
						{ cardioObject.Walking > 0 ? <div className={divClass}>Walking: {Math.round(cardioObject.Walking / days)}<span className='text-base p-1'>km</span></div> : ''}
						<button className={buttonClass} onClick={toggleChartDisplay}>Chart</button>
				  </div>)

 			:   
 				<div className='bg-blue-100 h-[500px] w-[350px] sm:w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
		    	<h1 className='p-2 text-lg text-blue-400 font-semibold'>DAILY AVERAGES CHART</h1>
		    	<div className='h-[470px] w-[350px] sm:w-[400px] flex flex-col justify-center items-center'>
		    		<BarChart width={330} height={370} data={barChartArray}>
		    			<YAxis/>
		    			<XAxis dataKey='name'/>
		    			<Tooltip content = {<CustomToolTip />}/>
		    			<Bar dataKey='reps' fill='#60a5fa'/>
		    		</BarChart>
		    	</div>
		    	<button className='btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300 m-2 hover:border-white' onClick={toggleChartDisplay}>Averages</button>
		      </div>	
			}
		</>
	)
}

export default DataAverages