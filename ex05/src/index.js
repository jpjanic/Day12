// Only change code below this line
var myPetsArray = [
  {
      animalType: ["Dog", "Cat", "Bird"],
      name: ["Pujdo", "Maca", "Tweety"],
  },
  {
      animalType: ["Dog", "Cat", "Bird"],
      name: ["Pujdo", "Maca", "Tweety"],
  },
  {
      animalType: ["Dog", "Cat", "Bird"],
      name: ["Pujdo", "Maca", "Tweety"],
  },
];
function myPetsFunction(pets) {
  return pets[1].name[1];
}
// Only change code above this line
console.log(myPetsFunction(myPetsArray)); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
