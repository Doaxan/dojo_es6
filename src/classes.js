class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Task creation');
    }

    get done() {
        return this._done === true ? 'Done' : 'Not done';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Error! Set value to true or false');
        }
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" is done`);
    }

    static getDefaultTitle() {
        return 'Task';
    }
}

Task.count = 0;

let task = new Task('Clean room');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);
