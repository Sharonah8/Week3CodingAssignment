// 1.Copy the code and past on your IDE. 
// Convert the value to a number Without removing any part of the code,
// let it print out 45 as a number and not as a string.
// const number = “45”.

const number = Number("45");
console.log(number);


// 2.Copy the codes  Print the sum of numbers without removing any part of the code, 
// but add the solution to the code that fixes the bug of sum in a String concatenation.
// Const printSum = “20” + 40. //let the result print 60. //*hint: 60.*
// Const sentence = “I am “ + 23 + 4 + “years old”. //*hint: “I am 27 years old”*
const printSum = Number("20") + 40;
console.log(printSum);
const sentence = "I am " + Number(23 + 4) + " years old.";
console.log(sentence);

// 3.Copy the code below and paste on your IDE, find the bug in the code below and fix it.
let myVaue = "May";
myValue = 86;
console.log(myValue);


// 4.Declare three camel case variables of your first name, last name,
// guru coding course, test score and initialize them with the right values. 
let firstName = "Sharon";
let lastName = "Nyamongo";
let testScore = 80;


// 5.Using a switch statement or If-else condition. The average scores of a JavaScript test is:
// A.Below 30 is failed F9.
// B.Above or equal to 31 and  below or equal to 40 is E.
// C.Above or equal to 41 and below or equal to 49 is D.
// D.Above or equal to 50 and below or equal to 59 is C.
// E.Above or equal to 60 and below or equal to 69 is B.
// F.Above or equal to 70 is A
// G.Above or equal to 101, the test score is out of range.
// H.Anything negative is no test score.

// Using the test score value you created in question 3, check your grade. Print to the console terminal  a constructive sentence with the values from question 3.
function grades(testScore) {
    let grade;
    switch (testScore) {

    case testScore < 30:
        grade = "Failed";
        break;
    case testScore >= 30 && testScore <= 40:
        grade = "E";
        break;
    case testScore >= 41 && testScore <= 49:
        grade = "D";
        break;
    case testScore >= 50 && testScore <= 59:
        grade = "C";
        break;
    case testScore >= 60 && testScore <= 69:
        grade = "B";
        break;
    case testScore >= 70 && testScore <= 100:
        grade = "A";
        break;
    case testScore >= 101:
        grade = "Score is out of range.";
    default:
        grade = "No test score";
}
    return("Your test score is " + grade);
}



// 6.Write a program, that will count from 1 to 20. Explaining in details each section of the code in comments.
// Initialize a variable to keep track of the current number.
let count = 1;
// Create a loop that will execute until the count reaches 20.
while (count <= 20) {
  // Print the current value of 'count' to the console.
  console.log(`The count is: ${count}`);
  // Increment the value of 'count' by 1 for the next iteration. The loop will continue to execute until 'count' is no longer less than or equal to 20.
  count++;
}



