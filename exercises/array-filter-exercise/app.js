const fiveAndGreaterOnly = (arr) => {
   return arr.filter((number) => {
        return number >= 5
    } )
  }
  // test
  console.log(fiveAndGreaterOnly([5, 3, 6, 8, 2]));

  function evensOnly(arr) {
   return arr.filter(number => {
       return (number % 2 === 0)
   })
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  function fiveCharactersOrFewerOnly(arr) {
      return arr.filter(animals => {
          return animals.length <= 5
      })
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


  function peopleWhoBelongToTheIlluminati(arr){
      return arr.filter(people => {
          return people.member === true;
      })
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      {
          name: "Angelina Jolie",
          member: true
      },
      {
          name: "Eric Jones",
          member: false
      },
      {
          name: "Paris Hilton",
          member: true
      },
      {
          name: "Kayne West",
          member: false
      },
      {
          name: "Bob Ziroll",
          member: true
      }
  ]));


  function ofAge(arr){
    return arr.filter(people => {
        return people.age >= 18;
    })
  }
  console.log(ofAge([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));