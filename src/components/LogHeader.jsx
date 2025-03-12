import React, { useState, useEffect, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState.jsx'; 

const LogHeader = ({ dropdown, setDropdown }) => {
	const { currentView, setCurrentUser, setCurrentView } = useContext(GlobalContext); 	
	
	const changeView = () => {
		setCurrentView('dataSelect');
		setDropdown(false);
	}

	const reset = () => {
		setCurrentUser('userId1');
		setCurrentView('byDate'); 
		setDropdown(false);
	}	

	return (		
		<>
		  <div className='flex items-center justify-start h-28'>
			<h3 className='font-semibold text-xl text-blue-100 p-3 border-b-2 border-blue-200 
						   flex items-center justify-center w-[60%] ml-[20%]'>Log your workout</h3>
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

export default LogHeader