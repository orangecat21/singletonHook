import React from 'react';
import { useManager } from '../Singleton/singletonBuilder';
import { AbstractManager } from '../Singleton/AbstractManager';


class A extends AbstractManager {
	constructor() {
		super();
		this.name = 'JOPA';
	}
}

export class Consumer extends React.Component{

	componentDidMount() {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		this.manager = useManager(this, A);
		this.setState({});
	}

	render() {
		return <span>{this.manager?.name}</span>;
		// return <span>{'JOPA'}</span>;
	}
}