export enum Language {
    ARABIC = "ar",
    ENGLISH = "en",
    // TODO: Might add more languages later
}

interface Tasks {
    prayers: boolean[];
    shefa: boolean;
    // TODO: add more tasks ...
}

const initialValue: Tasks = {
    prayers: [false, false, false, false, false],
    shefa: false,
};

export class Day {
    tasks: Tasks

    constructor(tasks: Tasks = initialValue) {
        this.tasks = tasks;
        this.tasks.prayers = tasks.prayers;
        this.tasks.shefa = tasks.shefa ?? false;
    }

    toObject() {
        return {
            prayers: this.tasks,
        };
    }

    togglePrayer(index: number) {
        const updatedtasks = {...this.tasks, prayers: [...this.tasks.prayers]};
        updatedtasks.prayers[index] = !updatedtasks.prayers[index];
        return new Day(updatedtasks);
    }

    toggleShefa() {
        const updatedtasks = {...this.tasks, shefa: !this.tasks.shefa};
        return new Day(updatedtasks);
    }

    checkAll() {
        const updatedtasks = { 
            ...this.tasks, 
            prayers: this.tasks.prayers.map(() => true), 
            shefa: true 
        };
        return new Day(updatedtasks);
    }

    uncheckAll() {
        const updatedtasks = { 
            ...this.tasks, 
            prayers: this.tasks.prayers.map(() => false), 
            shefa: false 
        };
        return new Day(updatedtasks);
    }
}

