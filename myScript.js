const toDoArray = [];

function toDoList(){
  let list = String(prompt("Enter your to-do items"));
  toDoArray.push(list);



  document.getElementById("todolist").innerHTML=`<li>` + toDoArray.join(`</li><li>`) + `</li>`;
}

