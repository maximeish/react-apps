import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//function component
// const SayHello = props => <h1 style={{textAlign: props.side}}>Hello from a function in React!</h1>;



//class component
class SayHello extends React.Component {
  state = {
    side: "N/A",
    itemName: "N/A"
  }

  render = () => <><h1 style={{textAlign: this.props.changeState ? this.setState({side: "center (statealtered)"}) : "left (stateunaltered)", border: "5px"}}>Hello from {this.props.changeState ? this.setState({itemName: "Biscuit (statealtered)"}): "Mango (state unaltered)"}</h1><br/></>;
}

ReactDOM.render(
  null,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
