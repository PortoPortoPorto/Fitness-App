import React from 'react'

const NavDate = () => {
	const currentDate = new Date(); 
	const formattedDate = currentDate.toISOString().split('T')[0]; 
	



	return (
		<>
		  <div className='border border-blue-200 rounded-md h-12 w-96 flex items-center justify-center cursor-pointer hover:bg-blue-200'>
			<p className='text-xl font-semibold'>{formattedDate}</p>
		  </div>	
		</>
	)
}

export default NavDate