import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 
import DataTotals from './DataTotals.jsx';
import DataAverages from './DataAverages.jsx';
import DataChanges from './DataChanges.jsx'; 

const DataBody = () => {
	const { strengthData, cardioData, sessionData, currentDataCat, dateRange, startingDate } = useContext(GlobalContext); 
	const [ dataCat, setDataCat ] = useState('');
	const [ strengthObject, setStrengthObject ] = useState('');
	const [ cardioObject, setCardioObject ] = useState('');
	const [ cardioShell, setCardioShell ] = useState('');
	const [ sessionObject, setSessionObject ] = useState('');
	const [ sessionShell, setSessionShell ] = useState('');
	const [ days, setDays ] = useState(''); 

//Find current data category, based on passed key 	
	const findDataCat = () => {
		if(currentDataCat === 1)setDataCat(cardioData);
		if(currentDataCat === 2)setDataCat(strengthData);
		if(currentDataCat === 3)setDataCat(sessionData);
	}

//Filter data array to only contain objects within date range
	const filterByDateRange = () => {
		const todayDate = new Date();
		let filteredArray = dataCat.filter((d) => d.date >= startingDate);
		return filteredArray;
	}


//Set values of the different strength exercise categories to render
	const organiseStrengthData = (data) => {
		let strengthObject = {
				Pushups: [],
				Squats: [],
				Lunges: [],
				Presses: [],
				Curls: [],
				Crunches: []
		}

		const categories = ['Pushups', 'Squats', 'Lunges', 'Presses', 'Curls', 'Crunches'];

		categories.forEach((category) => {
			const totalReps = data.filter((d) => d.exercise === category).map((e) => e.reps).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
			strengthObject[category] = [totalReps];
			
		});
		setStrengthObject(strengthObject);
	}


//Return an array containing the different cardio categories to render
	const organiseCardioData = (data) => {
		let cardioObject = {
				Running: [],
				Swimming: [],
				Cycling: [],
				JumpRope: [],
				Walking: []
		}

		const categories = [ 'Running', 'Swimming', 'Cycling', 'JumpRope', 'Walking' ];

		categories.forEach((category) => {
			const totalDistance = data.filter((d) => d.exercise === category).map((e) => e.distance).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
			cardioObject[category] = [totalDistance];
		});
		setCardioObject(cardioObject);
	}	

//Return an array containing the different session categories to render
	const organiseSessionData = (data) => {
		let sessionObject = {
				Yoga: [],
				Pilates: [],
				Spin: [],
				Zumba: [],
				Boxing: []
		}

		const categories = [ 'Yoga', 'Pilates', 'Spin', 'Zumba', 'Boxing' ];

		categories.forEach((category) => {
			const totalTime = data.filter((d) => d.exercise === category).map((e) => e.time).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
			sessionObject[category] = [totalTime];
		});
		setSessionObject(sessionObject);
	}	


//Find correct data category on render
	useEffect(() => {
		findDataCat();
		if(dateRange === '1 week')setDays(7);
		if(dateRange === '1 month')setDays(28);
		if(dateRange === '3 months')setDays(84);	
	}, []);

//Once data category has been found, call filter by date function
	useEffect(() => {		
			if(dataCat === strengthData) {
				let filteredData = filterByDateRange();
				organiseStrengthData(filteredData);
			} else if(dataCat === cardioData) {
				let filteredData = filterByDateRange();
				organiseCardioData(filteredData);
			} else if(dataCat === sessionData) {
				let filteredData = filterByDateRange();
				organiseSessionData(filteredData);
			} else {
			console.log('no current category for data'); 
		}
	}, [dataCat]);



	return (
		<>
			<div className='flex m-4 p-4'>	
				<DataTotals strengthObject={strengthObject} cardioObject={cardioObject} sessionObject={sessionObject}/>
				<DataAverages strengthObject={strengthObject} cardioObject={cardioObject} sessionObject={sessionObject} days={days}/>
				<DataChanges strengthObject={strengthObject} cardioObject={cardioObject} sessionObject={sessionObject} dataCat={dataCat}/> 
			</div>	
		</>
	)
}

export default DataBody