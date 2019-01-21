'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('I walk: ' + this.name);
    }
}

class Rabbit extends Animal {
    constructor() {
        super('Croll');
    }
}

new Rabbit().walk();