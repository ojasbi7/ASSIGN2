document.addEventListener('DOMContentLoaded', function(){

  document.querySelector("#new-task").onsubmit= function(){

    const li=document.createElement('li');
    let task_text= document.querySelector("#task").value;
    let new_task_html = `
                            <span> ${task_text} </span>
                            <button class= "complete"> Completed </button>
                            <button class="remove"> Remove </button>
                        `


  
