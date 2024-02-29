/*let months =[2,3,4,5,6]

Insert 1 month number in 0 index
Insert 7 to 12 month number after 6th month 
Insert 91,92,93 month numbers after 9 element
Remove first 3 month numbers 
Remove 91,92,93 month numbers 
Add 1,2,3 month numbers in the begin,Remove 4,5 month numbers */


let months = [2, 3, 4, 5, 6]
months.splice(0, 0, 1)
console.log(months) // [ 1, 2, 3, 4, 5, 6 ]
months.splice(6, 0, 7, 8, 9, 10, 11, 12)
console.log(months)  // [ 1, 2, 3, 4, 5, 6,7,8,9,10,11,12 ]
months.splice(9, 0, 91, 92, 93)
console.log(months) // [ 1, 2, 3, 4, 5, 6,7,8,9,91,92,93,10,11,12 ]
months.splice(0, 3)
console.log(months)//[4, 5, 6,7,8,9,91,92,93,10,11,12 ]
months.splice(6, 9)
console.log(months) // [ 4, 5, 6, 7, 8, 9 ]
months.splice(0, 2, 1, 2, 3)
console.log(months) // [ 1,2,3, 6, 7, 8, 9 ]