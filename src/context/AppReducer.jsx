export default (state, action) => {
	let newState;
	switch(action.type) {
		case 'ADD_STRENGTH_EXERCISE':
			const { userId: addStrengthUserId, exercise: strengthExercise } = action.payload
			if(!state.users[addStrengthUserId]) {
				console.error(`User with ID ${addStrengthUserId} does not exist`);
				return;
			}

// Get the current user's strength exercises 
			const currentExercises = state.users[addStrengthUserId].strengthData;
			console.log(currentExercises, strengthExercise);

//find the index of the duplicate exercise, if it exists
			const duplicateIndex = currentExercises.findIndex(
				(e) => e.date === strengthExercise.date && e.exercise === strengthExercise.exercise);

			let updatedExercises;

			if(duplicateIndex !== -1) {
//if duplicate exists, update the exercise
				const updatedExercise = {
					...currentExercises[duplicateIndex],
					reps: parseInt(currentExercises[duplicateIndex].reps) + parseInt(strengthExercise.reps),
				};
//create a new array with the updated exercise 
				updatedExercises = [
					...currentExercises.slice(0, duplicateIndex),
					updatedExercise,
					...currentExercises.slice(duplicateIndex + 1)
					];
			} else {
// if no duplicate, add the new exercise 
				updatedExercises = [...currentExercises, strengthExercise];
			}		

//return the new state with the updated exercises 
			newState = {
				...state,
				users: {
					...state.users,
					[addStrengthUserId]: {
						...state.users[addStrengthUserId],
						strengthData: updatedExercises
					}
				} 
			};
			break;

		case 'ADD_CARDIO_EXERCISE':
			const { userId: addCardioUserId, exercise: cardioExercise } = action.payload
			if(!state.users[addCardioUserId]) {
				console.error(`User with ID ${addCardioUserId} does not exist`);
				return;
			}
// Get the current user's cardio exercises 
			const currentCardioExercises = state.users[addCardioUserId].cardioData;
			console.log(currentCardioExercises, cardioExercise);
	
//find the index of the duplicate exercise, if it exists
			const duplicateCardioIndex = currentCardioExercises.findIndex(
				(e) => e.date === cardioExercise.date && e.exercise === cardioExercise.exercise);

			let updatedCardioExercises;

			if(duplicateCardioIndex !== -1) {
//if duplicate exists, update the exercise
				const updatedCardioExercise = {
					...currentCardioExercises[duplicateCardioIndex],
					distance: parseInt(currentCardioExercises[duplicateCardioIndex].distance) + parseInt(cardioExercise.distance),
				};
//create a new array with the updated exercise 
				updatedCardioExercises = [
					...currentCardioExercises.slice(0, duplicateCardioIndex),
					updatedCardioExercise,
					...currentCardioExercises.slice(duplicateCardioIndex + 1)
					];
			} else {
// if no duplicate, add the new exercise 
				updatedCardioExercises = [...currentCardioExercises, cardioExercise];
			}		
//return the new state with the updated exercises 
			newState = {
				...state,
				users: {
					...state.users,
					[addCardioUserId]: {
						...state.users[addCardioUserId],
						cardioData: updatedCardioExercises
					}
				} 
			};
			break;

		case 'ADD_SESSION_EXERCISE':
			const { userId: addSessionUserId, exercise: sessionExercise } = action.payload
			if(!state.users[addSessionUserId]) {
				console.error(`User with ID ${addSessionUserId} does not exist`);
				return;
			}
// Get the current user's session exercises 
			const currentSessionExercises = state.users[addSessionUserId].sessionData;
			console.log(currentSessionExercises, sessionExercise);
	
//find the index of the duplicate exercise, if it exists
			const duplicateSessionIndex = currentSessionExercises.findIndex(
				(e) => e.date === sessionExercise.date && e.exercise === sessionExercise.exercise);

			let updatedSessionExercises;

			if(duplicateSessionIndex !== -1) {
//if duplicate exists, update the exercise
				const updatedSessionExercise = {
					...currentSessionExercises[duplicateSessionIndex],
					time: parseInt(currentSessionExercises[duplicateSessionIndex].time) + parseInt(sessionExercise.time),
				};
//create a new array with the updated exercise 
				updatedSessionExercises = [
					...currentSessionExercises.slice(0, duplicateSessionIndex),
					updatedSessionExercise,
					...currentSessionExercises.slice(duplicateSessionIndex + 1)
					];
			} else {
// if no duplicate, add the new exercise 
				updatedSessionExercises = [...currentSessionExercises, sessionExercise];
			}		
//return the new state with the updated exercises 
			newState = {
				...state,
				users: {
					...state.users,
					[addSessionUserId]: {
						...state.users[addSessionUserId],
						sessionData: updatedSessionExercises
					}
				} 
			};
			break;
		case 'REMOVE_STRENGTH_EXERCISE':
			const { userId: removeStrengthUserId, exerciseId: removeStrengthExId } = action.payload;
			if(!state.users[removeStrengthUserId]) {
				console.error(`User with ID ${removeStrengthUserId} does not exist`);
				return;
			}
			newState = {
				...state,
				users: {
					...state.users,
					[removeStrengthUserId]: {
						...state.users[removeStrengthUserId],
						strengthData: state.users[removeStrengthUserId].strengthData.filter(s => s.id !== removeStrengthExId )
					}
				}
			}
			break; 
		case 'REMOVE_CARDIO_EXERCISE':
			const { userId: removeCardioUserId, exerciseId: removeCardioExId } = action.payload;
			if(!state.users[removeCardioUserId]) {
				console.error(`User with ID ${removeCardioUserId} does not exist`);
				return;
			}
			newState = {
				...state,
				users: {
					...state.users,
					[removeCardioUserId]: {
						...state.users[removeCardioUserId],
						cardioData: state.users[removeCardioUserId].cardioData.filter(s => s.id !== removeCardioExId)
					}
				}
			}
			break; 	
		case 'REMOVE_SESSION_EXERCISE':
			const { userId: removeSessionUserId, exerciseId: removeSessionExId } = action.payload;
			if(!state.users[removeSessionUserId]) {
				console.error(`User with ID ${removeSessionUserId} does not exist`);
				return;
			}
			newState = {
				...state,
				users: {
					...state.users,
					[removeSessionUserId]: {
						...state.users[removeSessionUserId],
						sessionData: state.users[removeSessionUserId].sessionData.filter(s => s.id !== removeSessionExId)
					}
				}
			}
			break;
		case 'ADD_NEW_USER':
			const {newUserName, newPassword } = action.payload;
			newState = {
				...state,
				users: {
					...state.users, //spread existing users object
					[newUserName]: { // add new user object as a new key : value pair
						name: newUserName,
						password: newPassword, 
						strengthData: [],
						cardioData: [],
						sessionData: []
					}
				}
			} 
			break; 
		default:
			return state;
	}

	console.log('new state data:', newState);

	return newState; 
}