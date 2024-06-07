import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import SessionsModal from './SessionsModal.jsx'; 

const LogSessions = () => {
	const [imageHighlighted, setImageHighlighted] = useState(true);
	const [modalToggled, setModalToggled] = useState(false); 

	const modalOn = () => {
		setModalToggled(true);
	}
	
	const toggleHighlight = () => {
		imageHighlighted ? setImageHighlighted(false) : setImageHighlighted(true);
	}

	return (
		<>
		  <div className='bg-blue-200 h-[275px] w-[220px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md m-2 md:m-0'
		  	   onClick={modalOn}
		  	   onMouseEnter={toggleHighlight}
			   onMouseLeave={toggleHighlight}>
		  	<div className='p-2 h-[150px] w-[220px] flex items-center justify-center'>
		  		{ imageHighlighted  ? <FontAwesomeIcon icon={faStopwatch} className='text-6xl'/>
		  		  : <FontAwesomeIcon icon={faStopwatch} className='text-7xl text-blue-400'/>
		  		}
		  	</div>
			<div className='p-2 h-[100px] w-[220px] flex items-end justify-center'>
				{ imageHighlighted  ? <p className='font-semibold text-2xl'>SESSIONS</p>
				  : <p className='font-semibold text-3xl text-blue-400'>SESSIONS</p>
				}
			</div>
		  </div>
		  {modalToggled ? <SessionsModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : '' }
		</>
	)
}

export default LogSessions