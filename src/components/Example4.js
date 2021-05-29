// useReducer demo

import React from 'react';
import NameForm from './example4/NameForm';
import NameList from './example4/NameList';
import NamesProvider from './example4/NamesProvider';
import { initialState, nameReducer } from './example4/reducers/nameReducer';

export default function Example4() {
    return (
        <>
            <div>
                <hr />
                <h1>Context API with useReducer Demo</h1>
            </div>
            {/* Whenever a Component is used with nested elements, it will automatically 
            receive a prop called "children". Refer NamesProvider.js */}
            <NamesProvider initialState={initialState} reducer={nameReducer}>
                <div className='row'>
                    <div className='col'>
                        {/* This component does not receive the prop "children" */}
                        <NameForm />{' '}
                    </div>
                    <div className='col'>
                        {/* This component receives a prop "children", although it will not be used 
                        inside the NameList component, and hence will be discarded in the DOM. 
                        However, you can receive the prop and add it to the JSX as {children}. 
                        Refer NameList.js */}
                        <NameList>
                            <p>That's all folks! 🦆</p>
                            <hr />
                        </NameList>
                    </div>
                </div>
            </NamesProvider>
        </>
    );
}
