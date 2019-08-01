const checks = document.getElementById("checks")
axios.get("https://api.vschool.io/mikeshanahan/todo/").then(res =>{
    const delButton = (element) => {
        const deleteButton = document.createElement("input");
        deleteButton.setAttribute("value", "Delete")
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("id", `delete${element._id}`);
        deleteButton.setAttribute("name", element._id);
        deleteButton.addEventListener("click", ()=>{
            deleteTodo(element)
        });
        deleteButton.setAttribute("type", "button");
    }
    const edButton =(element) => {
        editButton = document.createElement("input");
        editButton.setAttribute("value", "Edit");
        editButton.setAttribute("class", "editDelete");
        editButton.setAttribute("type", "button");
        editButton.setAttribute("id", `edit${element._id}`)
        editButton.addEventListener("click", ()=>{
            editTodo(element)
        });
    };
    const liContainer = (element) => {
        const lineContainer = document.createElement( "div" );
        lineContainer.setAttribute("class", "todoContainer" );
        lineContainer.setAttribute("id", element._id);
        checks.appendChild(lineContainer);
    }
    const picturePrint = (element) => {
        const picContainer = document.createElement("div");
        picContainer.setAttribute("class", "picBox");
        picContainer.setAttribute("id", `pic${element._id}`);
    }
    const pricePrint = (element) => {
        const priceContainer = document.createElement("div");
        priceContainer.setAttribute("id", `price${element._id}`);
    }
    const price = (element) => {
        if(element.price){
            const priceBox = document.createElement("div");
            priceBox.textContent = `$${element.price}`;
            priceContainer.appendChild(priceBox);
        };
    };
    const picUrl =(element, destination) =>{
        if(element.imgUrl){
            const picBox = document.createElement("img");
            picBox.setAttribute('src', element.imgUrl);
            destination.appendChild(picBox);
            picBox.setAttribute('class', 'picBox');
        }
    };
    const itemPrint = (element) => {
        const listItem = document.createElement("div");
        listItem.textContent = element.title;
        listItem.setAttribute('class', 'list');
        listItem.setAttribute('id', `item${element._id}`)
    }
    const checkLine = (chex) => {
        console.log(chex.checked);
        if(chex.checked){
            listDescription.setAttribute("class", "clicked");
            listItem.setAttribute("class", "clicked");
            priceContainer.setAttribute("class", "clicked");
            axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, {"completed": true})
        }else{
            listDescription.setAttribute("class", "none");
            listItem.setAttribute("class", "none");
            priceContainer.setAttribute("class", "none");
            axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, {"completed": false})
        };
    };
    const printCheckbox = (element, location) => {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "checkbox");
        checkbox.setAttribute('value', element._id);
        checkbox.setAttribute('id', `check${element._id}`)
        location.appendChild(checkbox);
    }


    const todos = res.data;
    todos.forEach( element => {
        const lineContainer = document.createElement( "div" );
        const picContainer = document.createElement("div");
        const deleteButton = document.createElement("input");
        const priceContainer = document.createElement("div");
       
        delButton(element, lineContainer);
        edButton(element, lineContainer);
        liContainer(element, lineContainer);
        picturePrint(element, lineContainer);
        pricePrint(element, lineContainer);
        itemPrint(element);
        price(element);
        picUrl(element);
        
        
        
        const listDescription = document.createElement("div");
        listDescription.textContent = element.description;
        listDescription.setAttribute("id", `description${element._id}`);
        
        
        lineContainer.appendChild(listItem);
        lineContainer.appendChild(listDescription);
        
        lineContainer.appendChild(priceContainer);
        lineContainer.appendChild(picContainer);
        lineContainer.appendChild(editButton);
        lineContainer.appendChild(deleteButton);
        
        checkbox.addEventListener("change", ()=>{
            checkLine(checkbox)})
            const checkComplete = (element) => {
                if(element.completed){
                    listDescription.setAttribute("class", "clicked");
                    listItem.setAttribute("class", "clicked");
                    priceContainer.setAttribute("class", "clicked");
                    checkbox.checked = true;
                } else {
                    listDescription.setAttribute("class", "none");
                    listItem.setAttribute("class", "none");
                    priceContainer.setAttribute("class", "none");
                }
            }
            checkComplete(element); 
    });
});
const submitForm = (e) => {
    e.preventDefault();
    const formData = {
        "title": form.title.value,
        "price": form.price.value,
        "description": form.description.value,
        "imgUrl": form.picUrl.value 
    };
    axios.post("https://api.vschool.io/mikeshanahan/todo/", formData)
    // window.location.reload()
};
const removeElement = (elemId) => {
    const element = document.getElementById(elemId._id);
    element.parentElement.removeChild(element);
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
    const picCo = document.getElementById(`pic${element._id}`);
    picCo.parentElement.removeChild(picCo);
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
        printItem(),
        axios.put(`https://api.vschool.io/mikeshanahan/todo/${element._id}`, newValues);
    };
};




const form = document.getElementById("form");
const submit = document.getElementById("submit");
submit.addEventListener('click', submitForm);
// const deleteFile = 