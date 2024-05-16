import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import StrengthModal from './StrengthModal.jsx';

const LogStrength = () => {

	const [modalToggled, setModalToggled] = useState(false); 

	useEffect(() => {
		console.log(modalToggled); 
	}, [modalToggled]);

	const modalOn = () => {
		setModalToggled(true);
	}


	return (
		<>
		  <div className='bg-blue-200 h-[250px] w-[200px] rounded-xl flex-col items-end justify-between cursor-pointer'
		  	onClick={modalOn}>
		  	<div className='p-2 h-[150px] w-[200px] flex items-center justify-center'>
		  	    <FontAwesomeIcon icon={faDumbbell} className='text-6xl'/>
		  	</div>
			<div className='p-2 h-[100px] w-[200px] flex items-end justify-center'><p className='font-semibold text-xl'>STRENGTH</p></div>
		  </div>
		  {modalToggled ? <StrengthModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : '' }
		</>

	)
}

export default LogStrength