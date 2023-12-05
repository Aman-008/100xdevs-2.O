// console.log("hello World")
// console.log(a)

// let, var
// var a = 1;
// let a = 1;
// a = 2;
// console.log(a);


// const
// const a = 1;
// a = 2;
// console.log(a);



//if else
// let firstName = "Aman";
// let age = 17;
// let isMarried = false;
// // console.log("This person name is " + firstName + " and their age is " + age)
// if (isMarried == true) {
//     console.log(firstName + " is married")
// }
// else {
//     console.log(firstName + " is not married")
// }



// for loop
// let numCount = 0;
// for(let i = 0; i <= 100; i++) {
//     // console.log(numCount + i);
//     numCount = numCount + i;
// }
// console.log(numCount)



// Array
// const ages = [21, 22, 43, 46, 66, 98, 33, 107];
// numberOfPeople = ages.length;
// for(let i = 0; i < numberOfPeople; i++) {
//     console.log("value of i is = " + i +" value of ages[i] is = "+ ages[i]);
// }
// for(let j = 0; j < numberOfPeople; j++) {
//     if(ages[j] % 2 == 0) {
//         console.log(ages[j]);
//     }
//     else{
//         console.log("This is not devisible by 2");
//     }    
// }


//arrays of object
const allusers =[{
    firstName : "aman",
    gender : "male"
},{
    firstName : "harkirat",
    gender : "male"
},{
    firstName : "nidhi",
    gender : "female"
}]

for(let i = 0; i < allusers.length; i++) {
    if(allusers[i]["gender"] == "male") {
        console.log(allusers[i]["firstName"])
    }
    else {
        console.log("This is female and her name is : " + allusers[i]["firstName"])
    }
}

