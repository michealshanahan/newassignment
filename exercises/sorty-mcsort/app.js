const users = [
    {
        firstName: "Billy",
        lastName: "Madison", 
        age: 32
    },
    {
        firstName: "Tommy",
        lastName: "Pickles", 
        age: 32
    },
    {
        firstName: "Ray",
        lastName: "Charles", 
        age: 32
    },
    {
        firstName: "Lady",
        lastName: "Gaga", 
        age: 32
    },
    {
        firstName: "Elizabeth",
        lastName: "Taylor", 
        age: 32
    },
    {
        firstName: "Led",
        lastName: "Zeplin", 
        age: 32
    },
    {
        firstName: "Micael",
        lastName: "Johnson", 
        age: 32
    },
    {
        firstName: "Keri",
        lastName: "Strug", 
        age: 32
    },
    {
        firstName: "Chucky",
        lastName: "Finster", 
        age: 32
    },
    {
        firstName: "Angelica",
        lastName: "Pickles", 
        age: 32
    },
]

const sorted = (arr, trueOrFalse) => {
    const sorty = trueOrFalse ? arr.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1) :
    arr.sort((a, b) => (a.lastName < b.lastName) ? 1 : -1)
    return sorty
}

console.log (sorted(users, true))