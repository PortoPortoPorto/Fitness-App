import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.jsx';  
 
const UserModal = ({modalToggled, setModalToggled}) => {
	const [ newUserName, setNewUserName ] = useState('');
	const [ returningUserName, setReturningUserName ] = useState('');
	const [ newPassword, setNewPassword ] = useState('');
	const [ returningPassword, setReturningPassword ] = useState('');
	const { userData, addNewUser, currentUser, setCurrentUser } = useContext(GlobalContext);


	const modalOff = () => {
		console.log('modal off!')
		setModalToggled(false);
	}

	const handleNewUser = (event) => {
		console.log('handling new user');
		setNewUserName(event.target.value);
	}

	const handleReturningUser = (event) => {
		console.log('handling returning user');
		setReturningUserName(event.target.value);
	}

	const handleReturningPassword = (event) => {
		console.log('handling returning password');
		setReturningPassword(event.target.value);
	}

	const handleNewPassword = (event) => {
		console.log('handling new password');
		setNewPassword(event.target.value);
	}

	const userCheck = () => {
		console.log('checking user:', userData);
		if(!newUserName && !returningUserName){console.error('please enter a name');return;}
		else if(newUserName && returningUserName){console.error('please select 1 option');return;}
		else if(newUserName && !newPassword){console.error('please enter a new password');return;}
		else if(returningUserName && !returningPassword){console.error('please enter your password');return;}
	// If new user name and password, check to see if it already exists - if not, creat new user object in localStorage (GlobalState)
		else if(newUserName && newPassword) {
			if(userData[newUserName]){console.error(`user name ${newUserName} already exists`);return;}
			else {
				console.log('setting new user');
				addNewUser(newUserName, newPassword);
				console.log(`new user set: NAME: ${newUserName} PASSWORD: ${newPassword}`);
				setCurrentUser(newUserName);
				console.log(`signed in as user: ${newUserName}`);

			} 
	//If returning user name and password, check to see if it already exists, if so, set that user in the global state, if not, return an error
		} else if(returningUserName && returningPassword) {
			if(!userData[returningUserName]){console.error(`user name ${returningUserName} doesn't exist. Please check and try again!`);return;}
			else if(userData[returningUserName].password !== returningPassword){console.error('password incorrect. Please check and try again.');return;}
			else {
				setCurrentUser(returningUserName);
				console.log(`signed in as user: ${returningUserName}`);
			} 
		} 
		modalOff();
	}


	useEffect(() => {
		console.log('current user:', currentUser);
	}, [currentUser]);


	return (
			/* HTML */
			<div className="fixed z-10 inset-0 overflow-y-auto">
			  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			    {/* Overlay */}
			    <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={modalOff}>
			      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
			    </div>

			    {/* Modal Panel */}
			    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
			    <div className="inline-block align-bottom bg-blue-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
			      {/* Modal Content */}
			      <div className="bg-blue-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
			        {/*  Modal Title */}
			        <div className="sm:flex sm:items-start">
			          <div className="mt-3 text-center flex flex-col items-center ">
			            <h3 className="text-lg leading-6 font-semibold text-gray-900" id="modal-title">
			              Select User
			            </h3>
			            {/*  Modal Body */}
			            <div className="mt-2 h-[240px] w-[470px] flex flex-col items-around justify-around">
			            {/*Existing User */}
			              <div className="h-[60px] flex items-center justify-start">
			              	<p className="text-medium font-semibold m-1 p-2">Returning:</p>
			        		<input className='h-[50px] w-[150px] m-2 p-2 border border-blue-100 rounded-md' 
			        			    placeholder='Enter user name'
			        			    onChange={handleReturningUser}>
			        		</input>
			        		<input className='h-[50px] w-[150px] m-2 p-2 border border-blue-100 rounded-md' 
			        			    placeholder='Enter password'
			        			    onChange={handleReturningPassword}>
			        		</input>		        				
			              </div>
			              {/*New User */}
			              <div className="h-[60px] flex items-center justify-start">
			              	<p className="text-medium font-semibold m-1 p-2">New:</p>
			        		<input className='h-[50px] w-[150px] m-2 p-2 border border-blue-100 rounded-md' 
			        			    placeholder='Enter user name'
			        			    onChange={handleNewUser}>
			        		</input>
			        		<input className='h-[50px] w-[150px] m-2 p-2 border border-blue-100 rounded-md' 
			        			    placeholder='Enter password'
			        			    onChange={handleNewPassword}>
			        		</input>		        				
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  Modal Footer */}
			      <div className="bg-blue-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
			        <button type="button" 
			        		className="w-full inline-flex justify-center rounded-md border 
			        		border-transparent shadow-sm px-4 py-2 bg-green-600 text-base 
			        		font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 
			        		focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
			        		onClick={userCheck}>
			          Accept
			        </button>
			        <button type="button" 
			        		className="mt-3 w-full inline-flex justify-center rounded-md border 
			        		border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 
			        		hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
			        		sm:mt-0 sm:w-auto sm:text-sm"
			        		onClick={modalOff}>
			          Cancel
			        </button>
			      </div>
			    </div>
			  </div>
			</div>
	)
}

export default UserModal