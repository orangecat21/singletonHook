export class Singleton {
    // Counter to track the number of subscribers
    static refCount = 0;
    constructor() {
        // If instanced, it will return a reference to the instance
        if (Singleton._instance) return Singleton._instance;
        // If not, we create a new instance and remember it
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

