    const input = document.getElementById("myin");
    const list = document.getElementById("list");

    let Tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

    function saveTasks(){
        localStorage.setItem(("Tasks"), JSON.stringify(Tasks));
    }
function renderTasks(){
    list.innerHTML = "";
    Tasks.forEach((Task, index)=>{
              const li = document.createElement("li");
              const span = document.createElement("span");
              span.textContent = Task.text;

              if(Task.completed){
                span.classList.add("completed");
              }
              const editbtn = document.createElement("button");
              editbtn.textContent = "✏️";
              editbtn.onclick = function(){
            const newtext = prompt("Edit task:",Task.text);
            if(newtext !==null && newtext.trim() !== ""){
                Tasks[index].text = newtext.trim();
                saveTasks();
                renderTasks();
            }
        };

        const deltbtn = document.createElement("button");
        deltbtn.textContent = "🗑️";
        deltbtn.onclick = function(){
            Tasks.splice(index,1);
            saveTasks();
            renderTasks();
        }
        const compbtn = document.createElement("button");
        compbtn.textContent = "✅";
        compbtn.onclick = function(){
            Tasks[index].completed = !Tasks[index].completed;
            saveTasks();
            renderTasks();
        }
        li.append(span, editbtn, deltbtn, compbtn);
        list.appendChild(li);

    })
}        
        
        
function btn() {
    const value = input.value.trim();
if(value === ""){
    alert("Please enter a task.");
    return;
}
Tasks.push({text: value, completed:false});
input.value = "";
saveTasks();
renderTasks();
}
renderTasks();