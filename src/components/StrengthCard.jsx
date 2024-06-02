import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx';

const StrengthCard = ({strength}) => {
	const { strengthData, removeStrengthExercise, exerciseDate, currentUser } = useContext(GlobalContext); 
	
	const removeExercise = () => {
		console.log('removing:', strength.exercise, 'from storage and UI'); 
		removeStrengthExercise(currentUser, strength.id)
	}

	return (		
		<>
			{strength.date === exerciseDate ?
				<> {strength.notes === '' ? <div className ='h-[40px] hover:bg-red-300 bg-blue-200 m-1 rounded-lg'
											  onClick={removeExercise}>
			  	   							<p className='text-lg font-semibold p-1 flex justify-center'>{strength.exercise}: {strength.reps} reps </p>
			  	   					 	 </div> : 
			  	   					 	 <div className='h-[80px] hover:bg-red-300 bg-blue-200 m-1 rounded-lg'
			  	   					 	 	  onClick={removeExercise}>
								  			<p className='text-lg font-semibold p-1 flex justify-center'>{strength.exercise}: {strength.reps} reps </p>
								  			<p className='text-sm italic p-1 flex justify-center'>{strength.notes}</p>
								  		 </div>} 
				</> : ''}			
		</>
	)
}

export default StrengthCard