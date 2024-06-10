import React, {useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 


const DataHeader = ({ dropdown, setDropdown }) => {
	const { currentDataCat, dateRange, startingDate, setStartingDate, currentView, setCurrentView, setCurrentUser } = useContext(GlobalContext); 
	const [ dataDate, setDataDate ] = useState('');

	const changeView = () => {
		setCurrentView('dataSelect');
		setDropdown(false);
	}

	const reset = () => {
		setCurrentUser('userId1');
		setCurrentView('byDate');
		setDropdown(false); 
	}	

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
			<div className = 'flex items-center justify-start h-28 w-[100%]'>
			  <div className='flex flex-col md:flex-row items-center justify-center h-28 w-[70%] ml-[10%]'>
				{currentDataCat > 2 ? (<h3 className='font-semibold text-lg sm:text-xl text-blue-100 p-3 border-b-2 border-blue-200'>Sessions Exercise Data</h3>)
				: currentDataCat > 1 ? (<h3 className='font-semibold text-lg sm:text-xl text-blue-100 p-3 border-b-2 border-blue-200'>Strength Exercise Data</h3>) 
									 : (<h3 className='font-semibold text-lg sm:text-xl text-blue-100 p-3 border-b-2 border-blue-200'>Cardio Exercise Data</h3>)}
				<h3 className='font-semibold text:sm sm:text-xl text-blue-100 p-3 md:border-b-2 border-blue-200'>
					<span className='p-2 text-sm text-blue-300 italic'>from:</span>{startingDate}<span className='p-2 text-sm text-blue-300 italic'>to:</span>{dataDate}</h3>
			  </div>
			
				{ dropdown === true ?
				<div className='flex flex-col w-[18%] ml-[2%] h-[115px] bg-blue-300 rounded-b-lg lg:hidden'>
					<button className= 'h-[50px] bg-blue-300 mt-1 md:text-lg text-blue-100 font-semibold border border-blue-200 rounded-md m-1 hover:bg-blue-200'
							onClick={changeView}>Data</button>
					<button className= 'h-[50px] bg-blue-300 mt-1 md:text-lg text-blue-100 font-semibold border border-blue-200 rounded-md m-1 hover:bg-blue-200'
					        onClick={reset}>Logout</button>
				</div> : ''
				}
			</div>	
		</>
	)
}

export default DataHeader