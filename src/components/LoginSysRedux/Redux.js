import React from 'react';
import {connect} from 'react-redux';
import * as ACTIONS from './actions/actions';


class Redux extends React.Component {
  	constructor(props) {
  		super(props);
      this.handleAuth = this.handleAuth.bind(this);
  	}

  	handleAuth = (event) => {
      const {name} = event.target;
      if (name === "login_btn")	this.props.login()
      if (name === "logout_btn") this.props.logout()
  	}

  	render() {
    	return (
    		<div>
          <div>is authenticated? {this.props.isAuthenticated.toString()}</div>
    			<button
    				name="login_btn"
    				onClick={this.handleAuth}>
    				Click me to log in
    			</button>
          <button
          	name="logout_btn"
          	onClick={this.handleAuth}>
            Click me to log out
          </button>
          <br />
          <br />
          <div>
           state now {JSON.stringify(this.props)}
          </div>
    		</div>
    	)
  	};
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(ACTIONS.logIn()),
  logout: () => dispatch(ACTIONS.logOut())
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Redux);

export default Container;