import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 
import SessionsCard from './SessionsCard.jsx'; 

const LoggedSessions = () => {
	const { sessionData } = useContext(GlobalContext); 

	return (
		<>
		  <div className='bg-blue-300 h-[275px] w-[220px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md'>
		  	{sessionData.map(s => (<SessionsCard key={s.id} session={s}/>))}
		  </div>
		</>
	)
}

export default LoggedSessions