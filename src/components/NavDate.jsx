import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalContext } from '../context/GlobalState.jsx'; 

const NavDate = () => {
	const { exerciseDate, setExerciseDate, currentView, setCurrentView } = useContext(GlobalContext); 
	const [ datePosition, setDatePosition ] = useState(0);
	const [ isToday, setIsToday ] = useState(true);
	
	const nextDate = () => {
	   setDatePosition((d) => d + 1);
	}
	const previousDate = () => {
	   setDatePosition((d) => d - 1);
	}

	const checkCurrentDate = (exDate) => {
		const today = new Date();
		exDate >= today ? setIsToday(true) : setIsToday(false);
	}

	useEffect(() => {
		newExerciseDate(); 
	}, [datePosition]);

	const newExerciseDate = () => {
		let exDate = new Date();
		exDate.setDate(exDate.getDate() + datePosition);
		let formattedExDate = exDate.toISOString().split('T')[0]; 
		setExerciseDate(formattedExDate); 
		checkCurrentDate(exDate); 
	}

	const changeView = () => {
		setCurrentView('byDate');
	}

	return (
		<>
		  {currentView === 'byDate'? 
		  <div className='border border-blue-200 rounded-md h-12 w-96 flex items-center justify-around cursor-pointer hover:bg-blue-200'>
			<FontAwesomeIcon icon="fa-solid fa-chevron-left" className= 'text-3xl text-blue-100 hover:text-blue-400 hover:text-4xl'
							 onClick={previousDate}/>
			<p className='text-xl font-semibold' onClick={changeView}>{exerciseDate}</p>
			{ isToday === true ? <div className='h-[50px] w[70px]'></div>
			 				  :<FontAwesomeIcon icon="fa-solid fa-chevron-right" className= 'text-3xl text-blue-100 hover:text-blue-400 hover:text-4xl'
			 				 onClick={nextDate}/>}
		  </div> 
		 : 
		  <div className='border border-blue-200 rounded-md h-12 w-96 flex items-center justify-around cursor-pointer hover:bg-blue-200'>
			<p className='text-xl font-semibold' onClick={changeView}>{exerciseDate}</p>
		  </div> }	
		</>
	)
}

export default NavDate