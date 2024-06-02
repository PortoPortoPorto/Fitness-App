import React, { useContext, useState } from 'react'; 
import { GlobalContext } from '../context/GlobalState.jsx'; 

const SessionsCard = ({session}) => {
	const { sessionData, removeSessionExercise, exerciseDate, currentUser }= useContext(GlobalContext);

	const removeExercise = () => {
		console.log('removing:', session.exercise, 'from storage and UI'); 
		removeSessionExercise(currentUser, session.id);
	};
	
	return (		
		<>
			{session.date === exerciseDate ?	 
				<>	{session.notes === '' ? <div className ='h-[40px] hover:bg-red-300 bg-blue-200 m-1 rounded-lg'
												 onClick={removeExercise}>
				  	   						<p className='text-lg font-semibold p-1 flex justify-center'>{session.exercise}: {session.time} mins </p>
				  	   					 </div> : 
				  	   					 <div className='h-[80px] hover:bg-red-300 bg-blue-200 m-1 rounded-lg'
				  	   					      onClick={removeExercise}>
									  		<p className='text-lg font-semibold p-1 flex justify-center'>{session.exercise}: {session.time} mins </p>
									  		<p className='text-sm italic p-1 flex justify-center'>{session.notes}</p>
									  	 </div>}
				</> : ''}
		</>
	)
}

export default SessionsCard