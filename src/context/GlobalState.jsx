import React from 'react';
import {createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer.jsx';

//Initial State 

const loadInitialState = () => {
	const storedState = localStorage.getItem('appData');
	console.log(JSON.parse(storedState)); 
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
		 removeSessionExercise
		}}>
			{children}
		</GlobalContext.Provider>);			
}