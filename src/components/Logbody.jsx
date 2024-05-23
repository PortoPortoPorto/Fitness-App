import React from 'react';
import { useContext, useEffect } from 'react'; 
import { GlobalContext } from '../context/GlobalState.jsx';
import LogHeader from './LogHeader.jsx';
import LogCardio from './LogCardio.jsx';
import LogStrength from './LogStrength.jsx'; 
import LogSessions from './LogSessions.jsx'; 
import LoggedCardio from './LoggedCardio.jsx';
import LoggedStrength from './LoggedStrength.jsx';
import LoggedSessions from './LoggedSessions.jsx';
import SelectCardio from './SelectCardio.jsx';
import SelectStrength from './SelectStrength.jsx'; 
import SelectSessions from './SelectSessions.jsx'; 
import DataSelectHeader from './DataSelectHeader.jsx'; 
import DataHeader from './DataHeader.jsx'; 
import DataTotals from './DataTotals.jsx';
import DataAverages from './DataAverages.jsx';
import DataChanges from './DataChanges.jsx'; 



const Logbody = () => {
	const { strengthData, cardioData, sessionData, currentView } = useContext(GlobalContext); 

	useEffect(() => {
		console.log(strengthData, cardioData, sessionData);
	}, [strengthData, cardioData, sessionData]);



	return (
		<>{/* View Daily Log / Data Select Options / Data View Options*/}
		 	{currentView === 'byDate' ? (		
				  <div className='h-[720px] bg-blue-400'> 
					<LogHeader/>
					<div className='h-[280px] flex justify-around m-4'>
						<LogCardio/>
						<LogStrength/>
						<LogSessions/>
					</div>
					<div className='h-[280px] flex justify-around m-5'>
						<LoggedCardio/>
						<LoggedStrength/>
						<LoggedSessions/>
					</div>
				  </div>
	 			)

				: currentView === 'dataSelect' ? (
				  <div className='h-[720px] bg-blue-400'> 
				 	<DataSelectHeader/>
					<div className='h-[400px] flex justify-around m-4'>
						<SelectCardio/>
						<SelectStrength/>
						<SelectSessions/>
					</div>			 	
				  </div>) 

				: (	<div className='h-[720px] bg-blue-400'> 
				 	<DataHeader/>	
					<div className='flex m-4 p-4'>	
					 	<DataTotals/>
					 	<DataAverages/>
					 	<DataChanges/> 
					</div>
				  </div>) 
		    } 		  
		</>
	)
}

export default Logbody