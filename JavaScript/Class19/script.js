
class Task {
    constructor(title) {
        this.id = Date.now();
        this.title = title;
        this.createdAt = new Date();
    }
    getDetails(){
        return `${this.title} (Added on: ${this.createdAt.toLocaleString()})`;
    }
}

const tasklist = [];
const taskFrom = document.getElementById('taskFrom');
const taskInput = document.getElementById('taskInput');
const tasklistUI = document.getElementById('tasklist');

const renderTasks = () => {
    tasklistUI.innerHTML = '';

    tasklist.forEach(({id, title}) =>{
        const li =document.createElement('li');
        li.innerHTML = `
        <span> ${title} </span>
        <button onclick="deleteTask(${id})">Delete</button>
        `;
        tasklistUI.appendChild(li);
    });
};

taskFrom.addEventListener('submit', (e) =>{
    e.preventDefault();
    const newTask = new Task(taskInput.value);
    tasklist.push(newTask);
    taskInput.value = '';
    renderTasks();
});

const deleteTask = (id) => {
    const index = tasklist.findIndex(task => task.id === id);
    if(index !== -1){
        tasklist.splice(index,1);
        renderTasks();
    }
};