'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES& enhanced object literals for objects, functions
  openingHours,

  order(starterIndex, mainIndex, time, address) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time},`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/* //Destructing Arrays

const arr = [2, 3, 4];
//Tedious way
const a = arr[0];
const b = arr[1];
const c = arr[2];
//Faster way
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//switching variables
//Tedious way
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
//Faster way
[main, secondary] = [secondary, main];

console.log(restaurant.order(2, 0));
//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);//5 and 6
const [i, , [j, k]] = nested;
console.log(i, j, k); //2, 5 and 6

//Defaukt values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */
/* 
//Destructing Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Defaul values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({ address: 'Via del Sole, 21', starterIndex: 1 });
 */
/* 
//The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

//Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
//Tedious way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //Faster way
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant.name);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); */
/* 
//Rest Pattern and Parameters

//1) Destructuring

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// console.log(arr);
//REST; because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach'); */
/* 
//Short Circuiting (&& and ||)

//OR Operator: will return the first truthy value of all the operands, or the last value if all of them are falsy
console.log('--- OR ---');
//Use ANY data type, return ANY data type, short-ciruiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuest = 0;
const guest = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);
//AND Operator: will return the first falsy value of all the operands, or the last value if all of them are truthy
console.log('--- AND ---');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
 */
/* 
//The Nullish Coalescing Operator (??)

restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); */
/* 
//Logical Assignment Operator

const rest1 = {
  name: 'Capri',
  numGuest: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//Nullish assignment operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
/* 
//Coding Challenge#1
//1.Array players1 and players2
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
//2. Variable gk and array fieldPlayers
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3. Array allPlayers
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4. Array players1Final containing all the original team1 players plus Thiago, Coutinho and Perisic
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5. Variable for team1, draw and team2
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6. Function printGoals
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
//7.
team1 < team2 && console.log('Team 1 is like to win.');
team2 < team1 && console.log('Team 1 is like to win.'); */
/* 
//Looping Arrays: The for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
// console.log([...menu.entries()]);
 */
/* 
//Optional Chaining (?.)

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); //undefined at mon, throwing error msg
//With optional chaining
console.log(restaurant.openingHours.mon?.open); //displays undefined
console.log(restaurant.openingHours?.mon?.open); //does the same like the if-function

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exit');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty'); */
/* 
//Looping Objects: Object Keys, Values and Entries

//Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Property Entries
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open on ${open} and close at ${close}`);
}
 */
/* 
//Coding Challenge#2

//1. Loop over game.scored array & print to the console ("Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
//2. Use loop to calculate the average odd and log it to the console
const gameValue = Object.values(game.odds);
let average = 0;
for (const odd of gameValue) average += odd;
average /= gameValue.length;
console.log(average);
//3. Print the odds to the console like this: Odd of victory Bayern Munich: 1.33, Odd of draw: 3.25, Odd of victory Borrussia Dortmund: 6.5
const gameEntries = Object.entries(game.odds);
for (const [team, odd] of gameEntries) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
//Bonus: Create an object called scorers which contains all the players who scored with properties { Gnarby: 1, Hummels: 1,Lewandowski: 2}
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers); */
/* 
//Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pizza',
  'Pizza',
]);
console.log(ordersSet); //{'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Jonas')); //{'J', 'o', 'n', 'a', 's'}

console.log(ordersSet.size); //3
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); //Adds only Garlic Bread once to the set unlike array
console.log(ordersSet); //{'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
ordersSet.delete('Risotto'); //Deletes Risotto from the set
console.log(ordersSet); //{'Pasta', 'Pizza', 'Garlic Bread'}
// ordersSet.clear();//Deletes all at once
// console.log(ordersSet);//{size: 0}

for (const order of ordersSet) console.log(order); //Pasta Pizza Garlic Bread

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); //['Waiter', 'Chef', 'Manager']
console.log(new Set(staff).size); //3
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); //3
console.log(new Set('jonasschmedtmann').size); //11
 */
/* 
//Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firesnze, Italy');
console.log(rest.set(2, 'Lisbon Portugal')); //{'name' => 'Classico Italiano', 1 => 'Firesnze, Italy', 2 => 'Lisbon Portugal'}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(rest);
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //We are open :D
console.log(rest.get(1)); //Firesnze, Italy

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //We are closed :(

console.log(rest.has('categories')); //true
rest.delete(2);
// rest.clear();
console.log(rest.size); //7
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); //undefined
const arr = [3, 4];
rest.set(arr, 'Testi');
console.log(rest.get(arr)); //Testi
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
 */
/* 
//Maps: Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try again'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Yours answer?'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));
//My solution
//console.log(answer === 3 ? question.get(true) : question.get(false));

//Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
 */

//Coding Challenge#3

//1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);
//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
//3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//For precision
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
//4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF] 17:⚽ GOAL

for (const [time, event] of gameEvents) {
  const soccerEvent =
    time <= 45
      ? `[FIRST HALF] ${time}: ${event}`
      : `[SECOND HALF] ${time}: ${event}`;
  console.log(soccerEvent);
}
