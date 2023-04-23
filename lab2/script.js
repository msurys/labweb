"use strict";

// function that adds a new p element as text from input field
//prevent empty input

const taskList = document.getElementById("task-list");
const removedTasks = [1];

const addToList = () => {
    const input = document.getElementById("input").value;
    const newTask = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    newTask.setAttribute("class", "task")
    p.innerHTML = input;
    p.setAttribute("class", "task-text");
    p.addEventListener("click", taskDone);
    newTask.appendChild(p);

    button.innerHTML = "X";
    button.setAttribute("class", "deleteButton");
    button.setAttribute("class", "btn btn-danger deleteButton");
    button.addEventListener("click", deleteTask);
    newTask.appendChild(button);
    
    if (input === "") {
        alert("Please enter a task");
        return;
    }
    taskList.appendChild(newTask);
};

//i want this to gray out a p inside div and add a time stamp
const taskDone = (event) => {
    if (event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";
        event.target.style.color = "black";
        // remove timestamp
        const timeStamp = event.target.nextElementSibling;
        if (timeStamp.classList.contains('timestamp')) {
            timeStamp.remove();
        }
    } else {
        event.target.style.textDecoration = "line-through";
        event.target.style.color = "gray";
        // create timestamp
        const timeStamp = document.createElement('div');
        timeStamp.classList.add('timestamp');
        timeStamp.textContent = new Date().toLocaleTimeString();
        event.target.insertAdjacentElement('afterend', timeStamp);
    }
};

const deleteTask = (event) => {
    const removedTask = $(event.target).parent().clone();
    removedTasks.push(removedTask);
    $(event.target).parent().remove();
  };
  
const undo = () => {
    const lastRemovedTask = removedTasks.pop();
    lastRemovedTask.find(".deleteButton").click(deleteTask);
    lastRemovedTask.find(".task-text").click(taskDone);
    if (lastRemovedTask) {
      $("#task-list").append(lastRemovedTask);
    }
  };


