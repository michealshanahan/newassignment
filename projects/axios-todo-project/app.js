const checks = document.getElementById("checks")
axios.get("https://api.vschool.io/mikeshanahan/todo/").then(res =>{
    const todos = res.data;
    
    todos.forEach( element => {

        const lineContainer = document.createElement( "div" );
        lineContainer.setAttribute("class", "todoContainer" );
        lineContainer.setAttribute("id", element._id);
        checks.appendChild(lineContainer);
            
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "checkbox");
        checkbox.setAttribute('value', element._id);
        checkbox.setAttribute('id', `check${element._id}`)
        lineContainer.appendChild(checkbox);
        checkbox.addEventListener("change", ()=>{
            checkLine(checkbox)})
            
        const listItem = document.createElement("div");
        listItem.textContent = element.title;
        listItem.setAttribute('class', 'list');
        listItem.setAttribute('id', `item${element._id}`);
        lineContainer.appendChild(listItem);
        
        const listDescription = document.createElement("div");
        listDescription.textContent = element.description;
        listDescription.setAttribute("id", `description${element._id}`);
        lineContainer.appendChild(listDescription);
            
            
            
        const checkComplete = (element) => {
            if(element.completed){
                checkbox.setAttribute("class", "clicked");
                checkbox.checked = true;
                listDescription.setAttribute("class", "clicked");
                listItem.setAttribute("class", "clicked");
                priceBox.setAttribute("class", "clicked");
                    
            } else {
                checkbox.setAttribute("class", "none");
                };
            };
        const priceBox = document.createElement("div");
        priceBox.textContent = `$${element.price}`;
        priceBox.setAttribute("id", `price${element._id}`);
        if(element.price){    
            lineContainer.appendChild(priceBox);
            checkComplete(element, priceBox);
        };
        const picBox = document.createElement("img");
        picBox.setAttribute('src', element.imgUrl);
        picBox.setAttribute("id", `picBoxed${element._id}`);
        if(element.imgUrl){
            lineContainer.appendChild(picBox);
            picBox.setAttribute('class', 'picBox');
        }
            
        const checkLine = (chex) => {
            if(chex.checked){
                listDescription.setAttribute("class", "clicked");
                listItem.setAttribute("class", "clicked");
                priceBox.setAttribute("class", "clicked");
                axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, {"completed": true})
            }else{
                listDescription.setAttribute("class", "none");
                listItem.setAttribute("class", "none");
                priceBox.setAttribute("class", "none");
                axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, {"completed": false})
            };
        };
        const editButton = document.createElement("input");
        editButton.setAttribute("value", "Edit");
        editButton.setAttribute("class", "editDelete");
        editButton.setAttribute("type", "button");
        editButton.setAttribute("id", `edit${element._id}`);
        lineContainer.appendChild(editButton);
        editButton.addEventListener("click", ()=>{
            editTodo(element)
        });
            
        const deleteButton = document.createElement("input");
        deleteButton.setAttribute("value", "Delete")
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("id", `delete${element._id}`);
        deleteButton.setAttribute("name", element._id);
        lineContainer.appendChild(deleteButton);
        deleteButton.addEventListener("click", ()=>{
            deleteTodo(element)
        });
        deleteButton.setAttribute("type", "button");
    });
});
const form = document.getElementById("form");
const submitForm = (e) => {
    e.preventDefault();
    const formData = {
        "title": form.title.value,
        "price": form.price.value,
        "description": form.description.value,
        "imgUrl": form.picUrl.value 
    };
    axios.post("https://api.vschool.io/mikeshanahan/todo/", formData).then(res =>{
        {   const element = res.data

            const lineContainer = document.createElement( "div" );
            lineContainer.setAttribute("class", "todoContainer" );
            lineContainer.setAttribute("id", element._id);
            checks.appendChild(lineContainer);
                
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", "checkbox");
            checkbox.setAttribute('value', element._id);
            checkbox.setAttribute('id', `check${element._id}`)
            lineContainer.appendChild(checkbox);
            checkbox.addEventListener("change", ()=>{
                checkLine(checkbox)})
                
            const listItem = document.createElement("div");
            listItem.textContent = element.title;
            listItem.setAttribute('class', 'list');
            listItem.setAttribute('id', `item${element._id}`);
            lineContainer.appendChild(listItem);
            
            const listDescription = document.createElement("div");
            listDescription.textContent = element.description;
            listDescription.setAttribute("id", `description${element._id}`);
            lineContainer.appendChild(listDescription);
                
                
                
            const checkComplete = (element) => {
                if(element.completed){
                    checkbox.setAttribute("class", "clicked");
                    checkbox.checked = true;
                    listDescription.setAttribute("class", "clicked");
                    listItem.setAttribute("class", "clicked");
                    priceBox.setAttribute("class", "clicked");
                        
                } else {
                    checkbox.setAttribute("class", "none");
                    };
                };
            const priceBox = document.createElement("div");
            priceBox.textContent = `$${element.price}`;
            priceBox.setAttribute("id", `price${element._id}`);
            if(element.price){    
                lineContainer.appendChild(priceBox);
                checkComplete(element, priceBox);
            };
            const picBox = document.createElement("img");
            picBox.setAttribute('src', element.imgUrl);
            picBox.setAttribute("id", `picBoxed${element._id}`);
            if(element.imgUrl){
                lineContainer.appendChild(picBox);
                picBox.setAttribute('class', 'picBox');
            }
                
            const checkLine = (chex) => {
                if(chex.checked){
                    listDescription.setAttribute("class", "clicked");
                    listItem.setAttribute("class", "clicked");
                    priceBox.setAttribute("class", "clicked");
                    axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, {"completed": true})
                }else{
                    listDescription.setAttribute("class", "none");
                    listItem.setAttribute("class", "none");
                    priceBox.setAttribute("class", "none");
                    axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, {"completed": false})
                };
            };
            const editButton = document.createElement("input");
            editButton.setAttribute("value", "Edit");
            editButton.setAttribute("class", "editDelete");
            editButton.setAttribute("type", "button");
            editButton.setAttribute("id", `edit${element._id}`);
            lineContainer.appendChild(editButton);
            editButton.addEventListener("click", ()=>{
                editTodo(element)
            });
                
            const deleteButton = document.createElement("input");
            deleteButton.setAttribute("value", "Delete")
            deleteButton.setAttribute("class", "delete");
            deleteButton.setAttribute("id", `delete${element._id}`);
            deleteButton.setAttribute("name", element._id);
            lineContainer.appendChild(deleteButton);
            deleteButton.addEventListener("click", ()=>{
                deleteTodo(element)
            });
            deleteButton.setAttribute("type", "button");
        }
        
    })

    
    // window.location.reload()
};
const removeElement = (elemId) => {
    const element = document.getElementById(elemId._id);
    element.parentElement.removeChild(element);
}

