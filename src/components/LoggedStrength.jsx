import React from 'react';
import { useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 
import StrengthCard from './StrengthCard.jsx'; 

const LoggedStrength = () => {
	const {strengthData} = useContext(GlobalContext);



	return (
		<>
		  <div className='bg-blue-300 h-[220px] w-[165px] sm:h-[302px] sm:w-[242px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md m1 sm:m-2 md:m-0'>
		  	{strengthData.map(s => (<StrengthCard key={s.id} strength={s}/>))}
		  </div>
		</>
	)
}

export default LoggedStrength