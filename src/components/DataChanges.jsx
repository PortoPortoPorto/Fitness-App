import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'; 

const DataChanges = ({strengthObject, cardioObject, sessionObject}) => {
	const {  currentDataCat, dateRange } = useContext(GlobalContext); 
	
	return (
		<>
		<div className='bg-blue-100 h-[500px] w-[400px] m-7 rounded-lg border-8 border-blue-300 flex flex-col justify-start items-center'>
			<h1 className='p-2 text-lg font-semibold'>PROGRESS</h1>
		</div>
		</>
	)
}

export default DataChanges