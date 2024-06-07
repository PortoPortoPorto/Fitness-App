import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import DataModal from './DataModal.jsx'; 

const LogStrength = () => {

	const [dataModalToggled, setDataModalToggled] = useState(false); 

	const modalOn = () => {
		setDataModalToggled(true);
	}


	return (
		<>
		  <div className='bg-blue-200 hover:bg-blue-100 hover:text-blue-400 h-[400px] w-[300px] rounded-xl flex-col items-end justify-between cursor-pointer shadow-md'
		  	onClick={modalOn}>
		  	<div className='p-2 h-[250px] w-[300px] flex items-center justify-center'>
		  	    <FontAwesomeIcon icon={faDumbbell} className='text-8xl'/>
		  	</div>
			<div className='p-2 h-[130px] w-[300px] flex items-end justify-center'><p className='font-semibold text-2xl'>STRENGTH</p></div>
		  </div>
		  {dataModalToggled ? <DataModal dataModalToggled={dataModalToggled} setDataModalToggled={setDataModalToggled} keyNumber={2}/> : '' }
		</>

	)
}

export default LogStrength