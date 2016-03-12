/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    //reading itmes from the array.
    for(var i=0; i<array.length; i++){
        callback(array[i]);
    }
    //making sure that each item is not an array
    //executing the callback funciton and returning the value

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
   
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
     // // YOUR CODE HERE
     var sum = 0;
     for (var i= 0 ; i<args.length; i++){
         sum=sum+args[i];
     };
    
     return sum;
    
}

console.assert( sum(1, 2, 3, 4, 5) === 15 );

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var sum =0;
    var avg = 0;
    for(var i=0; i<args.length;i++){
        sum=sum+args[i];
    }
    avg = sum/args.length;
    return avg;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);



    // .. do something with each element of args
    // YOUR CODE HERE
    var greaterNumber = 0;
    for(var i=0; i<args.length;i++){
        
        if (args[i]>greaterNumber){
            greaterNumber=args[i];
        }
    }
    return greaterNumber;


}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    
    var longestString=0;
    for(var i=0; i<args.length;i++){
        
        if (args[i].length>args[longestString].length){
            longestString = i;
            }
    }
    return args[longestString];


}

console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

// /**
//  * PART II
//  *
//  * For each of the following Array methods,
//  *
//  * 1. use them in an example
//  * 2. write a console.assert to test them
//  */



// // .sort() // sorts a list Alphabitical (not numarical!!) and return the sorted array.
function firstNameList(){
     var args = [].slice.call(arguments);
     var argsSorted = args.sort();
     return argsSorted[0];
}

console.assert(firstNameList('Haythem','Rasha' , 'Hisham', 'Rayan', 'Abeer')==='Abeer');

// // .concat()// combine two arrays and output them in one single array.

var list1 = [0,1,2,3,4];
var list2 = [5,6,7,8,9];

console.assert(list1.concat(list2)[9]===9);



// // .indexOf() // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// arr.indexOf(searchElement[, fromIndex = 0])
console.assert(list1.indexOf(4)===4);
console.assert(list2.indexOf(2)===-1);


// // .split()
            // The split() method splits a String object into an array of strings by separating the string into substrings.
            // str.split([separator[, limit]])
var fullName = 'Haythem Mohamed Said Hammour';
var fullName2 = fullName.split(' ');
//returning first name
console.assert(fullName2[0]==='Haythem');
//returning last name
console.assert(fullName2[fullName2.length-1]==='Hammour');


// // .join()
        // The join() method joins all elements of an array into a string.
        // str = arr.join([separator = ','])
var fullNameJoined = fullName2.join(' ');
console.assert(fullNameJoined === fullName);

// // .pop() 
        // The pop() method removes the last element from an array and returns that element.
        //arr.pop()
var lastName = fullName2.pop();
console.assert(lastName === 'Hammour');



// // .push()
        //The push() method adds one or more elements to the end of an array and returns the new length of the array.
        //arr.push(element1, ..., elementN)
fullName2.push(lastName);
console.assert(fullName2[fullName2.length-1] === 'Hammour');



// // .slice()
        //The slice() method returns a shallow copy of a portion of an array into a new array object.
        //arr.slice([begin[, end]])
var MiddleName = fullName2.slice(1,fullName2.length-1);
console.assert(MiddleName[0] === 'Mohamed');

// // .splice()
        //The splice() method changes the content of an array by removing existing elements and/or adding new elements.
        //array.splice(start, deleteCount[, item1[, item2[, ...]]])
fullName2.splice(1,2);
    //fullName2 now is ['Haythem','Hammour']   
console.assert(fullName2[0] === 'Haythem');
console.assert(fullName2[1] === 'Hammour');

// // .shift()
        //The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
        //arr.shift()
var family = ['Haythem', 'Tasneem', 'Asmaa', 'Mohamed', 'Nuran'];
var father = family.shift();
var mother = family.shift();
console.assert(father === 'Haythem');
console.assert(mother === 'Tasneem');


// // .unshift()
        //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
        //arr.unshift([element1[, ...[, elementN]]])
family.unshift('Haythem','Tasneem');
//Family back together again.
console.assert(father === family[0]);

// // .filter()
        //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
        //arr.filter(callback[, thisArg])

function myName(value){ //returns my name out of any array contains my name.
    return value==='Haythem';
}


console.assert( family.filter(myName)=== 'Haythem');




// // .map()
        //The map() method creates a new array with the results of calling a provided function on every element in this array.
        //arr.map(callback[, thisArg])
function addFive(value){
    return value+5;
}

var newList = list1.map(addFive);
console.assert(newList[0]===5);
