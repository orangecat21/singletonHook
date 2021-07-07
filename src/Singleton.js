export class Singleton {
    static refCount = 0;
    fff = 'asd'
    constructor() {
        if (Singleton._instance) return Singleton._instance;
        Singleton._instance = this;
    }

    subscribe() {
        Singleton.refCount++;
        return this.unsubscribe;
    }

    unsubscribe = () => {
        console.log(Singleton.refCount);
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

