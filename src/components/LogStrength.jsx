import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import StrengthModal from './StrengthModal.jsx';

const LogStrength = () => {

	const [modalToggled, setModalToggled] = useState(false); 

	const modalOn = () => {
		setModalToggled(true);
	}


	return (
		<>
		  <div className='bg-blue-200 h-[275px] w-[220px] rounded-xl flex-col items-end justify-between cursor-pointer'
		  	onClick={modalOn}>
		  	<div className='p-2 h-[150px] w-[220px] flex items-center justify-center'>
		  	    <FontAwesomeIcon icon={faDumbbell} className='text-6xl'/>
		  	</div>
			<div className='p-2 h-[100px] w-[220px] flex items-end justify-center'><p className='font-semibold text-2xl'>STRENGTH</p></div>
		  </div>
		  {modalToggled ? <StrengthModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : '' }
		</>

	)
}

export default LogStrength