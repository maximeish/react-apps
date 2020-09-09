import React from 'react';
// import * as ACTIONS from './actions/actions';
// import logo from './logo.svg';
// import './App.css';
// import Alert from './components/Alert.js';
import Tasks from './components/Tasks';
// import Counter from './components/Counter.js';
// import Joke from './components/Joke';
// import WebStruct from './components/WebStruct';
// import DataFetcher from './components/DataFetcher';
// import LoginSys from './components/LoginSys';
// import FetchingFromAPI from './components/FetchingFromAPI';
// import Forms from './components/Forms';
// import PasswordValidator from './components/PasswordValidator';
// import FormChallenge from './components/FormChallenge';
// import MemeGenerator from './components/MemeGenerator/MemeGenerator';
// import StopwatchComponent from './components/Stopwatch/StopwatchComponent';
// import Container from './ReduxContainer/Redux';
// import rootReducer from './ReduxContainer/reducers/reducer';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import SuperContainer from './components/ProfileCreator/SuperContainer'
// import SuperContainer from './components/LocateMe/SuperContainer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  	
  	render() {
      return (
		  <div className="wrapper">
	  		<Tasks />
		  </div>
	  )
  	};
}

// <div style={{fontSize: 'xx-large'}}> 
//       	Next project: <b>Contact List</b> </div>

export default App;
