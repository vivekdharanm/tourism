//Object literal notation

// const stud={ 
//     name: "kumar", 
//     age: 26, 
//     address: "vijay road", 
//     city: "chennai",
//     about: function () { 
//         return `${this.name} is from ${this.city}`; 
//     }, 
//     eligiblity: function () { 
//         return this.age>=18; 
//     }, 
// }; 

// console.log(stud);
// console.log(stud.about());

// Factory Function Type

// function addUser(name,age,address,city,about,eligiblity){
//     const user={};
//     user.name=name;
//     user.age=age;
//     user.address=address;
//     user.city=city;
//     user.about = function () {
//         return `${this.name} is from ${this.city}`; 
//     };
//     user.eligiblity = function () {
//         return this.age>=18;
//     };  
//     return user;
// }

// const studMethod = {
//     about: function () {
//         return `${this.name} is from ${this.city}`;
//     },

//     eligiblity: function () {
//         return this.age>=18;
//     },
// };

// function addUser(name,age,address,city){
//     const user={};
//     user.name=name;
//     user.age=age;
//     user.address=address;
//     user.city=city;
//     user.about=studMethod.about;
//     user.eligiblity=studMethod.eligiblity;

//     return user;
// }

// console.log(addUser("kumar", 25, "ajith street", "chennai"));


//Prototype Inheritance 

const studMethod = {
    about: function () {
        return `${this.name} is from ${this.city}`;
    },

    eligiblity: function () {
        return this.age >= 18; 
    },
};

function addUser(name,age,address,city){
    const user=Object.create(studMethod);
    user.name=name;
    user.age=age;
    user.address=address;
    user.city=city;

    return user;
}

console.log(addUser("kumar", 25, "ajith street", "chennai"));
 
