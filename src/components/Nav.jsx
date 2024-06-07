import React from 'react';
import NavName from './NavName'; 
import NavDate from './NavDate';
import NavLogout from './NavLogout';
import NavOptions from './NavOptions';

const Nav = () => {
	return (
		<>
			<div className='flex items-center justify-around h-14 bg-blue-300 p-1 '>
				<NavName/>
				<NavDate/>
				<NavOptions/>
				<NavLogout/>
			</div>
			
		</>
	)
}

export default Nav