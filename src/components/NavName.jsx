import React, { useState, useEffect } from 'react';
import UserModal from './UserModal.jsx';

const NavName = () => {
	const [modalToggled, setModalToggled ] = useState(false);

	const modalOn = () => {
		setModalToggled(true);
	}

	return (
		<>
		  <div className='border border-blue-200 rounded-md h-12 w-96 flex items-center justify-center cursor-pointer hover:bg-blue-200'
		  	   onClick={modalOn}>
			<p className='text-xl font-semibold'>User Name</p>
		  </div>
		  	{modalToggled  ? <UserModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : ''}	
		</>
	)
}

export default NavName