import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonRunning} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import CardioModal from './CardioModal.jsx';

const LogCardio = () => {
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
		  <div className='bg-blue-200 h-[220px] w-[165px] sm:h-[275px] sm:w-[220px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md ml-1 mr-0 sm:m-2'
		       onClick={modalOn}
		       onMouseEnter={toggleHighlight}
		       onMouseLeave={toggleHighlight}>
		  	<div className='p-2 h-[120px] w-[165px] sm:h-[150px] sm:w-[220px] flex items-center justify-center'>
		  		{ imageHighlighted  ? <FontAwesomeIcon icon={faPersonRunning} className='text-6xl'/>
		  		  : <FontAwesomeIcon icon={faPersonRunning} className='text-7xl text-blue-400'/>
		  		}
		  	</div>
			<div className='p-2 h-[80px] w-[165px] sm:h-[100px] sm:w-[220px] flex items-end justify-center'>
				{ imageHighlighted  ? <p className='font-semibold text-2xl'>CARDIO</p>
				  : <p className='font-semibold text-3xl text-blue-400'>CARDIO</p>
				}
			</div>
		  </div>
		  {modalToggled ? <CardioModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : '' }
		</>

	)
}

export default LogCardio