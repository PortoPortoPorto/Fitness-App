import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis } from 'recharts';  

const DataTotals = ({strengthObject, cardioObject, sessionObject}) => {
	const {  currentDataCat } = useContext(GlobalContext); 
	const [ chartDisplay, setChartDisplay ] = useState(false);
	const [ barChartArray, setBarChartArray ] = useState('');


	const toggleChartDisplay = () => {
		console.log('toggling chart display');
	    createChartObjects(currentDataCat);
	    if(chartDisplay === false)setChartDisplay(true);
		else if(chartDisplay === true)setChartDisplay(false);
	}

	const createChartObjects = (currentDataCat) => {
			if(currentDataCat === 1){
				console.log(cardioObject);
				const barChartData = [
					{
						name: 'Running',
						reps: cardioObject.Running[0]
					},
					{
						name: 'Swimming',
						reps: cardioObject.Swimming[0]
					},

					{
						name: 'Cycling',
						reps: cardioObject.Cycling[0]
					},

					{
						name: 'JumpRope',
						reps: cardioObject.JumpRope[0]
					},

					{
						name: 'Walking',
						reps: cardioObject.Walking[0]
					}

					]
					console.log(barChartData);
					setBarChartArray(barChartData);				
			} else if(currentDataCat === 2) {
				const barChartData = [
					{
						name: 'Pushups',
						reps: strengthObject.Pushups[0]
					},
					{
						name: 'Squats',
						reps: strengthObject.Squats[0]
					},

					{
						name: 'Lunges',
						reps: strengthObject.Lunges[0]
					},

					{
						name: 'Presses',
						reps: strengthObject.Presses[0]
					},

					{
						name: 'Curls',
						reps: strengthObject.Curls[0]
					}

					]
					console.log(barChartData);
					setBarChartArray(barChartData);
			} else if(currentDataCat === 3) {
				const barChartData = [
					{
						name: 'Yoga',
						reps: sessionObject.Yoga[0]
					},
					{
						name: 'Pilates',
						reps: sessionObject.Pilates[0]
					},

					{
						name: 'Spin',
						reps: sessionObject.Spin[0]
					},

					{
						name: 'Zumba',
						reps: sessionObject.Zumba[0]
					},

					{
						name: 'Boxing',
						reps: sessionObject.Boxing[0]
					},

					]	
					console.log(barChartData);
					setBarChartArray(barChartData);		
			}
		}
	

	useEffect(() => {
		console.log('chartDisplay:', chartDisplay);
		console.log('strengthObject', strengthObject)
	}, [chartDisplay]);


	const divClass = 'h-[80px] w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'; 

	return (
		<>
		  {chartDisplay === false ? 

			  	currentDataCat > 2 ? 
			  	 (<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
					<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
						{ sessionObject.Yoga > 0 ? <div className={divClass}> Yoga: {sessionObject.Yoga} mins</div> : ''}
						{ sessionObject.Pilates > 0 ? <div className={divClass}>Pilates : {sessionObject.Pilates} mins</div> : ''}
						{ sessionObject.Spin > 0 ? <div className={divClass} >Spin: {sessionObject.Spin} mins</div> : ''}
						{ sessionObject.Zumba > 0 ? <div className={divClass}>Zumba: {sessionObject.Zumba} mins</div> : ''}
						{ sessionObject.Boxing > 0 ? <div className={divClass}>Boxing: {sessionObject.Boxing} mins</div> : ''}
						<button className='btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300' onClick={toggleChartDisplay}>Chart</button>
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
						<button className='btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300' onClick={toggleChartDisplay}>Chart</button>
				  	</div>)
				:   
					(<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
						<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
						{ cardioObject.Running > 0 ? <div className={divClass}>Running: {cardioObject.Running} km</div> : ''}
						{ cardioObject.Swimming > 0 ? <div className={divClass}>Swimming : {cardioObject.Swimming} km</div> : ''}
						{ cardioObject.Cycling > 0 ? <div className={divClass}>Cycling: {cardioObject.Cycling} km</div> : ''}
						{ cardioObject.Rope > 0 ? <div className={divClass}>Rope : {cardioObject.Rope} mins</div> : ''}
						{ cardioObject.Walking > 0 ? <div className={divClass}>Walking: {cardioObject.Walking} km</div> : ''}
						<button className='btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300' onClick={toggleChartDisplay}>Chart</button>
				  </div>)
		    : <div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
		    	<h1 className='p-2 text-lg font-semibold'>CHART</h1>
		    	<container className='h-[470px] w-[400px] flex flex-col justify-center items-center'>
		    		<BarChart width={380} height={370} data={barChartArray}>
		    			<YAxis/>
		    			<XAxis dataKey='name'/>
		    			<Bar dataKey='reps' fill='#70afcf'/>
		    		</BarChart>
		    	</container>
		    	<button className='btn bg-blue-500 h-[35px] w-[100px] rounded-lg font-semibold text-white border-2 border-blue-300 m-2' onClick={toggleChartDisplay}>Totals</button>
		      </div>

			}
		</>
	)
}

export default DataTotals