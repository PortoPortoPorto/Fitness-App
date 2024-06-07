import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx';  

const NavLogout = () => {
	const { setUser, resetState, setCurrentUser, setCurrentView } = useContext(GlobalContext);
	const reset = () => {
		setCurrentUser('userId1');
		setCurrentView('byDate'); 
	}

	return (
		<>
		  <div className='border border-blue-200 rounded-md h-12 w-40 flex items-center justify-center cursor-pointer hover:bg-blue-200'
		  		onClick={reset}>
			<p className='text-xl font-semibold'>Log Out</p>
		  </div>	
		</>
	)
}

export default NavLogout