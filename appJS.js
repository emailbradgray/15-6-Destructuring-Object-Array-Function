
//ex 1 Same Keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
//solution */

  function createInstructor1(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  //ex2 computed Property Values
   var favoriteNumber = 42;

var instructor2 = {
  firstName: "Colt"
}

instructor2[favoriteNumber] = "That is my favorite!"
console.log({instructor2})


//solution */
let favoriteNumber3 = 42;

const instructor3 = {
  firstName: "Colt",
  [favoriteNumber3]: "That is my favorite!"
}
console.log({instructor3})


//ex3 Object Methods
let instructor4 = {
    firstName: "Colt",
    
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){  
      return this.firstName + " says bye!";
    }

  }
  console.log({instructor4})


  //solution */

  const instructor5 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }
  console.log({instructor5})

/*
  ex4 
  Write a function which generates an animal object. 
  The function should accepts 3 arguments:
 
- species: the species of animal (‘cat’, ‘dog’)
- verb: a string used to name a function (‘bark’, ‘bleet’)
- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

Use one or more of the object enhancements we’ve covered.

 const d1 = createAnimal("dog", "bark", "Woooof!")
  // {species: "dog", bark: ƒ}
  d1.bark()  //"Woooof!"
  
  const s1 = createAnimal("sheep", "bleet", "BAAAAaaaa")
  // {species: "sheep", bleet: ƒ}
  s1.bleet() //"BAAAAaaaa"

*/
 // solution 
  const d2 = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d2.bark()  //"Woooof!"

const s2 = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s2.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
