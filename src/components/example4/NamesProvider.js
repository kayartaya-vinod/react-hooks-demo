import { createContext, useContext, useReducer } from 'react';

// Global store
const Store = createContext();

// A convenient function that keeps the global store in the closure scope.
// This is the method to be used in all the components, in place of useContext().
// Refer NameForm.js and NameList.js for the usage.
export const useStore = () => useContext(Store);

const NamesProvider = ({ children, initialState, reducer }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>
    );
};

export default NamesProvider;
