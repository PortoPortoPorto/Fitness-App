import React from 'react';
import { useState, useEffect, useContext } from 'react'; 
import { GlobalContext } from '../context/GlobalState.jsx'; 
import CardioCard from './CardioCard.jsx';


const LoggedCardio = () => {
	const { cardioData } = useContext(GlobalContext); 
	const [ isMounted, setIsMounted ] = useState(false); 

	useEffect(() => {
		if(!isMounted) {
			setIsMounted(true);
			return;
		}
		console.log('cardio data length:', cardioData.length); 
	}, [cardioData]);


	return (
		<>
		  <div className='bg-blue-300 h-[250px] w-[200px] rounded-xl flex-col items-end justify-between cursor-pointer'>
		  	{cardioData.map(c => (<CardioCard key={c.id} cardio={c}/>))}
		  </div>
		</>
	)
}

export default LoggedCardio