import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 
import Test from './Test.jsx';

const DataChanges = ({strengthObject, cardioObject, sessionObject, dataCat}) => {
	const [ compareDates, setCompareDates ] = useState ('');
	const [ pastData, setPastData ] = useState('');
	const [ progressArray, setProgressArray ] = useState('');
	const {  currentDataCat, dateRange } = useContext(GlobalContext);
	const [ units, setUnits ] = useState('');
	const [ notable, setNotable] = useState(false); 



//Set Start and End numbers for comparison dates array. call getCompare dates to set dates in useState
	const datesToCompare = () => {	
		let days;
		if(dateRange === '1 week') days = 7;
		if(dateRange === '1 month') days = 28;
		if(dateRange === '3 months') days = 84;
		let start = days * 2;
		let end = days + 1;
		getCompareDates(start, end);
	}
	
//Set Start and End date of comparison dates array. Format to match other dates in app 
	const getCompareDates = (start, end) => {
		const todayDate = new Date();
		let startDate = new Date();
		let endDate = new Date();
		startDate.setDate(todayDate.getDate() - start);
		endDate.setDate(todayDate.getDate() - end);
		let formattedStartDate = startDate.toISOString().split('T')[0]; 
		let formattedEndDate = endDate.toISOString().split('T')[0];
		setCompareDates([formattedStartDate, formattedEndDate])
	}

//Filter data array to only contain objects within date range (using compareDates as start and end point)
	const filterComparisonArray = () => {
		let filteredCompObject = dataCat.filter((d) => d.date >= compareDates[0] && d.date <= compareDates[1]);
//Set data into dataShell of whichever is the current data category. Use as argument for setPastData
		filteredCompObject = organisePast(filteredCompObject);
		setPastData(filteredCompObject);
	}


//Organise Data of filtered past activities (cardio/strength/session), reduce to single value (time/distance/reps) and push into shell object for comparison 
	const organisePast = (filteredCompObject) => {
		if(currentDataCat === 1) {
			setUnits('km');
			let pastObject = {
				Running: [],
				Swimming: [],
				Cycling: [],
				JumpRope: [],
				Walking: []
			}
			const exerciseArray = ['Swimming', 'Running', 'Cycling', 'JumpRope', 'Walking'];
			const filteredPastObject = filterPastObject(pastObject, exerciseArray, 'distance', filteredCompObject);
			return filteredPastObject; 

		} else if (currentDataCat === 2) {
			setUnits('reps');
			let pastObject = {
				Pushups: [],
				Squats: [],
				Lunges: [],
				Presses: [],
				Curls: [],
				Crunches: []
			}
			const exerciseArray = ['Pushups', 'Squats', 'Lunges', 'Presses', 'Curls'];
			const filteredPastObject = filterPastObject(pastObject, exerciseArray, 'reps', filteredCompObject);
			return filteredPastObject;	

		} else if (currentDataCat === 3) {
			setUnits('mins');
			let pastObject = {
				Yoga: [],
				Pilates: [],
				Spin: [],
				Zumba: [],
				Boxing: []
			}
			const exerciseArray = ['Yoga', 'Pilates', 'Spin', 'Zumba', 'Boxing'];
			const filteredPastObject = filterPastObject(pastObject, exerciseArray, 'time', filteredCompObject);
			return filteredPastObject;			
		} 
	}

	const filterPastObject = (pastObject, exerciseArray, measurement, filteredCompObject) => {
			console.log(filteredCompObject, measurement);
			for(let i = 0; i < exerciseArray.length; i ++) {
			let filteredCat = filteredCompObject
				.filter((d) => d.exercise === exerciseArray[i])
				.map((e) => (e[measurement])) // THIS LINE GOT ME! Needed square braces as 'measurement' is a dynamic variable 
				.map((p) => parseInt(p))
				.reduce((a, c) => a + c, 0);
			let cat = exerciseArray[i];
			pastObject[`${cat}`].push(filteredCat);
		}
		return pastObject;
	}

	const setCardioArray = (filteredCompObject) => {
		const exerciseArray = ['Running', 'Swimming', 'Cycling', 'JumpRope', 'Walking']
		compareArrays(exerciseArray, cardioObject);
	}

	const setStrengthArray = () => {
		const exerciseArray = ['Pushups', 'Squats', 'Lunges', 'Presses', 'Curls', 'Crunches'];
		compareArrays(exerciseArray, strengthObject);
	}

	const setSessionArray = () => {
		const exerciseArray = ['Yoga', 'Pilates', 'Spin', 'Zumba', 'Boxing'];
		compareArrays(exerciseArray, sessionObject); 
	} 


//Check for any notable improvements in results array. If so, push to setNoteworthy useState
	const checkForNotable = (resultsArray) => {
		let maxValue = 0; 
		let n = ''
		for(let i = 0; i < resultsArray.length; i ++) {
			if(resultsArray[i].result > maxValue) {
				maxValue = resultsArray[i].result;
				n = resultsArray[i];
			}
		}
		console.log(notable); 
		if(n === '')return;
		else setNotable(n);
	}


//Function to compare current exercise data array with previous exercise data array. Triggered by change in pastData useState
//loop through each category, comparing numbers of current and past exercies periods. If there is a difference, push as object to resultsArray 
	const compareArrays = (exerciseArray, object) => {
		let resultsArray = [];
		for(let i = 0; i < exerciseArray.length; i ++) {
			let cat = exerciseArray[i];
			let result = object[`${cat}`] - pastData[`${cat}`];
			console.log('cat:', cat, object[`${cat}`], 'take',  pastData[`${cat}`], 'result:', result)
			if(result < 0) {
				const changeObject = {
					name: cat,
					result: result
				}
				resultsArray.push(changeObject);
			}
			 if(result > 0) {
				const changeObject = {
					name: cat,
					result: result
				}
					resultsArray.push(changeObject);
			}					
		}
		console.log('results array:', resultsArray);
		setProgressArray(resultsArray);
		checkForNotable(resultsArray);
	}


	useEffect(() => {
		datesToCompare();
	}, []);
	

	useEffect(() => {
		if(compareDates === '')return
		filterComparisonArray();
	}, [compareDates]);


	useEffect(() => {
		if(pastData === '')return;
		if(currentDataCat === 1)setCardioArray();
		if(currentDataCat === 2)setStrengthArray();
		if(currentDataCat === 3)setSessionArray(); 
	}, [pastData]);


	const divClassPlus = 'h-[80px] w-[350px] bg-emerald-200 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold shadow-md'; 
	const divClassMinus = 'h-[80px] w-[350px] bg-red-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold shadow-md'; 

	return (
		<>
		<Test/>
		<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center shadow-md'>
			<h1 className='p-2 text-lg font-semibold text-blue-400'>PROGRESS</h1>
			<div className='text-blue-300 italic font-semibold'>vs previous {dateRange}</div>
			{ progressArray.length !== 0 ?
				(progressArray.map((a, index) => (
					<div key={index}>
					 {a.result > 0 ? (<div className={divClassPlus}><span className= 'p-2'>{a.name}:</span> <span className= 'p-1'>+{a.result}</span><span className='text-base p-1'>{units}</span></div>)  
					 			   : (<div className={divClassMinus}><span className= 'p-2'>{a.name}:</span><span className= 'p-1'> {a.result}</span><span className='text-base p-1'>{units}</span></div>)  }
                    </div>))
				) : (<div className='h-[400px] w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'>No Changes!</div>) 
			}
			{ notable === false ? ''
					  : <div className=' mt-10 p-2 text-lg font-semibold italic text-blue-400'>You're crushing the {notable.name}! Keep it up!</div>

			}
		</div>
		</>
	)
}

export default DataChanges

