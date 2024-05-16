export default (state, action) => {
	switch(action.type) {
		case 'ADD_STRENGTH_EXERCISE':
			return {
				...state, 
				strengthData: [action.payload, ...state.strengthData]
			}
		case 'ADD_CARDIO_EXERCISE':
			return {
				...state,
				cardioData: [action.payload, ...state.cardioData]
			}
		case 'ADD_SESSION_EXERCISE':
			return {
				...state,
				sessionData: [action.payload, ...state.sessionData]
			}

		default:
			return state;
	}
}