// 1. node.js, typescript and vs code installed carefully.
// 2. Personal message:
var name1 = "Ali";
console.log("Hello " + name1 + ", would you like to learn some python today?");
// 3. Name cases:
var x = "Akber";
var y = (x.toLocaleLowerCase());
console.log(y);
var z = (x.toLocaleUpperCase());
console.log(z);
// sorry i could not do (title case)    
// 4.Famous quote:
var quote = "Nelson Mandela said:, “Education is the most powerful weapon which you can use to change the world.”";
console.log(quote);
// 5.Famous quote 2:
var famous_person = "Nelson Mandela";
var message = "“Education is the most powerful weapon which you can use to change the world.”";
console.log(famous_person + " Said:, " + message);
// 6. Stripping Names:
var name2 = "Usman";
console.log("\t" + name2 + "\t"); // name with whitespace characters
console.log("\n" + name2); // name after strip
// 7. Number Eight
console.log(7 + 1); //addition
console.log(10 - 2); //Substraction
console.log(2 * 4); //Multiplication
console.log(24 / 3); //division
// 8. create four lines like this console.log(5 + 3)
console.log(7 + 1);
console.log(4 + 4);
console.log(6 + 2);
console.log(5 + 3);
// 9. Favourt number:
var favourtnumber = 8;
console.log("My favourt and lucky Number is " + favourtnumber);
// 10. Adding comments:
// I already did this thing in my previous program but for the answer of this question, 
// my name is Ghulam Akber its 19th febaruary 2024 and its 11:15pm.
// 11. array of friends name:
var names = ['Ashraf', 'Raja', 'Rubab', 'Husain', 'Ali'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
// 12. Greetings:
var message1 = "be ready, tomorrow we will have to attend the IT class.";
console.log(names[0] + " " + message1);
console.log(names[1] + " " + message1);
console.log(names[2] + " " + message1);
console.log(names[3] + " " + message1);
console.log(names[4] + " " + message1);
// 13. Own Array:
var vehicle = "Range Rover";
var list = ['is my favourt vehicle.', 'I wish i have a', 'is comfortable to travel'];
console.log(vehicle + " " + list[0]);
console.log(list[1] + " " + vehicle);
console.log(vehicle + " " + list[2]);
// 14. dinner invitation:
var guest = ['Rehman', 'Sabiha', 'Shahid'];
var message2 = "You are invited to have a dinner tonight at my Home. I hope you will come.";
console.log("Hello " + guest[0] + " \n" + message2);
console.log("Hello " + guest[1] + " \n" + message2);
console.log("Hello " + guest[2] + " \n" + message2);
// 15. Changing guest list
console.log(guest[1] + " can't make dinner.");
guest.splice(1, 1); // delet guest name who can't make dinner
console.log(guest);
guest.splice(1, 0, 'Bisma'); // updating new guest
console.log(guest);
console.log("Hello " + guest[0] + " \n" + message2);
console.log("Hello " + guest[1] + " \n" + message2);
console.log("Hello " + guest[2] + " \n" + message2);
// 16. More guest:
console.log("We found a bigger dinner Table, so we are going to invite three more guests");
guest.unshift('Irfan');
guest.splice(2, 0, 'Karim');
guest.push('Salma'); // Sorry i have no idea how to use append.
console.log(guest);
// 17. shrink guests:
console.log("you can invite only two guests");
console.log("sorry " + guest[5] + " I can't invite you to dinner.");
guest.pop();
console.log("sorry " + guest[4] + " I can't invite you to dinner.");
guest.pop();
console.log("sorry " + guest[3] + " I can't invite you to dinner.");
guest.pop();
console.log("sorry " + guest[2] + " I can't invite you to dinner.");
guest.pop();
console.log(guest[0] + " you are still invited to dinner.");
console.log(guest[1] + " you are still invited to dinner.");
guest.pop();
guest.pop();
console.log(guest); // empty list
// 18. Seeing the world:
var locations = ['Karachi', 'Hyderabad', 'Thar', 'Islamabad', 'Lahore'];
console.log(locations);
var alphabetical_order = locations.slice();
alphabetical_order.sort();
console.log(alphabetical_order); //Array in alphabetical order
console.log(locations); // still in orignal order
// Sorry sir i could not do reverse alphabetical order.
// 19. Dinner Guests:
console.log("I am inviting " + guest.length + " guests to Dinner");
// 20. Think of something you could store in a array:
var countries = ['Pakistan', 'China', 'Kuwait', 'America', 'England'];
// 21. sorry sir i did not learnt about Typescript object
// 22. International Error:
countries[8] = 'India'; // adding index 8 to making an error.
console.log(countries[7]); // if i call index 7 it will show me an error.
countries.splice(5, 4); // correct the error:
console.log(countries);
// 23. Conditional Tests:
var river = 'Indus';
console.log("Is river == 'Indus'? I predict True.");
console.log(river == 'Indus');
var box = 'empty';
var color = 'red';
var test = 'easy';
var honey = 'sweet';
var tea = 'hot';
var work = 'finished';
var language = 'typescript';
var app = 'vs code';
var laptop = 'lenovo';
console.log("is box == 'empty'? I predict True.");
console.log(box == 'empty');
console.log("Is color == 'Green'? I predict False.");
console.log(color == 'Green');
console.log("Is test == 'hard'? I predict False.");
console.log(test == 'hard');
console.log("Is honey == 'sweet'? I predict True.");
console.log(honey == 'sweet');
console.log("is Tea == 'cold' ? I predict False.");
console.log(tea == 'cold');
console.log("is work == 'finished'? I predict True.");
console.log(work == 'finished');
console.log("Is language == 'html'? I predict false.");
console.log(language == 'html');
console.log("is app == 'vs code'? I predict True.");
console.log(app == 'vs code');
console.log("Is laptop == 'dell'? I predict false.");
console.log(laptop == 'dell');
// 24. More Conditional Test
// Equels to and not equels to.
var stars = 'shining';
console.log("Is stars == 'shining'? I predict True.");
console.log(stars == 'shining');
console.log("Is stars not == 'shining'? I predict false.");
console.log(stars !== 'shining');
//Numerical tests involving equality and inequality
// greater than and less than, greater than or equal to
// and less than or equal to
var a = 10;
var b = 20;
var c = 30;
console.log("Is a not == b ? I predict True.");
console.log(a !== b);
console.log("a == (8+2)? I predict True.");
console.log(a == (8 + 2));
console.log("Is a  > b ? I predict false.");
console.log(a > b);
console.log("Is a < b ? I predict True.");
console.log(a < b);
console.log("Is a <= b ? I predict True.");
console.log(a <= b);
console.log("Is a>= b ? I predict False.");
console.log(a >= b);
// Tests using "and" and "or" operators
console.log("Is a+b = c and c is greater then b ? I predict True");
console.log((a + b) == c && c > b);
console.log("Is a>b or c == b ? I predict false");
console.log(a > b || c == b);
// Test whether an item is/ is not in a array.
var alien_color = 'Green';
if (alien_color == 'Green') {
    console.log("Congrates you just earned 5 points");
}
// 26. aliens color 2
var choice = 'Green';
if (choice === 'Green') {
    console.log("You just earned 5 points");
}
else
    console.log("you just earned 10 points");
// 27. aliens color 3.
if (choice === 'Green') {
    console.log("You just earned 5 points");
}
if (choice === 'Yellow') {
    console.log("You just earned 10 points");
}
if (choice === 'red') {
    console.log("You just earned 15 points");
}
// 28. Stages of Life: 
var age = 25;
if (age < 2) {
    console.log(" The person is a baby.");
    if (age > 2 && age < 4)
        console.log(" The person is a  toddler.");
    if (age > 4 && age < 13)
        console.log(" The person is a  kid.");
    if (age > 13 && age < 20)
        console.log(" The person is a  teenager.");
    if (age > 20 && age < 65)
        console.log(" The person is a  adult.");
    if (age > 65)
        console.log(" The person is a  elder");
}
// 29. Favourt fruit:
var favorite_fruits = ['banana', 'apple', 'grapes'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like orange!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apple!");
}
if (favorite_fruits.includes('grapes')) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes('mango')) {
    console.log("You really like mango!");
}
// 30. Hello Admin:
var users = ['admin', 'ali', 'fatima', 'rizwan', 'aini'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var username = users_1[_i];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + username + ", thank you for logging in again.");
    }
}
// sorry sir after this i have no idea how to do, i did not learnt before that.
