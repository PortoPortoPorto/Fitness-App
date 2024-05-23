import React from 'react';
import {useState, useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState.jsx';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonRunning, faStopwatch, faDumbbell} from '@fortawesome/free-solid-svg-icons';

const DataModal = ({ dataModalToggled, setDataModalToggled, keyNumber}) => {
	const { currentView, setCurrentView, currentDataCat, setCurrentDataCat, dateRange, setDateRange } = useContext(GlobalContext); 

	const dataModalOff = () => {
		setDataModalToggled(false);
	}

	const dateRangeSelect = (e) => {
		setDateRange(e); 
	}

	useEffect(() => {
		console.log('date range set at:', dateRange); 
	}, [dateRange]);

	const changeView = () => {
		setCurrentDataCat(keyNumber); 
		setCurrentView('viewData');
		dataModalOff(); 
	}

	return (
			/* HTML */
			<div className="fixed z-10 inset-0 overflow-y-auto">
			  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			    {/* Overlay */}
			    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
			      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
			    </div>

			    {/* Modal Panel */}
			    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
			    <div className="inline-block align-bottom bg-blue-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
			      {/* Modal Content */}
			      <div className="bg-blue-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
			        {/*  Modal Title */}
			        <div className="sm:flex sm:items-start">
			          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
			            {/*  Icon Here */}
			            {keyNumber > 2 ? (<FontAwesomeIcon icon={faStopwatch} className='text-4xl'/>) : keyNumber > 1 ? (
			            	<FontAwesomeIcon icon={faDumbbell} className='text-4xl'/>) : (<FontAwesomeIcon icon={faPersonRunning} className='text-4xl'/>)} 
			          </div>
			          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
			            <h3 className="text-lg leading-6 font-semibold text-gray-900" id="modal-title">
			              Select Data Range
			            </h3>
			            {/*  Modal Description */}
			            <div className="mt-4 h-[200px] w-[350px] flex flex-col items-around justify-around">
			              <div className="h-[60px] flex items-center justify-around">
			              	<button className ='bg-blue-100 rounded-lg h-[50px] w-[150px] border-solid border-blue-400 
			              						border text-lg font-semibold hover:border-blue-100 hover:bg-blue-300 
			              						focus:bg-blue-300 focus:border-blue-100'
			              			onClick={() => dateRangeSelect('1 week')}>
			              		1 week
			              	</button>	        				
			              </div>
			              <div className="h-[60px] flex items-center justify-around">
			              	<button className ='bg-blue-100 rounded-lg h-[50px] w-[150px] border-solid border-blue-400 
			              						border text-lg font-semibold hover:border-blue-100 hover:bg-blue-300
			              						focus:bg-blue-300 focus:border-blue-100'
			              			onClick={() => dateRangeSelect('1 month')}>
			              		1 month
			              	</button>
				          </div>
			              <div className="h-[60px] flex items-center justify-around">
			              	<button className ='bg-blue-100 rounded-lg h-[50px] w-[150px] border-solid border-blue-400 
			              						border text-lg font-semibold hover:border-blue-100 hover:bg-blue-300
			              						focus:bg-blue-300 focus:border-blue-100'
			              			onClick={() => dateRangeSelect('3 months')}>
			              		3 months
			              	</button>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  Modal Footer */}
			      <div className="bg-blue-200 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
			        <button type="button" 
			        		className="w-full inline-flex justify-center rounded-md border 
			        		border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium 
			        		text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
			        		focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
			        		onClick={changeView}
			        		>
			          Accept
			        </button>
			        <button type="button" 
			        		className="mt-3 w-full inline-flex justify-center rounded-md border 
			        		border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 
			        		hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
			        		sm:mt-0 sm:w-auto sm:text-sm"
			        		onClick={dataModalOff}
			        		>
			          Cancel
			        </button>
			      </div>
			    </div>
			  </div>
			</div>
		)
}

export default DataModal