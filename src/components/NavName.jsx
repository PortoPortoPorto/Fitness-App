import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx';
import UserModal from './UserModal.jsx';

const NavName = () => {
	const [modalToggled, setModalToggled ] = useState(false);
	const {currentUser} = useContext(GlobalContext);
	const loggedOut = currentUser === 'userId1';
	const modalOn = () => {
		setModalToggled(true);
	}

	return (
		<>
		  <div className='border border-blue-200 rounded-md h-12 w-96 flex items-center justify-center cursor-pointer hover:bg-blue-200'
		  	   onClick={modalOn}>
			{ loggedOut ?  <p className='text-2xl text-blue-100 font-semibold'>Sign in</p> 
						:  <p className='text-2xl text-blue-500 font-semibold'>{currentUser}</p>
			}			
		  </div>
		  	{modalToggled  ? <UserModal modalToggled={modalToggled} setModalToggled={setModalToggled}/> : ''}	
		</>
	)
}

export default NavName