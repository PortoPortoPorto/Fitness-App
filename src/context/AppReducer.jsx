export default (state, action) => {
	let newState;
	switch(action.type) {
		case 'ADD_STRENGTH_EXERCISE':
			const { userId: addStrengthUserId, exercise: strengthExercise } = action.payload
			if(!state.users[addStrengthUserId]) {
				console.error(`User with ID ${addStrengthUserId} does not exist`);
				return;
			}
			newState = {
				...state,
				users: {
					...state.users,
					[addStrengthUserId]: {
						...state.users[addStrengthUserId],
						strengthData: [strengthExercise , ...state.users[addStrengthUserId].strengthData]
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
			newState = {
				...state,
				users: {
					...state.users,
					[addCardioUserId]: {
						...state.users[addCardioUserId],
						cardioData: [cardioExercise, ...state.users[addCardioUserId].cardioData]
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
			newState = {
				...state,
				users: {
					...state.users,
					[addSessionUserId]: {
						...state.users[addSessionUserId],
						sessionData: [sessionExercise , ...state.users[addSessionUserId].sessionData]
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