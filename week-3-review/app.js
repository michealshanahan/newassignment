// console.log('fired')
// console.log(axios)

// axios.get('https://api.vschool.io/jessie_mae/todo').then(res => {
//     if(res.status !== 200){
//         console.log(`There was a problem with the request, a response status of ${res.status}`)
//     }
//     console.log(res.data)
// })

////

const meals = [
    {
        title: 'Weight-lifting'
    },
    {
        _id: 'a;lsdfk;ladskjl;f8438945879',
        dish: 'Salad',
        drink: 'Miller High Life',
        apetizer: 'Hummus'
    },
    {
        _id: 'a;lsdfkasdf',
        dish: 'Nuts',
        drink: 'Water',
        apetizers: 'Coffee'
    },
    {
        _id: 'a;lsdfk;lasdfrvdx65f8438945879',
        dish: 'Double Cheese Burger with Onion Rings',
        drink: 'Mountain Dew',
        apetizers: 'Cheese Fries'
    }
]
// const disObject = meals[0]
// disObject.dish = 'Pick up Dirt'
// disObject.imgURL = 939385983
// console.log(meals)

//Create a pink square

//parent element
// const mealContainer = document.getElementById('meal-container')
//child element
// const pinkSquare = document.createElement('div')
// pinkSquare.classList.add('blocks')
// pinkSquare.setAttribute('id', 'pink-square')
// mealContainer.appendChild(pinkSquare)
// console.log(mealContainer)


//Creating a new square
//Each square is self contained
// for(let i = 0; i < meals.length; i++){
//     const square = document.createElement('div')
//     // pinkSquare.classList.add('blocks')
//     square.setAttribute('class', 'blocks')
    // square.setAttribute('id', `${meals[i]._id}`)
//     square.textContent = meals[i].dish
//     square.addEventListener('click', e =>{
//         mealContainer.removeChild(square)
//     })
//     console.log(meals[i]._id)
//     mealContainer.appendChild(square)
// }
const mealContainer = document.getElementById('meal-container')

meals.forEach(meal => {
    // console.log(meal)
    //Create a new element for each meal
    const mealElement = document.createElement('div')
    //Display the meal in the element
    mealElement.textContent = meal.dish
    //Add the 'blocks' class name to the meal
    mealElement.setAttribute('class', 'blocks')
    //We want to remove the meal upon click
    mealElement.addEventListener('click', e => {
        mealContainer.removeChild(mealElement)
    })
    //Add the meal to the document
    mealContainer.appendChild(mealElement)

})

// axios.delete(`https://api.vschool.io/jessie_mae/todo/${todoID}`)
