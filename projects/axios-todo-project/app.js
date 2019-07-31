const checks = document.getElementById("checks")
axios.get("https://api.vschool.io/mikeshanahan/todo/").then(res =>{
    const todos = res.data;
    
    todos.forEach( element => {
        const lineContainer = document.createElement( "div" );
        lineContainer.setAttribute("class", "todoContainer" );
        lineContainer.setAttribute("id", element._id);
        checks.appendChild(lineContainer);
        const listItem = document.createElement("div");
        const checkbox = document.createElement("input");
        const picUrl =(url) =>{
            if(url == undefined){    
            }else{
                const picBox = document.createElement("img");
                picBox.setAttribute('src', url);
                lineContainer.appendChild(picBox);
                picBox.setAttribute('class', 'picBox');
            }
        };
        picUrl(element.imgUrl);
        checkbox.setAttribute("type", "checkbox");
        listItem.textContent = `${element.title}\n\n${element.description}`;
        listItem.setAttribute('class', 'list');
        lineContainer.appendChild(checkbox);
        lineContainer.appendChild(listItem);
        checkbox.setAttribute('value', element._id);
    });
});
const submitForm = (e) => {
    e.preventDefault();
    console.log(form.title.value)
}
const form = document.getElementById("form");
const submit = document.getElementById("submit");


submit.addEventListener('click', submitForm)