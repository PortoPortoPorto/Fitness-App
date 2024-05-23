import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const DataTotals = () => {
	const { strengthData, cardioData, sessionData, currentDataCat, dateRange } = useContext(GlobalContext); 
	const [ dataCat, setDataCat ] = useState('');
	const [ pushups, setPushups ] = useState('');
	
	const findDataCat = () => {
		if(currentDataCat === 1)setDataCat(cardioData);
		if(currentDataCat === 2)setDataCat(strengthData);
		if(currentDataCat === 3)setDataCat(sessionData);
	}

	const organiseData = () => {
		let pushupsArray = strengthData.filter((d) => d.exercise === 'Pushups');
		let repsArray = pushupsArray.map((p) => p.reps);
		let parsedRepsArray = repsArray.map(r => parseInt(r));
		let totalPushups = parsedRepsArray.reduce((acc, current) => acc + current, 0);
		setPushups(totalPushups); 
	}

	useEffect(() => {
		findDataCat(); 
		console.log('strength data:', strengthData);
	}, []);

	useEffect(() => {
		organiseData(); 
	}, [dataCat]);

	return (
		<>
		  <div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
			<h1 className='p-2 text-lg font-semibold'>TOTALS</h1>	
				{dataCat === cardioData ? 
				(<div>CARDIO BITCH</div>) 
			
				: dataCat === strengthData ? 
				(<div className='p-3 text-2xl font-semibold flex flex-col items-center'>PUSHUPS
					<div>{pushups}</div> 
				</div>) 

				: (<div>SESSIONS BITCH</div>)}
		  </div>
		</>
	)
}

export default DataTotals