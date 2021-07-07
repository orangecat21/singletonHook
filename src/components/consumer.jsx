import React from 'react';
import { Adapter } from '../useManager';
import { Singleton } from '../Singleton';


// export const Consumera = () => {
// 	const manager = Adapter(this, Singleton);
//
// 	return <span>{manager.name}</span>;
//
// }

export class Consumera extends React.Component{

	componentDidMount() {
		this.manager = Adapter(this, Singleton);
		this.setState({});
	}

	render() {
		return <span>{this.manager?.name}</span>;
	}
}