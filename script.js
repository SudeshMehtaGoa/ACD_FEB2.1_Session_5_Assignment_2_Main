/*
    Storing values in object and printing them in console.
*/

function firstFunction() {
    var PersonData = {
        name : "Herry Potter",
        age : 30,
        dateOfBirth : "10.06.1987",
        placeOfBirth : "London"
    };
    console.log("Person.Name :" + PersonData.name);
    console.log("Person.Age :" + PersonData.age);
    console.log("Person.Date_of_Birth :" + PersonData.dateOfBirth);
    console.log("Person.Place_of_Birth :"  + PersonData.placeOfBirth);
}