import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import SessionsModal from './SessionsModal.jsx'; 

const LogSessions = () => {

	const [modalToggled, setModalToggled] = useState(false); 

	const modalOn = () => {
		setModalToggled(true);
	}

	return (
		<>
		  <div className='bg-blue-200 hover:bg-blue-100 hover:text-blue-400 h-[400px] w-[300px] rounded-xl flex-col items-end justify-between cursor-pointer'
		  		onClick={modalOn}>
		  	<div className='p-2 h-[250px] w-[300px] flex items-center justify-center'>
		  		<FontAwesomeIcon icon={faStopwatch} className='text-8xl'/>
		  	</div>
			<div className='p-2 h-[130px] w-[300px] flex items-end justify-center'><p className='font-semibold text-2xl'>SESSIONS</p></div>
		  </div>
		  {modalToggled ? <SessionsModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : '' }
		</>
	)
}

export default LogSessions