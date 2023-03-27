import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {CharacterOverview} from "./views/character-overview/CharacterOverview";
import {Character} from "../src/common/models/character.model";
import {charactersMockData} from "./common/mockdata";

function App() {
  const [characters, setCharacters] = useState<Character[]>(charactersMockData);
  return (
    <div className="app">
      <CharacterOverview characters={characters}/>
    </div>
  );
}

export default App;
