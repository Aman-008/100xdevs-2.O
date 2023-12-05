const person = [{
    firstName : 'harkirat',
    lastName : 'singh', 
    gender : 'male'
},{
    firstName : 'john',
    lastName : 'grey', 
    gender : 'male'
},{
    firstName : 'marry',
    lastName : 'mey', 
    gender : 'female'
},{
    firstName : 'julia',
    lastName : 'orfan', 
    gender : 'female'
}]

for(let i = 0; i < person.length; i++) {
    if (person[i]["gender"] == 'male') {
        console.log('hello mr. ' + person[i]['firstName'] + ' ' + person[i]['lastName'] + ' Welcome!')
    }
    else {
        console.log('hello ms. ' + person[i]['firstName'] + ' ' + person[i]['lastName'] + ' welcome!')
    }
}
// if (person[gender] == 'male') {
//     console.log('hello mr.' + firstName + lastName + 'Welcome!')
// }