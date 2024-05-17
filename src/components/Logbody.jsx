import React from 'react';
import { useContext, useEffect } from 'react'; 
import { GlobalContext } from '../context/GlobalState.jsx';
import LogHeader from './LogHeader.jsx';
import LogCardio from './LogCardio.jsx';
import LogStrength from './LogStrength.jsx'; 
import LogSessions from './LogSessions.jsx'; 
import LoggedCardio from './LoggedCardio.jsx';
import LoggedStrength from './LoggedStrength.jsx';
import LoggedSessions from './LoggedSessions.jsx'; 


const Logbody = () => {
	const { strengthData, cardioData, sessionData } = useContext(GlobalContext); 

	useEffect(() => {
		console.log(strengthData);
	}, [strengthData, cardioData, sessionData]);


	return (
		<>
		  <div className='h-[720px] bg-blue-400'> 
			<LogHeader/>
			<div className='h-[280px] flex justify-around m-4'>
				<LogCardio/>
				<LogStrength/>
				<LogSessions/>
			</div>
			<div className='h-[280px] flex justify-around m-5'>
				<LoggedCardio/>
				<LoggedStrength/>
				<LoggedSessions/>
			</div>
		  </div>
		</>
	)
}

export default Logbody