// Inside reactApp/reducers/index.js
const reducer = (state = [], action) => {

    switch (action.type) {

        case 'ADD_EVENT':

            const newState = [...state];

            newState[action.slot] = {
                name: action.name,
                phone: action.phone
            };

            return newState;
            
        default:
            return state;
    }
};

export default reducer;
