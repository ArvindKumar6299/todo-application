const form = document.querySelector("#new-task-form");
const content = document.querySelector(".content");
const edit_btn= document.querySelector(".edit");
const delete_btn= document.querySelector(".delete");
// const submit_btn = document.querySelector("#new-task-submit");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks")


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const userData = input.value.trim();
    console.log(userData);
    if(userData == ""){
        alert("please Add task!");
        return;
    }

    const task = document.createElement('div');  //creating new div
    task.classList.add('task');  //adding  class named-task of above task div

    const content = document.createElement('div');
    content.classList.add("content"); //adding  class-content  to above content div

    // place - content div inside task div

    //creating input div to place taken above input value inoreder to show
    const task_input = document.createElement('input');
    task_input.classList.add("text");
    task_input.classList.add("form-control");
    task_input.classList.add("mb-2");
    task_input.classList.add("my-2")
    //now
    task_input.value = userData;
    task_input.setAttribute("readonly","readonly");
    task_input.type="text";

    //now  append new this div thigs  into document
    // --> appending  task_input inside its parent content and content div inside its parent container  task
    content.appendChild(task_input);
    task.appendChild(content);
    // now appending  new created div into previous tasks div inside html document
    tasks.appendChild(task);

    // after this we will create action div
    const actions = document.createElement('div');
    actions.classList.add("actions");
    actions.classList.add("mt-2");
    actions.classList.add("mx-2");


    const editBtn = document.createElement('button');
    editBtn.classList.add("delete");
    editBtn.classList.add("btn-warning");
    editBtn.classList.add("btn");
    editBtn.innerHTML = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.classList.add("btn");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("mx-2");
    

    // now appending divs inside thier parent
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    // and appending actions div inside tasks div

    task.appendChild(actions);

     input.value = "";  //after submiting the value input vale to blank
    

     // Edit user data
     editBtn.addEventListener("click", ()=>{
        if(editBtn.innerHTML == "Edit"){
         task_input.removeAttribute('readonly');
         editBtn.innerHTML = "Save";
         task_input.focus();
        }
        else{
            task_input.setAttribute("readonly", "readonly");
            editBtn.innerHTML = "Edit";
        }
       
     })

     // Delte user Data
     deleteBtn.addEventListener("click",()=>{
        tasks.removeChild(task);
     })
})
