import React from 'react';
import {createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer.jsx';

//Initial State 

const loadInitialState = () => {
	const storedState = localStorage.getItem('appData');
	return storedState ? JSON.parse(storedState) : {
		strengthData: [],
		cardioData: [],
		sessionData: []
	}
}

//Create Context 
export const GlobalContext = createContext(loadInitialState()); 

//Provider Component
export const GlobalProvider = ({ children }) => {
	const[state, dispatch] = useReducer(AppReducer, {}, loadInitialState); 

	//Update local storage whenever state changes
	useEffect(() => {
		localStorage.setItem('appData', JSON.stringify(state));
	}, [state]);

    // State to keep track of selected date 
	const currentDate = new Date(); 
	let formattedDate = currentDate.toISOString().split('T')[0]; 
	const [exerciseDate, setExerciseDate] = useState(formattedDate);

	// State to keep track of current view selection (byDate, dataSelect, or viewData)
	const [currentView, setCurrentView] = useState('byDate'); 

	//State to keep track of data category to view in viewData (cardio, strength, session)
	const [currentDataCat, setCurrentDataCat] = useState('')

	//State to keep track of date range selected when viewing data (weekly, monthly, quarterly)
	const [dateRange, setDateRange] = useState(''); 

	//State to keep track of starting date, determined by date range selection
	const [ startingDate, setStartingDate] = useState(''); 

	//Actions 
	const addStrengthExercise = (newStrengthExercise) => {
		dispatch({
			type: 'ADD_STRENGTH_EXERCISE',
			payload: newStrengthExercise
		});
	}

	const addCardioExercise = (newCardioExercise) => {
		dispatch({
			type: 'ADD_CARDIO_EXERCISE',
			payload: newCardioExercise
		});
	}

	const addSessionExercise = (newSessionExercise) => {
		dispatch({
			type: 'ADD_SESSION_EXERCISE',
			payload: newSessionExercise
		});
	}

	const removeStrengthExercise = (id) => {
		dispatch({
			type: 'REMOVE_STRENGTH_EXERCISE',
			payload: id
		});
	}

	const removeCardioExercise = (id) => {
		dispatch({
			type: 'REMOVE_CARDIO_EXERCISE',
			payload: id
		});
	}

	const removeSessionExercise = (id) => {
		dispatch({
			type: 'REMOVE_SESSION_EXERCISE',
			payload: id
		});
	}


	return (<GlobalContext.Provider value={{
		 strengthData: state.strengthData,
		 cardioData: state.cardioData,
		 sessionData: state.sessionData,
		 addStrengthExercise,
		 addCardioExercise,
		 addSessionExercise,
		 removeStrengthExercise,
		 removeCardioExercise,
		 removeSessionExercise,
		 exerciseDate,
		 setExerciseDate,
		 currentView,
		 setCurrentView,
		 currentDataCat,
		 setCurrentDataCat,
		 dateRange,
		 setDateRange,
		 startingDate,
		 setStartingDate
		}}>
			{children}
		</GlobalContext.Provider>);			
}