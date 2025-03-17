import React from 'react';
import NavName from './NavName'; 
import NavDate from './NavDate';
import NavLogout from './NavLogout';
import NavOptions from './NavOptions';

const Nav = ({ dropdown, setDropdown }) => {
	return (
		<>
			<div className='flex items-center justify-around h-[70px] bg-blue-300 p-1 '>
				<NavName/>
				<NavDate/>
				<NavOptions/>
				<NavLogout dropdown={dropdown} setDropdown={setDropdown}/>
			</div>
			
		</>
	)
}

export default Nav