// function Task() {

// }

// let Task = function Task() {

// }

// class Task {
//     constructor() {
//         console.log('Creating a task');
//     }
// }

let Task = class Task {
    constructor() {
        console.log('Creating a task');
    }
}

let SubTask = class extends Task {
    constructor() {
        super();
        console.log('Creating a subtask');
    }
}

let task = new Task();
let subtask = new SubTask();

console.dir(task);
console.dir(subtask);