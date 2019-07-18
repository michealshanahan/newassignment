const submitButton = document.querySelector('.submit')

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    const form = document.querySelector('#master');
    let checkedBox = [];
    let dietChecked = document.querySelectorAll("input[name=diet]:checked");
    for (var i = 0; i < dietChecked.length; i++){
        checkedBox.push(dietChecked[i].value)
    }
    alert(`First Name: ${form.firstName.value} \nLast Name:${form.lastName.value} \nAge:${form.age.value} \nGender:${form.gender.value} \nDestination:${form.destinations.value} \nDietary Restrictions:${checkedBox}`)
})