import React from 'react';
import BookContextProvider from './contexts/bookContexts';
import NavBar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
