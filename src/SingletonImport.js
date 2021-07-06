class Singleton1 {
    name = 'I`m singleton';
    count = 1;

    unsubscribe() {
        this.count = this.count - 1;
        if (this.count === 0) {
            Singleton1.destroy();
        }
    }

    static destroy() {
        Singleton1 = null;
    }
}

export const instance = new Singleton1();
