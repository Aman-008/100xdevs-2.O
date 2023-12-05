const num = [1, 23, 54, 76, 97, 108, 65, 87, 34, 75, 34545];
let largestNum = num[0]
for (let i = 0; i < num.length; i++) {
    if(num[i] > largestNum) {
        largestNum = num[i];
    }
    
}
console.log( largestNum +  " This is the largest number")
    