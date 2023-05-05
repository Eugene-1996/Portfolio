import React from 'react';
import './App.css';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainBlock from './components/Main/MainBlock/MainBlock';
import Remote from './components/Remote/Remote';
import SkillsBlock from './components/Skills/SkillsBlock/SkillsBlock';
import Works from './components/WorksBlock/WorksBlock';
import AboutMe from './components/AboutMe/AboutMe';
import Summary from './components/Summary/Summary';


export type StorePropsType = {
  store : {
    Skills: SkillsPropsType[]
  }
 
}

export type SkillsPropsType = {
  title: string
  img: string
  describe: string
}


function App(props: StorePropsType) {
  return (
    <div className="App">
      <Header/>
      <MainBlock />
      <AboutMe/>
      <SkillsBlock skills={props.store.Skills}/>
      <Summary/>
      <Works/>
      <Remote/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
