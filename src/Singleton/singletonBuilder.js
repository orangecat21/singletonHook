import * as React from "react";

export function useManager(subscriber, Manager, ...classDeps) {
    const instance = Manager._instance || new Manager(...classDeps);
    // console.log({ ...Manager.prototype });
    // if (!(instance.constructor.prototype instanceof AbstractManager)) Object.setPrototypeOf(instance.constructor.prototype, Object.create(AbstractManager.prototype));

    if (subscriber?.render) return buildForClassComponent(subscriber, instance);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFunctionalComponent(instance);
}
const useFunctionalComponent = (instance) => {
    React.useEffect(() => instance.subscribe(), [instance]);
    return instance;
};
const buildForClassComponent = (subscriber, instance) => {
    const unsubscribeHandler = instance.subscribe();
    const initialComponentWillUnmount = subscriber.componentWillUnmount?.bind(subscriber);
    subscriber.componentWillUnmount = () => {
        unsubscribeHandler();
        subscriber.componentWillUnmount = initialComponentWillUnmount;
        initialComponentWillUnmount?.();
        Object.keys(subscriber).forEach((key) => key !== 'props' && (subscriber[key] = null));
    };
    return instance;
};
