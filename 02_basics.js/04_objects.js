// object declaration by using constructor (singleton):
const tinderUser = new Object()                  // singleton object delaration
// const tinderUser = {}                            // literal object declaration

tinderUser.id = "pqr123"
tinderUser.name = "seema"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
         userfullname: {
            firstName: "Asmita",
            lastName: "Agre"
         }
    }
}

console.log(regularUser.fullname.userfullname.firstName);

// combining 2 objects:
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "p", 4: "q"}
const obj4 = {5: "h", 6: "i"}

// const obj3 = {obj1 , obj2};             this will give an object inside object and we dont want that.
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

/* Note: The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
   It returns the modified target object. */

   // OR
   const obj5 = {...obj1, ...obj2}               // spreading the objects
   console.log(obj5);

    
   // object inside array:
   const users = [
    { 
        id: 1,
        email: "asmita@gmail.com"
    },
    {
        id: 2,
        email: "yash@gmail.com"
    }
   ]

   console.log(users[1].email);

   // printing the only keys of the particular object
   console.log(Object.keys(tinderUser));      // [ 'id', 'name', 'isLoggedIn' ]       it's datatype is an array, so we can apply loops over it
   console.log(Object.values(tinderUser));
   console.log(Object.entries(tinderUser));   // [ [ 'id', 'pqr123' ], [ 'name', 'seema' ], [ 'isLoggedIn', false ] ]      
                                              // here 1st entry is always key and 2nd is value


// for checking that if objects has that particular property or not :
console.log(tinderUser.hasOwnProperty('isLoggedIn'));         // output will be always in boolean!  true



// De- structuring the object:
const course = {
    courseInstructor: "Asmita",
    courseFees: "1000"
}

// Following are the ways or printing the "courseInstructor" :

console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course                        // de-strcuturing courseInstructor as instructor
console.log(instructor);


// API's are in the JSON format only. API's are nothing but the Objects.
{
    "name": "Asmita",
    "standard":"MSc.CS",
}

[
    {},
    {},
    {}
]