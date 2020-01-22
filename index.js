const utilities = require("./utilities")

function getDogNames() {
  return utilities
    .getDogBreeds()
    .then(dogBreeds => dogBreeds.map(dogBreed => dogBreed.name))
}

function getDogBreed(breed) {
  return function(dogNames) {
    return dogNames.find(dogName => dogName === breed) || "Not Found"
  }
}

// Write a function called getDogNames that returns an array of strings with the names of the dog breed
// Write a function called getDogBreed which takes dogNames and a breed, returns the the single breed found
// In the case where the breed isn't found, just return "Not Found"
//
// Lastly, output the breed if found, or just "Not Found"
// For our purposes, use "Golden Retriever" as the breed

getDogNames()
  .then(getDogBreed("Golden Retriever"))
  .then(console.log)
