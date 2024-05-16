import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const CardioCard = ({cardio}) => {

	return (
		<>
		       <div className='h-[100px] w-[190px] bg-blue-200 m-1 rounded-lg'>
		  			<p className='text-lg font-semibold p-1 flex justify-center'>{cardio.exercise}: {cardio.distance} km </p>
		  			{cardio.notes === '' ? '' : <p className='italic p-1 flex justify-center'>{cardio.notes}</p>}
		  	   </div> 
		</>
	)
}

export default CardioCard