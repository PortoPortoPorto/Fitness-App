import React from 'react';
import { useState, useEffect, useContext } from 'react'; 
import { GlobalContext } from '../context/GlobalState.jsx'; 
import CardioCard from './CardioCard.jsx';

const LoggedCardio = () => {
	const { cardioData } = useContext(GlobalContext); 


	return (
		<>
		  <div className='bg-blue-300 h-[275px] w-[220px] rounded-xl flex-col items-end justify-between cursor-pointer'>
		  	{cardioData.map(c => (<CardioCard key={c.id} cardio={c}/>))}
		  </div>
		</>
	)
}

export default LoggedCardio