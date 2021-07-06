export class Singleton {
    name = 'I`m singleton';
    static count = '0';
    constructor() {
        Singleton.count = Singleton.count + '1';
        if (Singleton._instance) return Singleton._instance;
        Singleton._instance = this;
    }

    unsubscribe = () => {
        console.log(Singleton.count);
        Singleton.count = Singleton.count.slice(0, Singleton.count.length - 1);
        if (Singleton.count === "0") {
            Singleton.destroy();
        }
    }

    static destroy() {
        Singleton._instance = null;
    }
}

