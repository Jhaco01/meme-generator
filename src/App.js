import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { MemeSite } from './components/MemeSite';

export const App = () => {
  return (
    <div className="App">
        < Header />
        < MemeSite />
    </div>
  );
}
