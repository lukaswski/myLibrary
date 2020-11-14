import React from 'react';
import './App.scss';
import BookCards from './BookCards';
import AddBooks from './AddBooks';
import FindBooks from './FindBooks';


const App = () => (
  <div className="App">
    <h2>
      Biblioteczka domowa
    </h2>
    <hr />
    <AddBooks />
    <hr />
    <FindBooks />
    <br />
    <BookCards />
  </div>
);

export default App;
