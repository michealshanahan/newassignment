var shopper = {
    firstName               : "Cortney",
    shoppingList            : ["Beer", "Ramen Noodles", "Dog Food"],
    budgetOf$100            : true,
    numberOfAffordableBeers : function(costBeer, costDogFood, costRamenNoodles){
        console.log(Math.floor((100 - costDogFood - costRamenNoodles) / costBeer))
    }
}

console.log(shopper.numberOfAffordableBeers(6, 20, 10))