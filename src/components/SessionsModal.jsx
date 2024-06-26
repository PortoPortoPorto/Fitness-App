import React from 'react';
import { useState, useContext, useEffect } from 'react'; 
import { GlobalContext } from '../context/GlobalState.jsx'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';

const SessionsModal = ({modalToggled, setModalToggled}) => {
	const [exercise, setExercise] = useState('Yoga');
	const [time, setTime] = useState(0);
	const [notes, setNotes] = useState(''); 
	const [ errorMessage, setErrorMessage ] = useState(false);
	const { sessionData, addSessionExercise, exerciseDate, currentUser } = useContext(GlobalContext); 

	const modalOff = () => {
		setModalToggled(false);  
	}

	const submitData = () => {
//check that time has been filled, if not, setErrorMessage and return 		
		if(time === 0) {
			setErrorMessage('Please enter total time')
			return;
		}
		else {			
			const newSessionExercise = {
				date: exerciseDate,
				exercise: exercise,
				time: time,
				notes: notes,
				id: sessionData.length + 1
			}
			addSessionExercise(currentUser, newSessionExercise); 
			modalOff();
		} 
	}

	useEffect(() => {
		if(errorMessage === false )return;
		else{
			setTimeout(() => {
				setErrorMessage(false); 
			}, 2000);
		}
	}, [errorMessage])


	return (
			/* HTML */
			<div className="fixed z-10 inset-0 overflow-y-auto">
			  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			    {/* Overlay */}
			    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
			      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
			    </div>

			    {/* Modal Panel */}
			    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
			    <div className="inline-block align-bottom bg-blue-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
			      {/* Modal Content */}
			      <div className="bg-blue-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
			        {/*  Modal Title */}
			        <div className="sm:flex sm:items-start">
			          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
			            {/*  Icon Here */}
			            <FontAwesomeIcon icon={faStopwatch} className='text-4xl'/>
			          </div>
			          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
 						{/* MODAL TITLE / ERROR MESSAGE DIV */}
	{errorMessage === false ? <div className='h-[40px] m-1 p-1'><h3 className="text-lg leading-6 font-semibold text-gray-900" id="modal-title">
			                      Select Session Exercise
			            	  </h3></div>
			              	: <div className='h-[40px] w-[280px] sm:w-[300px] m-1 p-1 bg-red-300 border border-red-400 rounded-md italic text-lg font-semibold'>
			              		 {errorMessage}
			              	  </div>}
			            {/*  Modal Description */}
			            <div className="mt-2 h-[260px] w-[350px] flex flex-col items-start justify-start">
			              <div className="h-[70px] flex items-center justify-around m-1 sm:m-2">
			              	<p className="text-medium font-semibold p-2 mr-14 sm:mr-16">Type:</p>
			        		<select className='h-[50px] w-[150px] border border-blue-100 rounded-md' 
			        			    placeholder='Select Exercise'
			        			    onClick={(e) => setExercise(e.target.value)}>
			        			<option>Yoga</option>
			        			<option>Pilates</option>
			        			<option>Spin</option>
			        			<option>Zumba</option>
			        			<option>Boxing</option>
			        		</select>		        				
			              </div>
			              <div className="h-[70px] flex items-center justify-around m-1 sm:m-2">
			              	<p className="text-medium font-semibold p-2 mr-2 sm:mr-6">Total Time:</p>
			              	<input className='h-[50px] w-[135px] rounded-md p-2 mr-2' type='text' 
			              		   placeholder='enter duration'
			              		   onChange={(e) => setTime(e.target.value)}>			              		   	
			              	</input>
			              	<p className="text-medium font-semibold">Mins</p>
			              </div>
			              <div className="h-[80px] flex items-center justify-around m-1 sm:m-2">
			              	<p className="text-medium font-semibold p-2 mr-2 sm:mr-14">Notes:</p>
			              	<input className='h-[80px] rounded-md p-2' type='text' 
			              		   placeholder='enter notes'
			              		   onChange={(e) => setNotes(e.target.value)}>			              		   	
			              	</input>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  Modal Footer */}
			      <div className="bg-blue-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
			        <button type="button" 
			        		className="w-full inline-flex justify-center rounded-md border 
			        		border-transparent shadow-sm px-4 py-2 bg-green-600 text-base 
			        		font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 
			        		focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
			        		onClick={submitData}>
			          Accept
			        </button>
			        <button type="button" 
			        		className="mt-3 w-full inline-flex justify-center rounded-md border 
			        		border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 
			        		hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
			        		sm:mt-0 sm:w-auto sm:text-sm"
			        		onClick={modalOff}>
			          Cancel
			        </button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}		

export default SessionsModal