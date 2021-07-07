import React from 'react';
import { singletonBuilder } from '../Singleton/singletonBuilder';
import { Singleton } from '../Singleton/Singleton';


// export const Consumer = () => {
// 	const manager = singletonBuilder(this, Singleton);
//
// 	return <span>{manager.name}</span>;
//
// }

export class Consumer extends React.Component{

	componentDidMount() {
		this.manager = singletonBuilder(this, Singleton);
		this.setState({});
	}

	render() {
		return <span>{this.manager?.name}</span>;
	}
}