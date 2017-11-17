import React, { Component } from 'react';
import Loading from './Loading';

const { ipcRenderer } = window.require('electron');

class Initialization extends Component {

	constructor() {
		super()
		this.state = {
			isLoading: true
		}
		ipcRenderer.on('setups', (event, setups) => {
			console.log(setups)
		})

		ipcRenderer.on('errorSetup', (event, err) => {
			
		})
	}

	componentDidMount() {
		
		console.log('Initialization didmount')

		ipcRenderer.send('cmd', 'setup');
		
	}

	render() {
		
		return(

			<Loading />

		)

	}

}

export default Initialization;