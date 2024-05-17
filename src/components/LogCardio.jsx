import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonRunning} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import CardioModal from './CardioModal.jsx';

const LogCardio = () => {

	const [modalToggled, setModalToggled] = useState(false); 

	const modalOn = () => {
		setModalToggled(true);
	}



	return (
		<>
		  <div className='bg-blue-200 h-[275px] w-[220px] rounded-xl flex-col items-end justify-between cursor-pointer'
		       onClick={modalOn}>
		  	<div className='p-2 h-[150px] w-[220px] flex items-center justify-center'>
		  		<FontAwesomeIcon icon={faPersonRunning} className='text-6xl'/>
		  	</div>
			<div className='p-2 h-[100px] w-[220px] flex items-end justify-center'><p className='font-semibold text-2xl'>CARDIO</p></div>
		  </div>
		  {modalToggled ? <CardioModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : '' }
		</>

	)
}

export default LogCardio