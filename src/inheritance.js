class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Creation task');
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() {
        return 'Task';
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" is done`)
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Creation subtask');
    }

    complete() {
        super.complete();
        console.log(`Subtask  "${this.title}" is done`);
    }
}

let task = new Task('Learn JavaScript');
let subtask = new SubTask('Learn ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
