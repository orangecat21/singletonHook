import { useEffect, useMemo } from "react";

export function Adapter(subscriber, Class, ...classDeps) {
    if (subscriber?.render) {
        const instance = new Class(...classDeps);
        const unsubscribeHandler = instance.subscribe();
        const initialComponentWillUnmount = subscriber.componentWillUnmount?.bind(subscriber);
        subscriber.componentWillUnmount = (...params) => {
            console.log('unmount');
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

    return Manager(Class, ...classDeps);
}

const Manager = (Class, ...classDeps) => {
    const instance = useMemo(() => new Class(...classDeps), [Class, classDeps]);

    useEffect(() => instance.subscribe(), [instance, instance.unsubscribe]);

    return instance;
}
