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
		  <div className='bg-blue-200 h-[220px] w-[165px] sm:h-[302px] sm:w-[242px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md ml-1 mr-0 sm:m-2'
		  	   onClick={modalOn}
		  	   onMouseEnter={toggleHighlight}
			   onMouseLeave={toggleHighlight}>
		  	<div className='p-2 h-[120px] w-[165px] sm:h-[150px] sm:w-[242px] flex items-center justify-center'>
		  		{ imageHighlighted  ? <FontAwesomeIcon icon={faStopwatch} className='text-6xl'/>
		  		  : <FontAwesomeIcon icon={faStopwatch} className='text-7xl text-blue-400'/>
		  		}
		  	</div>
			<div className='p-2 h-[80px] w-[165px] sm:h-[100px] sm:w-[242px] flex items-end justify-center'>
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