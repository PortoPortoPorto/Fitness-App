import React, {useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 


const DataHeader = () => {
	const { currentDataCat, dateRange, startingDate, setStartingDate } = useContext(GlobalContext); 
	const [ dataDate, setDataDate ] = useState('');

	const newDataDate = () => {
		let todayDate = new Date();
		let formattedTodayDate = todayDate.toISOString().split('T')[0]; 
		setDataDate(formattedTodayDate);  
	}

	//function to find beginning of display data date range
	const findStartDate = () => {
		let todayDate = new Date();
		let startDate = new Date(todayDate);
		if(dateRange === '1 week')startDate.setDate(startDate.getDate() - 7);
		if(dateRange === '1 month')startDate.setDate(startDate.getDate() - 30);
		if(dateRange === '3 months')startDate.setDate(startDate.getDate() - 90); 
		let formattedStartDate = startDate.toISOString().split('T')[0];
		setStartingDate(formattedStartDate); 
	}

	useEffect(() => {
		newDataDate(); 
		findStartDate();
	}, []);



	return (
		<>
		  <div className='flex flex-col md:flex-row items-center justify-center h-28'>
			{currentDataCat > 2 ? (<h3 className='font-semibold text-xl text-blue-100 p-3 border-b-2 border-blue-200'>Sessions Exercise Data</h3>)
			: currentDataCat > 1 ? (<h3 className='font-semibold text-xl text-blue-100 p-3 border-b-2 border-blue-200'>Strength Exercise Data</h3>) 
								 : (<h3 className='font-semibold text-xl text-blue-100 p-3 border-b-2 border-blue-200'>Cardio Exercise Data</h3>)}
			<h3 className='font-semibold text-xl text-blue-100 p-3 md:border-b-2 border-blue-200'>
				<span className='p-3 text-md text-blue-300 italic'>from:</span>{startingDate}<span className='p-3 text-md text-blue-300 italic'>to:</span>{dataDate}</h3>
		  </div>	
		</>
	)
}

export default DataHeader