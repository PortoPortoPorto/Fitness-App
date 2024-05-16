import React from 'react';
import {createContext, useReducer } from 'react';
import AppReducer from './AppReducer.jsx';

//Initial State 

const initialState = {
	strengthData: [],
	cardioData:[],
	sessionData:[]
}

//Create Context 
export const GlobalContext = createContext(initialState); 

//Provider Component
export const GlobalProvider = ({ children }) => {
	const[state, dispatch] = useReducer(AppReducer, initialState); 

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
		})
	}


	return (<GlobalContext.Provider value={{
		 strengthData: state.strengthData,
		 cardioData: state.cardioData,
		 sessionData: state.sessionData,
		 addStrengthExercise,
		 addCardioExercise,
		 addSessionExercise
		}}>
			{children}
		</GlobalContext.Provider>);			
}