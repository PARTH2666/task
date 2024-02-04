let data
let data_arr = []
let task_list
let delete_btn
let update_btn
let task_container;


let onChange = (event) => {
    data = event.target.value

}

let onClick = (event) => {



    if (data == undefined) {
        event.preventDefault()
        console.log('error');
    }
    else {
        event.preventDefault()
        if (document.getElementById('task_container') != null) {
            document.querySelectorAll('.task_container').forEach((value) => {
                value.remove()
            })
        }

        data_arr.push(data)
        document.getElementById('form_data').value = ""
        // console.log(data_arr);
        data = undefined




        data_arr.forEach((value) => {



            task_container = document.createElement('div')
            task_container.className = 'task_container'
            task_container.className = "task_container"
            task_container.setAttribute('id', 'task_container')

            task_list = document.createElement('div')
            task_list.className = "task"
            task_list.textContent = value
            task_list.setAttribute('id', 'task_list')

            delete_btn = document.createElement("div");
            delete_btn.className = "dlt_btn";
            delete_btn.textContent = "delete";
            delete_btn.setAttribute('value', value)

            update_btn = document.createElement("div");
            update_btn.className = "upt_btn";
            update_btn.textContent = "Update";
            update_btn.setAttribute('value', value)

            document.getElementById('sibling').insertAdjacentElement("afterend", task_container).append(task_list)
            task_container.append(delete_btn)
            task_container.append(update_btn)


            function ondelete(event) {
    event.preventDefault()
                if (value == event.target.getAttribute('value')) {
                    event.target.parentNode.remove();
                    data_arr.splice(data_arr.indexOf(value),1);
                    console.log(data_arr);
                }
                

            }

            function onupdate(event){
                event.preventDefault()
               
               let updated_value =  prompt('let update your task',value)
               
               if (updated_value == null || updated_value == "") {
              console.log("User cancelled the prompt.");
              } else {
               
                  
                    
                    event.target.parentNode.childNodes[0].textContent = updated_value
                    console.log(data_arr.indexOf(value));
                    data_arr[data_arr.indexOf(value)]   = updated_value
                    console.log(data_arr);
                
              }
               
            }

            update_btn.addEventListener('click',onupdate)

            delete_btn.addEventListener("click", ondelete);
           

            
        })
    }




}


document.getElementById('form_data').addEventListener('change', onChange)

document.getElementById('btn').addEventListener('click', onClick)