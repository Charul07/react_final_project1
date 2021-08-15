// to mix numbers in JS
// let price = 900;
// console.log('The price of movie is: ',price);
// console.log(`The price of 
// movie is ${price}`);

let moviesData = `[{
    "id": 1,
    "movie_name": "In the Bleak Midwinter",
    "price": 375,
    "inStock": true,
    "rating": 1
  }, {
    "id": 2,
    "movie_name": "SherryBaby",
    "price": 919,
    "inStock": false,
    "rating": 4
  }, {
    "id": 3,
    "movie_name": "Münchhausen",
    "price": 417,
    "inStock": false,
    "rating": 1
  }, {
    "id": 4,
    "movie_name": "Mile... Mile & a Half",
    "price": 497,
    "inStock": true,
    "rating": 4
  }, {
    "id": 5,
    "movie_name": "Italian Straw Hat, The (Un chapeau de paille d'Italie)",
    "price": 346,
    "inStock": false,
    "rating": 4
  }, {
    "id": 6,
    "movie_name": "The Well",
    "price": 861,
    "inStock": false,
    "rating": 4
  }, {
    "id": 7,
    "movie_name": "Earth vs. the Spider",
    "price": 366,
    "inStock": false,
    "rating": 5
  }, {
    "id": 8,
    "movie_name": "Kleines Arschloch - Der Film",
    "price": 299,
    "inStock": true,
    "rating": 4
  }, {
    "id": 9,
    "movie_name": "Times of Harvey Milk, The",
    "price": 578,
    "inStock": true,
    "rating": 5
  }, {
    "id": 10,
    "movie_name": "Transylvania",
    "price": 323,
    "inStock": false,
    "rating": 5
  }, {
    "id": 11,
    "movie_name": "Tall in the Saddle",
    "price": 255,
    "inStock": true,
    "rating": 1
  }, {
    "id": 12,
    "movie_name": "The Gilded Cage",
    "price": 603,
    "inStock": false,
    "rating": 1
  }, {
    "id": 13,
    "movie_name": "Final Fantasy VII: Advent Children",
    "price": 792,
    "inStock": true,
    "rating": 5
  }, {
    "id": 14,
    "movie_name": "Life After Beth",
    "price": 485,
    "inStock": true,
    "rating": 5
  }, {
    "id": 15,
    "movie_name": "Kramer vs. Kramer",
    "price": 431,
    "inStock": false,
    "rating": 2
  }, {
    "id": 16,
    "movie_name": "Big Chill, The",
    "price": 489,
    "inStock": true,
    "rating": 5
  }, {
    "id": 17,
    "movie_name": "Laughing Policeman, The",
    "price": 190,
    "inStock": false,
    "rating": 1
  }, {
    "id": 18,
    "movie_name": "Bon Voyage, Charlie Brown (and Don't Come Back!)",
    "price": 667,
    "inStock": true,
    "rating": 1
  }, {
    "id": 19,
    "movie_name": "This Is Spinal Tap",
    "price": 661,
    "inStock": true,
    "rating": 2
  }, {
    "id": 20,
    "movie_name": "Donner Pass",
    "price": 180,
    "inStock": false,
    "rating": 3
  }, {
    "id": 21,
    "movie_name": "Muppets From Space",
    "price": 582,
    "inStock": true,
    "rating": 2
  }, {
    "id": 22,
    "movie_name": "Shut Up and Play the Hits",
    "price": 796,
    "inStock": true,
    "rating": 5
  }, {
    "id": 23,
    "movie_name": "Holiday",
    "price": 648,
    "inStock": true,
    "rating": 4
  }, {
    "id": 24,
    "movie_name": "Suicide Club (Jisatsu saakuru)",
    "price": 188,
    "inStock": true,
    "rating": 5
  }, {
    "id": 25,
    "movie_name": "Beau Geste",
    "price": 547,
    "inStock": true,
    "rating": 3
  }, {
    "id": 26,
    "movie_name": "Body and Soul",
    "price": 895,
    "inStock": false,
    "rating": 4
  }, {
    "id": 27,
    "movie_name": "Pick-up Artist, The",
    "price": 874,
    "inStock": true,
    "rating": 3
  }, {
    "id": 28,
    "movie_name": "Marvin Gaye: What's Going On",
    "price": 820,
    "inStock": true,
    "rating": 1
  }, {
    "id": 29,
    "movie_name": "People in Places",
    "price": 415,
    "inStock": false,
    "rating": 3
  }, {
    "id": 30,
    "movie_name": "Pretty Poison",
    "price": 377,
    "inStock": false,
    "rating": 4
  }, {
    "id": 31,
    "movie_name": "Love and a Bullet",
    "price": 416,
    "inStock": false,
    "rating": 1
  }, {
    "id": 32,
    "movie_name": "Frozen Assets",
    "price": 970,
    "inStock": true,
    "rating": 4
  }, {
    "id": 33,
    "movie_name": "Urban Legends: Bloody Mary",
    "price": 273,
    "inStock": false,
    "rating": 3
  }, {
    "id": 34,
    "movie_name": "Claim, The",
    "price": 282,
    "inStock": true,
    "rating": 4
  }, {
    "id": 35,
    "movie_name": "S.O.S. Coast Guard",
    "price": 560,
    "inStock": false,
    "rating": 4
  }, {
    "id": 36,
    "movie_name": "Parent Trap, The",
    "price": 151,
    "inStock": false,
    "rating": 3
  }, {
    "id": 37,
    "movie_name": "Games",
    "price": 406,
    "inStock": false,
    "rating": 1
  }, {
    "id": 38,
    "movie_name": "Born Yesterday",
    "price": 118,
    "inStock": true,
    "rating": 3
  }, {
    "id": 39,
    "movie_name": "Cry of the Banshee",
    "price": 390,
    "inStock": true,
    "rating": 2
  }, {
    "id": 40,
    "movie_name": "The Slap",
    "price": 578,
    "inStock": false,
    "rating": 2
  }, {
    "id": 41,
    "movie_name": "Oh Boy (A Coffee in Berlin)",
    "price": 293,
    "inStock": true,
    "rating": 1
  }, {
    "id": 42,
    "movie_name": "Jumping the Broom",
    "price": 381,
    "inStock": true,
    "rating": 1
  }, {
    "id": 43,
    "movie_name": "Onegin",
    "price": 343,
    "inStock": true,
    "rating": 1
  }, {
    "id": 44,
    "movie_name": "Out of Time",
    "price": 973,
    "inStock": true,
    "rating": 4
  }, {
    "id": 45,
    "movie_name": "Hitman (Contract Killer) (Sat sau ji wong)",
    "price": 861,
    "inStock": false,
    "rating": 2
  }, {
    "id": 46,
    "movie_name": "The Living Magoroku",
    "price": 355,
    "inStock": false,
    "rating": 5
  }, {
    "id": 47,
    "movie_name": "So Young (Zhi wo men zhong jiang shi qu de qing chun)",
    "price": 693,
    "inStock": false,
    "rating": 3
  }, {
    "id": 48,
    "movie_name": "How the West Was Fun",
    "price": 654,
    "inStock": false,
    "rating": 3
  }, {
    "id": 49,
    "movie_name": "Mr. Popper's Penguins",
    "price": 454,
    "inStock": false,
    "rating": 4
  }, {
    "id": 50,
    "movie_name": "Last of Robin Hood, The",
    "price": 497,
    "inStock": true,
    "rating": 2
  }, {
    "id": 51,
    "movie_name": "People Will Talk",
    "price": 256,
    "inStock": true,
    "rating": 2
  }, {
    "id": 52,
    "movie_name": "Twelve",
    "price": 999,
    "inStock": false,
    "rating": 3
  }, {
    "id": 53,
    "movie_name": "Disorderly Orderly, The",
    "price": 280,
    "inStock": false,
    "rating": 1
  }, {
    "id": 54,
    "movie_name": "Highway Racer",
    "price": 492,
    "inStock": false,
    "rating": 5
  }, {
    "id": 55,
    "movie_name": "Double Trouble",
    "price": 181,
    "inStock": true,
    "rating": 4
  }, {
    "id": 56,
    "movie_name": "Delphine 1, Yvan 0",
    "price": 890,
    "inStock": true,
    "rating": 2
  }, {
    "id": 57,
    "movie_name": "Revenge of the Zombies",
    "price": 934,
    "inStock": false,
    "rating": 2
  }, {
    "id": 58,
    "movie_name": "Blink",
    "price": 147,
    "inStock": true,
    "rating": 3
  }, {
    "id": 59,
    "movie_name": "History of Violence, A",
    "price": 753,
    "inStock": false,
    "rating": 1
  }, {
    "id": 60,
    "movie_name": "Curse of the Demon (Night of the Demon)",
    "price": 662,
    "inStock": true,
    "rating": 2
  }, {
    "id": 61,
    "movie_name": "Dinner Rush",
    "price": 429,
    "inStock": false,
    "rating": 3
  }, {
    "id": 62,
    "movie_name": "Woman in The Septic Tank, The (Ang Babae sa septic tank)",
    "price": 214,
    "inStock": true,
    "rating": 1
  }, {
    "id": 63,
    "movie_name": "Beyond All Boundaries",
    "price": 715,
    "inStock": true,
    "rating": 4
  }, {
    "id": 64,
    "movie_name": "Last Man on Earth, The (Ultimo uomo della Terra, L')",
    "price": 923,
    "inStock": false,
    "rating": 4
  }, {
    "id": 65,
    "movie_name": "Wishful Thinking",
    "price": 448,
    "inStock": true,
    "rating": 4
  }, {
    "id": 66,
    "movie_name": "Lake House, The",
    "price": 404,
    "inStock": true,
    "rating": 4
  }, {
    "id": 67,
    "movie_name": "Hound of the Baskervilles, The",
    "price": 196,
    "inStock": false,
    "rating": 2
  }, {
    "id": 68,
    "movie_name": "Bedroom Window, The",
    "price": 222,
    "inStock": true,
    "rating": 1
  }, {
    "id": 69,
    "movie_name": "Blackrock",
    "price": 909,
    "inStock": false,
    "rating": 4
  }, {
    "id": 70,
    "movie_name": "Devils on the Doorstep (Guizi lai le)",
    "price": 618,
    "inStock": false,
    "rating": 1
  }, {
    "id": 71,
    "movie_name": "Lone Ranger, The",
    "price": 212,
    "inStock": false,
    "rating": 2
  }, {
    "id": 72,
    "movie_name": "The Seven Males",
    "price": 457,
    "inStock": true,
    "rating": 4
  }, {
    "id": 73,
    "movie_name": "Breast Men",
    "price": 238,
    "inStock": false,
    "rating": 2
  }, {
    "id": 74,
    "movie_name": "Witchboard",
    "price": 841,
    "inStock": false,
    "rating": 1
  }, {
    "id": 75,
    "movie_name": "Freaky Friday",
    "price": 422,
    "inStock": false,
    "rating": 5
  }, {
    "id": 76,
    "movie_name": "Slaves of New York",
    "price": 474,
    "inStock": false,
    "rating": 1
  }, {
    "id": 77,
    "movie_name": "Gloria",
    "price": 896,
    "inStock": false,
    "rating": 1
  }, {
    "id": 78,
    "movie_name": "Honeysuckle Rose (a.k.a. On the Road Again)",
    "price": 733,
    "inStock": false,
    "rating": 4
  }, {
    "id": 79,
    "movie_name": "Vessel of Wrath",
    "price": 322,
    "inStock": false,
    "rating": 4
  }, {
    "id": 80,
    "movie_name": "Art of War, The",
    "price": 991,
    "inStock": true,
    "rating": 4
  }, {
    "id": 81,
    "movie_name": "Thoroughbreds Don't Cry",
    "price": 642,
    "inStock": true,
    "rating": 4
  }, {
    "id": 82,
    "movie_name": "Tully",
    "price": 487,
    "inStock": true,
    "rating": 4
  }, {
    "id": 83,
    "movie_name": "Legend of Bagger Vance, The",
    "price": 853,
    "inStock": true,
    "rating": 2
  }, {
    "id": 84,
    "movie_name": "Dead Man's Walk",
    "price": 793,
    "inStock": false,
    "rating": 4
  }, {
    "id": 85,
    "movie_name": "One Potato, Two Potato",
    "price": 663,
    "inStock": false,
    "rating": 1
  }, {
    "id": 86,
    "movie_name": "Homework",
    "price": 228,
    "inStock": true,
    "rating": 4
  }, {
    "id": 87,
    "movie_name": "Lebanon",
    "price": 807,
    "inStock": true,
    "rating": 2
  }, {
    "id": 88,
    "movie_name": "Lawman",
    "price": 893,
    "inStock": true,
    "rating": 3
  }, {
    "id": 89,
    "movie_name": "Firestarter",
    "price": 822,
    "inStock": false,
    "rating": 5
  }, {
    "id": 90,
    "movie_name": "Stuck on You",
    "price": 874,
    "inStock": false,
    "rating": 3
  }, {
    "id": 91,
    "movie_name": "Lotto Land",
    "price": 210,
    "inStock": true,
    "rating": 4
  }, {
    "id": 92,
    "movie_name": "Apparition, The",
    "price": 225,
    "inStock": false,
    "rating": 1
  }, {
    "id": 93,
    "movie_name": "Tim's Vermeer",
    "price": 247,
    "inStock": false,
    "rating": 2
  }, {
    "id": 94,
    "movie_name": "Thumbelina",
    "price": 891,
    "inStock": false,
    "rating": 2
  }, {
    "id": 95,
    "movie_name": "Grey, The",
    "price": 922,
    "inStock": false,
    "rating": 1
  }, {
    "id": 96,
    "movie_name": "The Hire: Powder Keg",
    "price": 919,
    "inStock": true,
    "rating": 1
  }, {
    "id": 97,
    "movie_name": "Body Snatchers",
    "price": 738,
    "inStock": false,
    "rating": 4
  }, {
    "id": 98,
    "movie_name": "By the Sword",
    "price": 244,
    "inStock": false,
    "rating": 4
  }, {
    "id": 99,
    "movie_name": "Germinal",
    "price": 303,
    "inStock": false,
    "rating": 3
  }, {
    "id": 100,
    "movie_name": "Kid & I, The",
    "price": 120,
    "inStock": false,
    "rating": 1
  }] `

  export {moviesData}

  //to change the json data into pure objects
  moviesData = JSON.parse(moviesData);
//   console.log(moviesData);


//forEach loop to print only movies name which is in stock
// moviesData.forEach((movie) => {
//     if(movie.inStock)
//     console.log(movie.movie_name);
// })

//using filter print an array that is in stock
// let inStock = moviesData.filter((movie) => (movie.inStock));
// let price = moviesData.filter((movie) => (movie.price > 500));


// sorting(array, 'name', 'ascending')