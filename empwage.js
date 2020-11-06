
//UC-1
const IS_ABSENT=0;
//UC-2 refactored to UC3

const IS_PART_TIME=1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
let totalWorkingDays = 0;
let totalEmpHrs = 0;

function getWorkingHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
       return FULL_TIME_HOURS;
    default:
        return 0;
}
}

//UC4- Emp wage for 20 days

// for(let day=0; day<NUM_OF_WORKING_DAYS;day++){
//     let empCheck  = Math.floor(Math.random()*10)%3;
//     empHrs+= getWorkingHours(empCheck);
// }

// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("UC4 - Emp Wage for 20 days:"+ empWage);

//UC5

while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs+= getWorkingHours(empCheck);
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Emp Wage for 20 days:"+ empWage);