import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx'; 

const CardioCard = ({cardio}) => {
	const { cardioData, removeCardioExercise, exerciseDate, currentUser } = useContext(GlobalContext);
	
	const removeExercise = (e) => {
		removeCardioExercise(currentUser, cardio.id); 
	}


	return (
		<>
			{cardio.date === exerciseDate ?  
			    <> {cardio.notes === '' ? <div className ='h-[40px] hover:bg-red-300 bg-blue-200 m-1 rounded-lg'
			  							  onClick={removeExercise}>
			  	   						<p className='text-lg font-semibold p-1 flex justify-center'>{cardio.exercise}: {cardio.distance} km </p>
			  	   					 </div> : 
			  	   					 <div className='h-[80px] hover:bg-red-300 bg-blue-200 m-1 rounded-lg'
			  	   					      onClick={removeExercise}>
								  		<p className='text-lg font-semibold p-1 flex justify-center'>{cardio.exercise}: {cardio.distance} km </p>
								  		<p className='text-sm italic p-1 flex justify-center'>{cardio.notes}</p>
								  	 </div>} 
				</> : ''}
		</>




	)
}

				



export default CardioCard