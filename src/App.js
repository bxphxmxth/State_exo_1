import logo from './logo.svg';
import './App.css';
import Personnages from "./components/Personnages"
import Perso from "./components/Persos"
import Persos from "./components/Persos"

import React from 'react';

class App extends React.Component {

//   persos = {
//     prenom : "Nasila",
//     nom : "Aala",
//     age : 24,
//     prenom2 : "Effy",
//     nom2 : "Stonem",
//     age2 : 28,
//     prenom3 : "James",
//     nom3 : "Cook",
//     age3 : 19,
// }

state = {
    perso1 : {
        prenom: "Nasila",
        nom: "Aala",
        age: 24,
    },

    perso2 : {
        prenom: "Effy",
        nom: "Stonem",
        age: 28,
    },

    perso3 : {
        prenom: "James",
        nom: "Cook",
        age: 19,
    },

}

render(){


   return (
    <div className="App">
      
    <Personnages/>
    <Persos statut={this.state}/>
    </div>
  );
}
  
 
}

export default App;
