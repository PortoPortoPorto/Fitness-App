import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'; 

const NavLogout = ({ dropdown, setDropdown }) => {
	const { setUser, resetState, setCurrentUser, setCurrentView } = useContext(GlobalContext);

	const reset = () => {
		setCurrentUser('userId1');
		setCurrentView('byDate'); 
	}

const toggleDropdown = () => {
	dropdown === false ? setDropdown(true) : setDropdown(false);
	console.log('toggling that dropdown.. status:', dropdown); 
}	

	return (
		<>
		  <div className='hidden lg:flex border border-blue-200 rounded-md h-12 w-40 flex items-center justify-center cursor-pointer hover:bg-blue-200'
		  		onClick={reset}>
			<p className='text-xl font-semibold'>Log Out</p>
		  </div>
		  <div className='lg:hidden'>
		  	<FontAwesomeIcon icon={faBars} 
		  					className=' p-1 text-4xl cursor-pointer text-blue-200 hover:text-blue-400'
		  					onClick={toggleDropdown}/>
		  </div>	
		</>
	)
}

export default NavLogout