export class Singleton {
    static refCount = 0;
    constructor() {
        if (Singleton._instance) return Singleton._instance;
        Singleton._instance = this;
    }

    subscribe() {
        Singleton.refCount++;
        return this.unsubscribeHandler;
    }

    unsubscribeHandler = () => {
        Singleton.refCount--;
        if (Singleton.refCount === 0) {
            Singleton.destroyInstance();
        }
    }

    get name() {
        return 'Name';
    }

    static destroyInstance() {
        Singleton._instance = null;
    }
}

