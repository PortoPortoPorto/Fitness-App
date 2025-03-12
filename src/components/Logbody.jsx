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



const Logbody = ({ dropdown, setDropdown }) => {
	const { strengthData, cardioData, sessionData, currentView, userData} = useContext(GlobalContext); 


	return (
		<>{/* View Daily Log / Data Select Options / Data View Options*/}
		 	{currentView === 'byDate' ? (		
				  <div className='h-[1000px] bg-blue-400 shadow-md md:h-[720px]'> 
					<LogHeader dropdown={dropdown} setDropdown={setDropdown}/>
					<div className='flex flex-row md:flex md:flex-col justify-center'>
						<div className='h-[800px] flex flex-col justify-around m-[2px] sm:m-4 md:flex md:flex-row md:h-[280px]'>
							<LogCardio/>
							<LogStrength/>
							<LogSessions/>
						</div>
						<div className='h-[800px] flex flex-col justify-around m-[2px] sm:m-4 md:flex md:flex-row md:h-[280px]'>
							<LoggedCardio/>
							<LoggedStrength/>
							<LoggedSessions/>
						</div>
					</div>
				  </div>
	 			)

				: currentView === 'dataSelect' ? (
				  <div className='h-[1400px] bg-blue-400 shadow-md lg:h-[720px] flex flex-col justify-start items-center'> 
				 	<DataSelectHeader dropdown={dropdown} setDropdown={setDropdown}/>
					<div className='h-[800px] flex flex-col justify-around m-4  lg:flex lg:flex-row lg:h-[400px] lg:w-[1000px] lg:justify-around'>
						<SelectCardio/>
						<SelectStrength/>
						<SelectSessions/>
					</div>			 	
				  </div>) 

				: (	<div className='h-[1800px] bg-blue-400 shadow-md xl:h-[720px] flex flex-col justify-start items-center'> 
				 	<DataHeader dropdown={dropdown} setDropdown={setDropdown}/>	
					<DataBody/>
				  </div>) 
		    } 		  
		</>
	)
}

export default Logbody