'use strict';


const taskList = document.getElementById("task-list");
const workList = document.getElementById("work-list");
const urgentList = document.getElementById("urgent-list");
var removedTasks;
var removedTasksList;

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
    button.setAttribute("class", "btn btn-danger deleteButton");
    newTask.appendChild(button);
    
    if (input === "") {
        alert("Please enter a task");
        return;
    }
    if(document.getElementById("ControlSelect").value === "Tasks") {
    taskList.appendChild(newTask);}
    else if(document.getElementById("ControlSelect").value === "Work") {
        workList.appendChild(newTask);}
    else if(document.getElementById("ControlSelect").value === "Urgent") {
        urgentList.appendChild(newTask);}
};

const taskDone = (event) => {
    if (event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";
        event.target.style.color = "orange";
        const timeStamp = event.target.nextElementSibling;
        if (timeStamp.classList.contains('timestamp')) {
            timeStamp.remove();
        }
    } else {
        event.target.style.textDecoration = "line-through";
        event.target.style.color = "gray";
        const timeStamp = document.createElement('div');
        timeStamp.classList.add('timestamp');
        timeStamp.textContent = new Date().toLocaleTimeString();
        event.target.insertAdjacentElement('afterend', timeStamp);
    }
};

const search = () => {
    const caseInsensitiveSwitch = document.getElementById("customSwitch6");
    const input = document.getElementById("search").value;
    const paragraphs = document.getElementsByTagName("p");
    if(caseInsensitiveSwitch.checked) {
    const search = input.toLowerCase();
    for (let i = 0; i < paragraphs.length; i++) {
        const text = paragraphs[i].innerHTML.toLowerCase();
        if (text.includes(search)) {
            blinkElement(paragraphs[i], 3000);
        } else {
            paragraphs[i].style.color = "orange";
        }
    }
    } else {
        for (let i = 0; i < paragraphs.length; i++) {
            const text = paragraphs[i].innerHTML;
            if (text.includes(input)) {
                blinkElement(paragraphs[i], 3000);
            } else {
                paragraphs[i].style.color = "orange";
            }
        }
    }
};

const state = () => {
    const caseInsensitiveSwitch = document.getElementById("customSwitch6");
    const labelForSwitch = document.querySelector(`label[for=${caseInsensitiveSwitch.id}]`);
    if (caseInsensitiveSwitch.checked) {
      labelForSwitch.textContent = "Case Insensitive";
    } else {
      labelForSwitch.textContent = "Case Sensitive";
    }
  };
  

const blinkElement = (element) => {
    let count = 0;
    const intervalId = setInterval(function() {
      if (count >= 10) {
        clearInterval(intervalId);
      } else {
        element.style.color = (count % 2 === 0) ? 'red' : '';
        count++;
      }
    }, 300);
  };
    

const hideList = (listID) => {
    const list = document.getElementById(listID);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
};



$(document).on('click', '#undo-button', function() {
    if (removedTasks) {
        $("#"+removedTasksList).append(removedTasks);
        removedTasks = null;
        removedTasksList = null;
        
    }
  });


$(document).on('click', '.deleteButton', function() {
    const confirmed = confirm("Are you sure you want to delete this task?");
    if (confirmed) {
    const removedTask = $(this).parent().clone();
    const list = $(this).parent().parent().attr('id');
    removedTasks = removedTask;
    removedTasksList = list;
    $(this).parent().remove();
    }
    });

$('#spinner').on('mouseover', function() {
    var duration = 1000; 
    var size = 50; 
    const timer = setInterval(
        function() {
            if(duration > 5){
        duration -= 5;
            }
        size += 0.5;
        $('#spinner').css('animation-duration', duration + 'ms');
        $('#spinner').css('font-size', size + 'px');
        $('#spinner').css('color', size + 'px');
    }, 50);
    $(this).data('timer', timer);
    }).on('mouseout', function() {
    const timer = $(this).data('timer');
    clearInterval(timer); 
    $(this).css('animation-duration', '1000ms');
    $(this).css('font-size', '50px'); 
});

