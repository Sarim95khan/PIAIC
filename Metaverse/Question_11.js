//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

var my_friends = ['Fahad Ullah', 'Salman Khan', 'Murtuza Hussain'];

console.log(my_friends);

console.log(my_friends[0]);
console.log(my_friends[1]);
console.log(my_friends[2]);

my_friends[1] = 'Yahya Ahmed Khan'
console.log(my_friends);

var my_office_friends = [];
console.log(my_friends);

my_office_friends[0] = 'Murtuza Hussain';
my_office_friends[1] = 'Wasiq Ali';

console.log (my_office_friends);


//Another way to make array

const my_new_friends = new Array("Murtuza Husasain","Wasiq Ali", "Salman Khan");
console.log(my_new_friends);

//Acessing the whole array

const cars = ['Audi', 'Honda', 'BMW'];
document.getElementById("demo").innerHTML = cars;

