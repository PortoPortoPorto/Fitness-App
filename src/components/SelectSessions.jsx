import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import DataModal from './DataModal.jsx'; 

const LogSessions = () => {

	const [dataModalToggled, setDataModalToggled] = useState(false); 

	const modalOn = () => {
		setDataModalToggled(true);
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
		  {dataModalToggled ? <DataModal dataModalToggled={dataModalToggled} setDataModalToggled={setDataModalToggled} keyNumber={3}/> : '' }
		</>
	)
}

export default LogSessions