import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const DataChanges = ({strengthObject, cardioObject, sessionObject, dataCat}) => {
	const [ compareDates, setCompareDates ] = useState ('');
	const [ pastData, setPastData ] = useState('');
	const [ progressArray, setProgressArray ] = useState('');
	const {  currentDataCat, dateRange } = useContext(GlobalContext); 



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
		if(currentDataCat === 1) {
			filteredCompObject = organisePastCardio(filteredCompObject);
		} else if(currentDataCat === 2) {
			filteredCompObject = organisePastStrength(filteredCompObject);
		} else if(currentDataCat === 3) {
			filteredCompObject = organisePastSessions(filteredCompObject);
		}


		setPastData(filteredCompObject);
	}

//Organise Data of filtered past activities (cardio, strength, session), reduce to single value (time/distance/reps) and push into shell object for comparison 

	const organisePastCardio = (filteredCompObject) => {
		console.log('organising past cardio');
		let pastCardioObject = {
			Running: [],
			Swimming: [],
			Cycling: [],
			JumpRope: [],
			Walking: []
		}

		const exerciseArray = ['Running', 'Swimming', 'Cycling', 'JumpRope', 'Walking'];
		for(let i = 0; i < exerciseArray.length; i ++) {
			let filteredCat = filteredCompObject.filter((d) => d.exercise === exerciseArray[i]).map((e) => e.distance).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
			let cat = exerciseArray[i];
			pastCardioObject[`${cat}`].push(filteredCat);
		}
		return pastCardioObject;	


	}

//push past data from filterComparisonArray function to pastStrengthObject. Return value to filterComparisonArray function 
	const organisePastStrength = (filteredCompObject) => {
		console.log('organising past strength:', filteredCompObject);
		let pastStrengthObject = {
			Pushups: [],
			Squats: [],
			Lunges: [],
			Presses: [],
			Curls: []
		}

		const exerciseArray = ['Pushups', 'Squats', 'Lunges', 'Presses', 'Curls'];

		for(let i = 0; i < exerciseArray.length; i ++) {
			let filteredCat = filteredCompObject.filter((d) => d.exercise === exerciseArray[i]).map((e) => e.reps).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
			let cat = exerciseArray[i];
			pastStrengthObject[`${cat}`].push(filteredCat);
		}
		return pastStrengthObject;	
	}

//push past data from filterComparisonArray function to pastSessionObject. Return value to filterComparisonArray function 
	const organisePastSessions = (filteredCompObject) => {
		console.log('organising past sessions:', filteredCompObject);
		let pastSessionObject = {
			Yoga: [],
			Pilates: [],
			Spin: [],
			Zumba: [],
			Boxing: []
		}

		const exerciseArray = ['Yoga', 'Pilates', 'Spin', 'Zumba', 'Boxing'];

		for(let i = 0; i < exerciseArray.length; i ++) {
			let filteredCat = filteredCompObject.filter((d) => d.exercise === exerciseArray[i]).map((e) => e.time).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
			let cat = exerciseArray[i];
			pastSessionObject[`${cat}`].push(filteredCat);
		}
		return pastSessionObject;	
	}	


	const setCardioArray = (filteredCompObject) => {
		console.log('setting cardio array');
		const exerciseArray = ['Running', 'Swimming', 'Cycling', 'JumpRope', 'Walking']
		compareArrays(exerciseArray, cardioObject);
	}

	const setStrengthArray = () => {
		console.log('setting strength array');
		const exerciseArray = ['Pushups', 'Squats', 'Lunges', 'Presses', 'Curls'];
		compareArrays(exerciseArray, strengthObject);
	}

	const setSessionArray = () => {
		console.log('setting session array');
		const exerciseArray = ['Yoga', 'Pilates', 'Spin', 'Zumba', 'Boxing'];
		compareArrays(exerciseArray, sessionObject); 
	} 

//Function to compare current exercise data array with previous exercise data array. Triggered by change in pastData useState
//loop through each category, comparing numbers of current and past exercies periods. If there is a difference, push as object to resultsArray 
	const compareArrays = (exerciseArray, object) => {
		let resultsArray = [];
		for(let i = 0; i < exerciseArray.length; i ++) {
			let cat = exerciseArray[i];
			let result = object[`${cat}`] - pastData[`${cat}`];
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
		console.log(resultsArray);
		setProgressArray(resultsArray);
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


	const divClassPlus = 'h-[80px] w-[350px] bg-green-200 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'; 
	const divClassMinus = 'h-[80px] w-[350px] bg-red-200 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'; 

	return (
		<>
		<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
			<h1 className='p-2 text-lg font-semibold'>PROGRESS</h1>
			<div className='text-blue-300 italic font-semibold'>vs previous {dateRange}</div>
			{ progressArray.length !== 0 ?
				(progressArray.map(a => (<div className={ a.result > 0 ? divClassPlus : divClassMinus} key={a.name}> {a.name} {a.result}  </div>))
				) : (<div className='h-[400px] w-[350px] bg-blue-300 rounded-lg text-2xl flex justify-center items-center m-2 p-3 font-semibold'>No Changes!</div>) 
			}
		</div>
		</>
	)
}

export default DataChanges

