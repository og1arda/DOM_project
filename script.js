
//add Todo Element


const form = document.querySelector("form")
const input = document.querySelector("#txtTaskName")
const btnAddNewTask = document.querySelector("#btnAddNewTask")
const btnDeleteAll = document.querySelector("#btnDeleteAll")
const taskList = document.querySelector("#task-list")
let todos



//load items
loadItems()

function loadItems() {
    todos = getItemsFromLS()
    todos.forEach(function (item) {
        createItem(item)
    })
}

//get items from local storage
function getItemsFromLS() {
    if (localStorage.getItem("todos") === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos")) // convert to array from string thanks to JSON.parse command
    }
    return todos
}

// set item to local storage 
function setItemToLS(newTodo) {
    todos = getItemsFromLS()
    todos.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos)) //opposite of getItem

}



function createItem(newTodo) {
    // create li 

    const li = document.createElement("li")
    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(newTodo))

    // create a 


    const a = document.createElement("a")
    a.classList = "delete-item float-right"
    a.setAttribute("href", "#")
    a.innerHTML = '<i class="fas fa-times"></i>'

    li.appendChild(a)
    taskList.appendChild(li)

}

eventListeners()

function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem)
    // delete an item
    taskList.addEventListener("click", deleteItem)
    //delete ALL item
    btnDeleteAll.addEventListener("click", deleteallItem)
}





function addNewItem(e) {

    if (input.value === '') {
        alert("add new item")
        //console.log("submit")
    }

    //create item
    createItem(input.value)

    setItemToLS(input.value)




    input.value = ""

    e.preventDefault()

}

//Delete Element
function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        if (confirm("Are you sure to delete element?")) {
            // console.log(e.target)
            e.target.parentElement.parentElement.remove()
            deleteTodoFromSotrage(e.target.parentElement.parentElement.textContent)
        }
    }
    e.preventDefault //i don't want the page to go up every time
}

function deleteTodoFromSotrage(deletetodo) {
    let todos = getItemsFromLS()
    todos.forEach(function(todo,index){
        if(todo===deletetodo){
            todos.splice(index,1)
        }
    })

    localStorage.setItem("todos",JSON.stringify(todos))
}


//Delete All Element
function deleteallItem(e) {
    if (confirm("Are you sure to delete all element?")) {
    
        
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild)
        }
        localStorage.clear()
    }


    // taskList.innerHTML="" its another option to delete all
}
