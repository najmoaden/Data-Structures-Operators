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
/* 
//Coding Challenge#1
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
console.log(users[0]?.name ?? 'User array empty');
