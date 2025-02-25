// Homework 15
class Todo {
    constructor(title) {
        if (!title.trim()) {
            throw new Error("Нотатка не може бути порожньою");
        }
        this.title = title;
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    editTitle(newTitle) {
        if (!newTitle.trim()) {
            throw new Error("Нотатка не може бути порожньою");
        }
        this.title = newTitle;
        this.updatedAt = new Date();
    }

    markAsCompleted() {
        this.completed = true;
        this.updatedAt = new Date();
    }
}

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(title) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }

    removeTodo(title) {
        this.todos = this.todos.filter(todo => todo.title !== title);
    }

    editTodo(oldTitle, newTitle) {
        const todo = this.todos.find(todo => todo.title === oldTitle);
        if (todo) {
            todo.editTitle(newTitle);
        }
    }

    getTodo(title) {
        return this.todos.find(todo => todo.title === title);
    }

    getAllTodos() {
        return this.todos;
    }

    getCompletedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    getPendingTodos() {
        return this.todos.filter(todo => !todo.completed);
    }

    getStats() {
        return {
            total: this.todos.length,
            completed: this.getCompletedTodos().length,
            pending: this.getPendingTodos().length
        };
    }

    searchByTitle(searchTerm) {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    sortByStatus(descending = true) {
        return [...this.todos].sort((a, b) => {
            return descending ? b.completed - a.completed : a.completed - b.completed;
        });
    }

    sortByDate(descending = true) {
        return [...this.todos].sort((a, b) => {
            return descending ? b.createdAt - a.createdAt : a.createdAt - b.createdAt;
        });
    }
}

const myTodoList = new TodoList();
myTodoList.addTodo("Купити молоко");
myTodoList.addTodo("Зробити домашнє завдання");
myTodoList.addTodo("Піти в спортзал");
myTodoList.getTodo("Купити молоко").markAsCompleted();
console.log(myTodoList.getStats());
console.log(myTodoList.sortByStatus());
console.log(myTodoList.sortByDate());

//Homework 17
//Zad1 
function randomDelayPrint(message) {
    message.split('').forEach((char, index) => {
        setTimeout(() => {
            console.log(char);
        }, Math.random() * 1000);
    });
}
randomDelayPrint("Hello");

//Zad2
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();

// Zad 3
function intervalRace(functions, t) {
    return new Promise((resolve) => {
        let results = [];
        let index = 0;

        function executeNext() {
            if (index < functions.length) {
                results.push(functions[index]());
                index++;
                setTimeout(executeNext, t);
            } else {
                resolve(results);
            }
        }
        executeNext();
    });
}

const func1 = () => "Функція 1 виконана";
const func2 = () => "Функція 2 виконана";
const func3 = () => "Функція 3 виконана";

intervalRace([func1, func2, func3], 1000).then(console.log);
