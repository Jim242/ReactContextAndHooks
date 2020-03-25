import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         // Destructuring to get them as individual const
//         const { isLightTheme, light, dark } = this.context;
//         // ternary
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>Book 1</li>
//                     <li style={{ background: theme.ui }}>Book 2</li>
//                     <li style={{ background: theme.ui }}>Book 3</li>
//                 </ul>
//             </div>
//         );
//     }
// }

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return(
        <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {books.map(book => {
                    return(
                    <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>                    
                    )
                })}
            </ul>
        </div>
    );
}

export default BookList;