import React from 'react';
import { useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 
import StrengthCard from './StrengthCard.jsx'; 

const LoggedStrength = () => {
	const {strengthData} = useContext(GlobalContext);



	return (
		<>
		  <div className='bg-blue-300 h-[275px] w-[220px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md'>
		  	{strengthData.map(s => (<StrengthCard key={s.id} strength={s}/>))}
		  </div>
		</>
	)
}

export default LoggedStrength