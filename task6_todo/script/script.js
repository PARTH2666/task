// let update_btn,
//   delete_btn,
//   ele,
//   ele_parent,
//   ele_task,
//   final_update_btn,
//   sibling_node;
// let i;

// let form_value = [];

// function onChange(event) {
//   //document.getElementById("form").value = event.target.value;
//   form_value.push(event.target.value);
// }
// function onClick(event) {
//   event.preventDefault();
//   form_value.forEach((value, index) => {
//     if (form_value !== undefined && form_value !== "") {
//       ele_parent = document.createElement("div");
//       ele_parent.className = "task_container";

//       ele_task = document.createElement("div");
//       ele_task.className = "task";
//       ele_task.textContent = value;

//       delete_btn = document.createElement("div");
//       delete_btn.className = "dlt_btn";
//       delete_btn.textContent = "delete";

//       update_btn = document.createElement("div");
//       update_btn.className = "upt_btn";
//       update_btn.textContent = "Update";

//       sibling_node = document.getElementById("sibling");
//       sibling_node
//         .insertAdjacentElement("afterend", ele_parent)
//         .append(ele_task);

//       ele_parent.append(delete_btn);
//       ele_parent.append(update_btn);
//     }

//     form_value = [];
//     function ondelete() {
     
//       form_value.splice(index, 1);
     
//     }
//     delete_btn.addEventListener("click", ondelete);
//   });
// }



// document.getElementById("form").value = "";

// document.getElementById("form").addEventListener("change", onChange);

// document.getElementById("btn").addEventListener("click", onClick);

// function onClick(event) {
//   event.preventDefault();

//   if (form_value !== undefined && form_value !== "") {
//     ele_parent = document.createElement("div");
//     ele_parent.className = "task_container";

//     ele_task = document.createElement("div");
//     ele_task.className = "task";
//     ele_task.textContent = form_value;

//     delete_btn = document.createElement("div");
//     delete_btn.className = "dlt_btn";
//     delete_btn.textContent = "delete";

//     update_btn = document.createElement("div");
//     update_btn.className = "upt_btn";
//     update_btn.textContent = "Update";

//     sibling_node = document.getElementById("sibling");
//     sibling_node.insertAdjacentElement("afterend", ele_parent).append(ele_task);
//     ele_parent.append(delete_btn);
//     ele_parent.append(update_btn);

//     function ondelte() {
//         ele_parent.remove();
//       }

//       delete_btn.addEventListener("click", ondelte);

//update
//   function onupdate(){

//     function finalupdate(event){

//             event.preventDefault()
//             ele_task.textContent =  document.getElementById("form").value
//             document.getElementById("btn").value = 'ADD'
//             document.getElementById("btn").removeEventListener('click', finalupdate)
//             document.getElementById("btn").addEventListener('click', onClick)
//             document.getElementById("form").value =''

//     }

//     document.getElementById("form").value =  ele_task.textContent
//     document.getElementById("btn").removeEventListener('click', onClick)
//     document.getElementById("btn").value = 'Update'
//     document.getElementById("btn").addEventListener('click',finalupdate)

//   }
//   update_btn.addEventListener('click',onupdate)

// document.getElementById("form").value = "";
//   }
// }

// document.getElementById("form").addEventListener("change", onChange);

// document.getElementById("btn").addEventListener("click", onClick);

document.addEventListener("DOMContentLoaded", function () {
    let deleteBtn, updateBtn, taskContainer, taskInput, form, siblingNode;
  
    function createTaskElement(value) {
      const taskElement = document.createElement("div");
      taskElement.className = "task";
  
      const taskText = document.createElement("div");
      taskText.className = "task_text";
      taskText.textContent = value;
  
      deleteBtn = document.createElement("div");
      deleteBtn.className = "dlt_btn";
      deleteBtn.textContent = "Delete";
  
      updateBtn = document.createElement("div");
      updateBtn.className = "upt_btn";
      updateBtn.textContent = "Update";
  
      taskElement.appendChild(taskText);
      taskElement.appendChild(deleteBtn);
      taskElement.appendChild(updateBtn);
  
      deleteBtn.addEventListener("click", onDelete);
      updateBtn.addEventListener("click", onUpdate);
  
      return taskElement;
    }
  
    function onDelete() {
      taskContainer.removeChild(this.parentNode);
    }
  
    function onUpdate() {
      const newValue = prompt("Enter updated value:");
      if (newValue !== null) {
        this.parentNode.querySelector(".task_text").textContent = newValue;
      }
    }
  
    function onFormSubmit(event) {
      event.preventDefault();
      const value = taskInput.value.trim();
  
      if (value !== "") {
        const taskElement = createTaskElement(value);
        taskContainer.appendChild(taskElement);
        taskInput.value = "";
      }
    }
  
    function initialize() {
      siblingNode = document.getElementById("sibling");
      taskContainer = document.createElement("div");
      taskContainer.className = "task_container";
      siblingNode.parentNode.insertBefore(taskContainer, siblingNode.nextSibling);
  
      taskInput = document.getElementById("form");
      form = document.getElementById("form_btn");
      form.addEventListener("submit", onFormSubmit);
    }
  
    initialize();
  });
  