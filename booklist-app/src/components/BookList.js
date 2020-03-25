import React, { useContext } from "react";
import { BookContext } from '../contexts/bookContexts';
import BookDetails from './BookDetails'; 

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map( book => {
                    return ( <BookDetails key={ book.id } book={ book }/>)
                })}
            </ul>
        </div>
    ) : (
      <div className='empty'> You have no books to read </div>   
    );
}

export default BookList;