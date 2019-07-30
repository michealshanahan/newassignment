const list = document.getElementById("todoContainer");
const todoList = axios.get("https://api.vschool.io/mikeshanahan/todo/").then((res) => {
    res.data.map((objects) =>{
        const output = document.createElement("div");
        output.textContent = objects.title;
        list.appendChild(output)
    })
})
console.log(todoList)
