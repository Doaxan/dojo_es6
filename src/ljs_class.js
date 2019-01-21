'use strict';

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static createGuest() {
        return new User('Guest', 'on Site');
    }
};

class Menu {
    static get elemClass() { // constant
        return 'menu';
    }
}

console.log(Menu.elemClass);

let user = User.createGuest();

console.log(user.firstName);

console.log(User.createGuest);