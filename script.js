/*Create an array of people objects with first name, last name, and age, then write a JavaScript function that takes in an array and 
console logs the first and last names of all the people.
*/

const people = [
    {
        firstName: "Denzel",
        lastName: "Washington",
        age: 69,
    }, 

    {
        firstName: "Steve",
        lastName: "Harvey",
        age: 67,
    },

    {
        firstName: "James",
        lastName: "foxx",
        age: 57,
    },

    {
        firstName: "Viola",
        lastName: "Davis",
        age: 58,
    },

    {
        firstName: "Oprah",
        lastName: "Winfrey",
        age: 70,
    }
]

    function listNames(people, age) {
        people.forEach(function(a) { //I use the forEach method with a function and inside the function, i added the peoperty i need to delete
            console.log(a.firstName + ' ' + a.lastName)

        });
    }

     listNames(people);
