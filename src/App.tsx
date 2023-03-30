import React from 'react';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainBlock from './components/Main/MainBlock/MainBlock';
import Remote from './components/Remote/Remote';
import SkillsBlock from './components/Skills/SkillsBlock/SkillsBlock';
import Works from './components/WorksBlock/WorksBlock';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainBlock/>
      <SkillsBlock/>
      <Works/>
      <Remote/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
