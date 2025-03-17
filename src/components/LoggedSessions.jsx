import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 
import SessionsCard from './SessionsCard.jsx'; 

const LoggedSessions = () => {
	const { sessionData } = useContext(GlobalContext); 

	return (
		<>
		  <div className='bg-blue-300 h-[220px] w-[165px] sm:h-[302px] sm:w-[242px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md m1 sm:m-2 md:m-0'>
		  	{sessionData.map(s => (<SessionsCard key={s.id} session={s}/>))}
		  </div>
		</>
	)
}

export default LoggedSessions