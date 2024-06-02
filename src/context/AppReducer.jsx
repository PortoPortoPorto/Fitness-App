export default (state, action) => {
	let newState;
	switch(action.type) {
		case 'ADD_STRENGTH_EXERCISE':
			const { userId: addUserId, exercise } = action.payload
			if(!state.users[addUserId]) {
				console.error(`User with ID ${addUserId} does not exist`);
				return;
			}
			newState = {
				...state,
				users: {
					...state.users,
					[addUserId]: {
						...state.users[addUserId],
						strengthData: [exercise, ...state.users[addUserId].strengthData]
					}
				} 
			};
			break;
		case 'ADD_CARDIO_EXERCISE':
			newState = {
				...state,
				cardioData: [action.payload, ...state.cardioData]
			};
			break;
		case 'ADD_SESSION_EXERCISE':
			newState = {
				...state,
				sessionData: [action.payload, ...state.sessionData]
			};
			break;
		case 'REMOVE_STRENGTH_EXERCISE':
			const { userId: removeUserId, exerciseId } = action.payload;
			if(!state.users[removeUserId]) {
				console.error(`User with ID ${removeUserId} does not exist`);
				return;
			}
			newState = {
				...state,
				users: {
					...state.users,
					[removeUserId]: {
						...state.users[removeUserId],
						strengthData: state.users[removeUserId].strengthData.filter(s => s.id !== exerciseId)
					}
				}
			}
			break; 
		case 'REMOVE_CARDIO_EXERCISE':
			newState = {
				...state, 
				cardioData: state.cardioData.filter(c => c.id !== action.payload)
			};
			break; 	
		case 'REMOVE_SESSION_EXERCISE':
			newState = {
				...state,
				sessionData: state.sessionData.filter(s => s.id !== action.payload)
			}
			break; 
		default:
			return state;
	}

	console.log('new state data:', newState);

	return newState; 
}