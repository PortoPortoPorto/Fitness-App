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
	const [ sessionObject, setSessionObject ] = useState('');
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
				pushups: [],
				squats: [],
				lunges: [],
				presses: [],
				curls: []
		}

		let totalPushups = data.filter((d) => d.exercise === 'Pushups').map((e) => e.reps).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalSquats = data.filter((d) => d.exercise === 'Squats').map((e) => e.reps).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalLunges = data.filter((d) => d.exercise === 'Lunges').map((e) => e.reps).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalPresses = data.filter((d) => d.exercise === 'Presses').map((e) => e.reps).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalCurls = data.filter((d) => d.exercise === 'Curls').map((e) => e.reps).map(p => parseInt(p)).reduce((a, c) => a + c, 0);

		strengthObject.pushups.push(totalPushups);
		strengthObject.squats.push(totalSquats);
		strengthObject.lunges.push(totalLunges);
		strengthObject.presses.push(totalPresses);
		strengthObject.curls.push(totalCurls);

		setStrengthObject(strengthObject);
	}


//Return an array containing the different cardio categories to render
	const organiseCardioData = (data) => {
		let cardioObject = {
				running: [],
				swimming: [],
				cycling: [],
				rope: [],
				walking: []
		}

		let totalRunning = data.filter((d) => d.exercise === 'Running').map((e) => e.distance).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalSwimming = data.filter((d) => d.exercise === 'Swimming').map((e) => e.distance).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalCycling = data.filter((d) => d.exercise === 'Cycling').map((e) => e.distance).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalRope = data.filter((d) => d.exercise === 'Jump Rope').map((e) => e.distance).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalWalking = data.filter((d) => d.exercise === 'Walking').map((e) => e.distance).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
	
		cardioObject.running.push(totalRunning);
		cardioObject.swimming.push(totalSwimming);
		cardioObject.cycling.push(totalCycling);
		cardioObject.rope.push(totalRope);
		cardioObject.walking.push(totalWalking); 

		console.log(cardioObject);
		setCardioObject(cardioObject);

	}	

//Return an array containing the different session categories to render
	const organiseSessionData = (data) => {
		let sessionObject = {
				yoga: [],
				pilates: [],
				spin: [],
				zumba: [],
				boxing: []
		}

		let totalYoga = data.filter((d) => d.exercise === 'Yoga').map((e) => e.time).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalPilates = data.filter((d) => d.exercise === 'Pilates').map((e) => e.time).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalSpin = data.filter((d) => d.exercise === 'Spin').map((e) => e.time).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalZumba = data.filter((d) => d.exercise === 'Zumba').map((e) => e.time).map(p => parseInt(p)).reduce((a, c) => a + c, 0);
		let totalBoxing = data.filter((d) => d.exercise === 'Boxing').map((e) => e.time).map(p => parseInt(p)).reduce((a, c) => a + c, 0);

		sessionObject.yoga.push(totalYoga);
		sessionObject.pilates.push(totalPilates);
		sessionObject.spin.push(totalSpin);
		sessionObject.zumba.push(totalZumba);
		sessionObject.boxing.push(totalBoxing);

		console.log(sessionObject);
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
			console.log('dataCat:', dataCat)
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
				<DataChanges strengthObject={strengthObject} cardioObject={cardioObject} sessionObject={sessionObject}/> 
			</div>	
		</>
	)
}

export default DataBody