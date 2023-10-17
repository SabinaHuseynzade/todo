const users = JSON.parse(localStorage.getItem('users'))
const currentUser = localStorage.getItem('currentUser')

let todos = users.find(user => user.name === currentUser).todos

function updateSite(){
    $('.todos').html('')

    for(let todo of todos){
        $('.todos').html(`<div class="todo">
        <div class="todo-content">
            <h2>${todo.title}</h2>
            <p>
                ${todo.text}
            </p>
        </div>
        <div class="options">
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Edit</button>
        </div>
    </div>`)
    }
    
}

updateSite()

