//functions:
/**
 * push - places data onto a stack
 * pop - removing top element of a stack
 * peek - displaying top element 
 * length or size - determines how many items on a stack
 */

var letters = [];

var word = "weenor";

var rword = "";

for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (rword == word) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palidrome");
}