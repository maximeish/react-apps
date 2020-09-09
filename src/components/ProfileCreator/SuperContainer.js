import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import createProfileReducer from './reducers/reducers';
import Container from './ProfileCreatorContainer';

const store = createStore(
	createProfileReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class SuperContainer extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container />
			</Provider>
		);
	};
}

export default SuperContainer;