const pokemon = require('./data.js')
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "med"
console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
game.party.push(pokemon[3])
console.log(game)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const pokemon = [
    { "Pikachu", type: "Electric", HP: 35 },
    { "Charmander", type: "Fire", HP: 39 },
    { "Bulbasaur", type: "Grass/Poison", HP: 45 },
    { "Squirtle", type: "Water", HP: 44 },
    { "Jigglypuff", type: "Normal/Fairy", HP: 115 },
    { "Gengar", type: "Ghost/Poison", HP: 60 },
    { "Onix", type: "Rock/Ground", HP: 35 },
    { "Eevee", type: "Normal", HP: 55 }
    console.log(party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
[]
{"Pewter Gym", difficulty: 2, completed: false },
{"Cerulean Gym", difficulty: 3, completed: false },
{"Vermilion Gym", difficulty: 1, completed: false },
{"Celadon Gym", difficulty: 4, completed: false },
{"Fuchsia Gym", difficulty: 2, completed: false }
];
console.log(gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

{
    "Bulbasaur", type: "Grass/Poison", HP: 45 },
    {"Ivysaur", type: "Grass/Poison", HP: 60 },
    {"Charmander", type: "Fire", HP: 39 },
    {"Charmeleon", type: "Fire", HP: 58 },
    {"Squirtle", type: "Water", HP: 44 },
    {"Wartortle", type: "Water", HP: 59 },
    {"Pikachu", type: "Electric", HP: 35 },
    {"Raichu", type: "Electric", HP: 60 }
console.log (party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

{ "Ivysaur", type: "Grass/Poison", HP: 60 },
{"Gengar", type: "Ghost/Poison", HP: 60 },
{"Wartortle", type: "Water", HP: 59 }
console.log(pokemon.name);

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
    {"Bulbasaur", type: "Grass/Poison", HP: 45 },
    {"Ivysaur", type: "Grass/Poison", HP: 60 },
    {"Charmander", type: "Fire", HP: 39 },
    {"Charmeleon", type: "Fire", HP: 58 },
    {"Squirtle", type: "Water", HP: 44 },
    {"Wartortle", type: "Water", HP: 59 },
    {"Pikachu", type: "Electric", HP: 35 },
    {"Raichu", type: "Electric", HP: 60 }
]; console.log(p.name),