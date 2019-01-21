function User() {
    this.sayHi = function() {
        console.log(this.name);
    };
}

User.createAnonymous = function() {
    let user = new User;
    user.name = 'Anonim';
    return user;
}

User.createFromData = function(userData) {
    let user = new User;
    user.name = userData.name;
    user.age = userData.age;
    return user;
}

// usage

let guest = User.createAnonymous();
guest.sayHi(); // Anonim

let knownUser = User.createFromData({
    name: 'Vasya',
    age: 25
});
knownUser.sayHi();

/*
Поэтому полиморфные конструкторы лучше использовать там, где нужен именно полиморфизм, 
т.е. когда непонятно, какого типа аргумент передадут, 
и хочется в одном конструкторе охватить все варианты.

А в остальных случаях отличная альтернатива – фабричные методы.

Итого
Статические свойства и методы объекта удобно применять в следующих случаях:

    Общие действия и подсчёты, имеющие отношения ко всем объектам данного типа. 
В примерах выше это подсчёт количества.
    Методы, не привязанные к конкретному объекту, например сравнение.
    Вспомогательные методы, которые полезны вне объекта, например для форматирования даты.
    Фабричные методы.
*/