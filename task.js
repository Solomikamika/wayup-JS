
//task 1

for(let num = 10; num < 52; num += 2){
        console.log(num);
    }

//task 2

let myData = {
    firstname : "Solomia",
    lastName : "Malenka",
    age : 28,
    pets : false
}

//task 3

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
console.log(array[3], array[7], array[0], array[8], array[11], array[5], array[9], array[6], array[4], array[1], array[12], array[2], array[10]);

//task 4

const myName = (firstName, lastName) => {
    
        const fullName = `${firstName} ${lastName}`;
        console.log(fullName);
      
};

myName('Solomia', 'Malenka');

//task 5

let number = 21;
while (number < 69){
    console.log(number);
    number += 2;
}