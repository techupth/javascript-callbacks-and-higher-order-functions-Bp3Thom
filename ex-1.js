// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return array + operation;
}
const addSalary = 5000;
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
function calSalary(callbackOperation, arr ,num){
  for(let i = 0; i < arr.length; i++){
    newEmployeeSalaries.push(callbackOperation(arr[i], num))
  } return newEmployeeSalaries
}
let upSalary = calSalary(forEach, employeeSalaries , addSalary)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]