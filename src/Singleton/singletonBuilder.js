import { useEffect, useMemo } from "react";

export function singletonBuilder(subscriber, Singleton, ...classDeps) {
    if (subscriber?.render) {
        return BuildForClassComp(subscriber, Singleton, ...classDeps);
    }
    return BuildForFuncComp(Singleton, ...classDeps);
}

const BuildForFuncComp = (Singleton, ...classDeps) => {
    const instance = useMemo(() => new Singleton(...classDeps), [Singleton, classDeps]);
    useEffect(() => instance.subscribe(), [instance]);
    return instance;
}

const BuildForClassComp = (subscriber, Singleton, ...classDeps) => {
    const instance = new Singleton(...classDeps);
    const unsubscribeHandler = instance.subscribe();
    const initialComponentWillUnmount = subscriber.componentWillUnmount?.bind(subscriber);
    subscriber.componentWillUnmount = (...params) => {
        unsubscribeHandler();
        subscriber.componentWillUnmount = initialComponentWillUnmount;
        initialComponentWillUnmount?.(...params);
        for (let key in subscriber) {
            if (!subscriber.hasOwnProperty(key)) continue;
            subscriber[key] = null;
        }
    };
    return instance;
}
