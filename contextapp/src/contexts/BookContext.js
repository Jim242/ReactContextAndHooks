import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Book one', id: 1 },
        { title: 'Book two', id: 2 },
        { title: 'Book three', id: 3 }
    ]);
    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;