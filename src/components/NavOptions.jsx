import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 

const NavOptions = () => {
	const { currentView, setCurrentView } = useContext(GlobalContext); 

	const changeView = () => {
		setCurrentView('dataSelect');
	}

	return (
		<>
		  <div className='border border-blue-200 rounded-md h-12 w-40 flex items-center justify-center cursor-pointer hover:bg-blue-200'
		  	   onClick={changeView} >
			<p className='text-xl font-semibold'> View Data</p>
		  </div>	
		</>
	)
}

export default NavOptions