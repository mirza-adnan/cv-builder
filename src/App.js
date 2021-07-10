import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flip: false,
		};
		this.handleFlip = this.handleFlip.bind(this);
	}

	handleFlip() {
		this.setState({
			flip: !this.state.flip,
		});
	}

	render() {
		return (
			<div>
				<Header handleFlip={this.handleFlip} />
				<Main flip={this.state.flip} />
			</div>
		);
	}
}
export default App;
