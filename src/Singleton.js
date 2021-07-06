export class Singleton {
    name = 'I`m singleton';
    static refCount = '0';
    constructor() {
        Singleton.refCount = Singleton.refCount + '1';
        if (Singleton._instance) return Singleton._instance;
        Singleton._instance = this;
    }

    unsubscribe = () => {
        console.log(Singleton.refCount);
        Singleton.refCount = Singleton.refCount.slice(0, Singleton.refCount.length - 1);
        if (Singleton.refCount === "0") {
            Singleton.destroy();
        }
    }

    static destroy() {
        Singleton._instance = null;
    }
}