const removeEdit = (element) => {
    removeElement(element)
}

const deleteTodo = (element) => {
    removeElement(element)
    axios.delete(`https://api.vschool.io/mikeshanahan/todo/${element._id}`);
}

const editTodo = (element) => {
    const editEdit = document.getElementById(`edit${element._id}`);
    editEdit.parentElement.removeChild(editEdit);
    const update = document.createElement("input");
    update.setAttribute("type", "button");
    update.setAttribute("value", "Update");
    update.setAttribute("class", "editDelete");
    update.addEventListener("click", () => {
        updateItems(element);
    })

    const deleteDelete = document.getElementById(`delete${element._id}`);
    deleteDelete.parentElement.removeChild(deleteDelete);

    const chek = document.getElementById(`check${element._id}`);
    chek.parentElement.removeChild(chek);

    const contain = document.getElementById(element._id);
    const picCo = document.getElementById(`picBoxed${element._id}`);
    if(picCo){
        picCo.parentElement.removeChild(picCo);
    }
    const editPic = document.createElement("input");
    editPic.setAttribute("value", element.imgUrl);
    editPic.setAttribute("id", `newPic${element._id}`);

    const itemCo = document.getElementById(`item${element._id}`);
    itemCo.parentElement.removeChild(itemCo);
    const editItem = document.createElement("input");
    editItem.setAttribute("value", element.title);
    editItem.setAttribute("id", `newItem${element._id}`);
    editItem.required = true;

    const descriptionCo = document.getElementById(`description${element._id}`);
    descriptionCo.parentElement.removeChild(descriptionCo);
    const editDescription = document.createElement("input");
    editDescription.setAttribute("id", `newDescription${element._id}`);
    editDescription.setAttribute("value", element.description);

    const priceCo = document.getElementById(`price${element._id}`);
    priceCo.parentElement.removeChild(priceCo);
    const editPrice = document.createElement("input");
    editPrice.setAttribute("type", "number");
    editPrice.setAttribute("value", element.price);
    editPrice.setAttribute("id", `newPrice${element._id}`);

    contain.appendChild(editItem);
    contain.appendChild(editDescription);
    contain.appendChild(editPrice);
    contain.appendChild(editPic);
    contain.appendChild(update);
    const updateItem = document.getElementById(`newItem${element._id}`);
    const updateObject = document.getElementById(`newDescription${element._id}`);
    const updatePrice = document.getElementById(`newPrice${element._id}`); 
    const updatePic = document.getElementById(`newPic${element._id}`);
    
    const updateItems = (element) => {
        const newValues = {
            "title": updateItem.value,
            "price": updatePrice.value,
            "description": updateObject.value,
            "imgUrl": updatePic.value
        };
        
        removeEdit(element)

        

        axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, newValues).then(res =>{   
            const element2 = res.data

            const lineContainer = document.createElement( "div" );
            lineContainer.setAttribute("class", "todoContainer" );
            lineContainer.setAttribute("id", element2._id);
            checks.appendChild(lineContainer);
                
            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", "checkbox");
            checkbox.setAttribute('value', element2._id);
            checkbox.setAttribute('id', `check${element2._id}`)
            lineContainer.appendChild(checkbox);
            checkbox.addEventListener("change", ()=>{
                checkLine(checkbox)})
                
            const listItem = document.createElement("div");
            listItem.textContent = element2.title;
            listItem.setAttribute('class', 'list');
            listItem.setAttribute('id', `item${element2._id}`);
            lineContainer.appendChild(listItem);
            
            const listDescription = document.createElement("div");
            listDescription.textContent = element2.description;
            listDescription.setAttribute("id", `description${element2._id}`);
            lineContainer.appendChild(listDescription);
                
                
                
            const checkComplete = (element2) => {
                if(element2.completed){
                    checkbox.setAttribute("class", "clicked");
                    checkbox.checked = true;
                    listDescription.setAttribute("class", "clicked");
                    listItem.setAttribute("class", "clicked");
                    priceBox.setAttribute("class", "clicked");
                        
                } else {
                    checkbox.setAttribute("class", "none");
                    };
                };
            const priceBox = document.createElement("div");
            priceBox.textContent = `$${element2.price}`;
            priceBox.setAttribute("id", `price${element2._id}`);
            if(element2.price){    
                lineContainer.appendChild(priceBox);
                checkComplete(element2, priceBox);
            };
            const picBox = document.createElement("img");
            picBox.setAttribute('src', element2.imgUrl);
            picBox.setAttribute("id", `picBoxed${element2._id}`);
            if(element2.imgUrl){
                lineContainer.appendChild(picBox);
                picBox.setAttribute('class', 'picBox');
            }
                
            const checkLine = (chex) => {
                if(chex.checked){
                    listDescription.setAttribute("class", "clicked");
                    listItem.setAttribute("class", "clicked");
                    priceBox.setAttribute("class", "clicked");
                    axios.put(`https://api.vschool.io/mikeshanahan/todo/${element2._id}`, {"completed": true})
                }else{
                    listDescription.setAttribute("class", "none");
                    listItem.setAttribute("class", "none");
                    priceBox.setAttribute("class", "none");
                    axios.put(`https://api.vschool.io/mikeshanahan/todo/${element2._id}`, {"completed": false})
                };
            };
            const editButton = document.createElement("input");
            editButton.setAttribute("value", "Edit");
            editButton.setAttribute("class", "editDelete");
            editButton.setAttribute("type", "button");
            editButton.setAttribute("id", `edit${element2._id}`);
            lineContainer.appendChild(editButton);
            editButton.addEventListener("click", ()=>{
                editTodo(element2)
            });
                
            const deleteButton = document.createElement("input");
            deleteButton.setAttribute("value", "Delete")
            deleteButton.setAttribute("class", "delete");
            deleteButton.setAttribute("id", `delete${element2._id}`);
            deleteButton.setAttribute("name", element2._id);
            lineContainer.appendChild(deleteButton);
            deleteButton.addEventListener("click", ()=>{
                deleteTodo(element2)
            });
            deleteButton.setAttribute("type", "button");
        })



        

    };
};





const submit = document.getElementById("submit");
submit.addEventListener('click', submitForm);
// const deleteFile = 