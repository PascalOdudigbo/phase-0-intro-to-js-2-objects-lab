// Write your solution in this file!
const employee = {
    name: "James Bond",
    streetAddress: "CloudPlatform8, server-7, Dallas, Texas."
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmpObj = {...employee}
    newEmpObj[key] =value;
    return newEmpObj;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
   return employee;

}
function deleteFromEmployeeByKey(employee, key){
    const newEmpObj = {...employee}
    delete newEmpObj[key];
    return newEmpObj;
 
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
 
 }
