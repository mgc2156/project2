// variables
var correct = 0;

// prompt
var answer1 = prompt("What color is the sky on a clear day?");
var answer2 = prompt("What goes woof woof? A _ _ _");
var answer3 = prompt("Peanut _ _ _ _ _ _ and jelly");
var answer4 = prompt("Guacamole is made from avo_ _ _ _ _");
var answer5 = prompt("What is the last letter of the alphabet?");

// if statement
if ( answer1.toUpperCase() === 'BLUE' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'DOG' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'BUTTER' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'CADOS' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'Z' ) {
 correct += 1;
}

// output results
//score
document.write("<p>Your score: " + correct + " out of 5</p>");
//q1
document.write("<p>Your answer: " + answer1 + " Correct Answer: BLUE</p>");
//q2
document.write("<p>Your answer: " + answer2 + " Correct Answer: DOG</p>");
//q3
document.write("<p>Your answer: " + answer3 + " Correct Answer: BUTTER</p>");
//q4
document.write("<p>Your answer: " + answer4 + " Correct Answer: CADOS</p>");
//q5
document.write("<p>Your answer: " + answer5 + " Correct Answer: Z</p>");


//results

if (correct == 5) {
document.write("<h3>Gold Star For You!</h3>")
document.write("<img src='http://bossierpress.com/wp-content/uploads/2015/03/gold-star-graphic.jpg' >");
}

if (correct == 4) {
  document.write("<h3>Silver Star For You!</h3>")
  document.write("<img src='http://www.lawgcap.org/media/Ribbon%20Attachments/CAP-Silver-Star-Attachment-v1.png' >");
}
if (correct == 3) {
  document.write("<h3>Bronze Star For You!</h3>")
  document.write("<img src='http://www.psdgraphics.com/file/bronze-star.jpg' >");
}

if (correct == 2 || correct == 1) {
  document.write("<h3>Better Luck Next Time!</h3>")
  document.write("<img src='http://images.moneysavingexpert.com/images/sadface.jpg' >");
}

else {
  
}
