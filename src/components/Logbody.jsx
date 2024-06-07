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
import DataBody from './DataBody.jsx';



const Logbody = () => {
	const { strengthData, cardioData, sessionData, currentView } = useContext(GlobalContext); 


	return (
		<>{/* View Daily Log / Data Select Options / Data View Options*/}
		 	{currentView === 'byDate' ? (		
				  <div className='h-[720px] bg-blue-400 shadow-md'> 
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
				  <div className='h-[720px] bg-blue-400 shadow-md'> 
				 	<DataSelectHeader/>
					<div className='h-[400px] flex justify-around m-4'>
						<SelectCardio/>
						<SelectStrength/>
						<SelectSessions/>
					</div>			 	
				  </div>) 

				: (	<div className='h-[720px] bg-blue-400'> 
				 	<DataHeader/>	
					<DataBody/>
				  </div>) 
		    } 		  
		</>
	)
}

export default Logbody