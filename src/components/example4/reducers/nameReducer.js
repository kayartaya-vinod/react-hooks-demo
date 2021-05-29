export const ADD_NAME = 'ADD_NAME';
export const FETCH_NAMES = 'FETCH_NAMES';
export const DELETE_NAME = 'DELETE_NAME';

export const initialState = {
    names: [
        { id: 1, firstname: 'Vinod', lastname: 'Kumar' },
        { id: 2, firstname: 'Shyam', lastname: 'Sundar' },
        { id: 3, firstname: 'Harish', lastname: 'CJ' },
        { id: 4, firstname: 'Naveen', lastname: 'Kumar' },
        { id: 5, firstname: 'Kiran', lastname: 'Rao' },
        { id: 6, firstname: 'Kishore', lastname: 'Rao' },
    ],
};

export const nameReducer = (state, action) => {
    console.log('action', action);

    switch (action.type) {
        case ADD_NAME: {
            let { names } = state;
            let id = Math.max(...names.map((n) => n.id)) + 1;
            names.push({ id, ...action.payload }); // payload is the name to add
            state.names = [...names];
            return { ...state };
        }
        case DELETE_NAME: {
            let { names } = state;
            let index = names.findIndex((n) => n.id === action.payload); // payload is the id to delete
            if (index !== -1) {
                names.splice(index, 1);
            }
            state.names = [...names];
            return { ...state };
        }
        default:
            return { ...state };
    }
};
