//UC-1

const IS_ABSENT=0;

// let empCheck = Math.floor(Math.random()*10)%2;
// if(empCheck==IS_ABSENT){
//     console.log("UC1-Employee is ABSENT,Exiting the program");
//     return;
// } else{
//     console.log("UC1-Employee is PRESENT.");
// }

//uc2
const IS_PART_TIME =1;
const IS_FULL_TIME =2
const PART_TIME_HOURS =4
const Full_TIME_HOURS =8
const WAGE_PER_HOUR = 20;

let empHrs =0;
let empCheck = Math.floor(Math.random()*10) % 3
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS
        break
    case IS_FULL_TIME:
        empHrs = Full_TIME_HOURS
        break;
    default:
        empHrs = 0;
}

let empwage = empHrs * WAGE_PER_HOUR
console.log("Emp Wage:" + empwage)