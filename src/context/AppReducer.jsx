export default (state, action) => {
	let newState;
	switch(action.type) {
		case 'ADD_STRENGTH_EXERCISE':
			newState = {
				...state, 
				strengthData: [action.payload, ...state.strengthData]
			};
			break;
		case 'ADD_CARDIO_EXERCISE':
			console.log(action.payload.exercise); 
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
			newState = {
				...state,
				strengthData: state.strengthData.filter(s => s.id !== action.payload)
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