import React from 'react';
import { useManager } from '../useManager';
import { Singleton } from '../Singleton';


export const Consumera = () => {
    const instance = useManager(Singleton);

    return <span>{instance.name}</span>
}