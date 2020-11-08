{
    const IS_PART_TIME = 1;
    const IS_Full_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=20;
    const MAX_HRS_IN_MONTH=160;
    function getEmpHrs(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
                break;
        
            case IS_Full_TIME:
                return FULL_TIME_HOURS;
                break;
            default:
                return 0;
            }
        }

        function calcDailyWage(empHrs){
            return empHrs*WAGE_PER_HOUR;
        }
        let totalEmpHrs=0;
        let totalWorkingDays=0;
        let empDailyWageArr = new Array();
        while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random() * 10)%3;
            empHrs=getEmpHrs(empCheck);
            totalEmpHrs+=empHrs;
            empDailyWageArr.push(calcDailyWage(empHrs));
        }
        let empWage = calcDailyWage(totalEmpHrs);
        console.log("UC 6 -Total days: "+totalWorkingDays + " Total hrs: "+totalEmpHrs + " Emp wage: "+empWage);

        let totEmpWage=0;
        function sum(dailyWage){
            totEmpWage +=dailyWage;
        }
        empDailyWageArr.forEach(sum);
        console.log("UC7A - Total days: "+totalWorkingDays + " total hrs: "+totalEmpHrs + " Emp Wage: "+totEmpWage);

        function totalWages(totalWage,dailyWage){
            return totalWage+dailyWage;
        }

        console.log("UC7A - Emp wage with reduce: "+empDailyWageArr.reduce(totalWages,0));


        //UC7B

        let dailyCntr = 0;
        function mapDailyWithWage(dailyWage){
            dailyCntr++;
            return dailyCntr +" = "+dailyWage;
        }
        let mapDailyWageWWithArr = empDailyWageArr.map(mapDailyWithWage);
        console.log("UC7B - daily wage map ");
        console.log( mapDailyWageWWithArr);

        //UC7C- Show Days when Full time wage of 160 were earned
        function fullTimeWage(dailyWage){
            return dailyWage.includes("160");
        }
        let fullDayWageArr = mapDailyWageWWithArr.filter(fullTimeWage);
        console.log("UC7C - daily wage filter when full time wage earned");
        console.log(fullDayWageArr);

        //UC7D - find first occurence full time wage was earned

        function findFullTimeWage(dailyWage){
            return dailyWage.includes("160");
        }

        console.log("UC7D- First time FullTime wage was earned "+ mapDailyWageWWithArr.find(findFullTimeWage));

        //UC7E - testing the filter function
        function isAllFullTimeWage(dailyWage){
            return dailyWage.includes("160");
        }
        console.log("UC7E-  check all elements have ull time wage: "+fullDayWageArr.every(isAllFullTimeWage));

        //UC7F- check if any part time wage
        function isAnyPartTimeWage(dailyWage){
            return dailyWage.includes("80");
        }

        console.log("UC7F- check if any part time wage: "+mapDailyWageWWithArr.some(isAnyPartTimeWage));

        //UC7G- find the no. of days employee worked
        let numOfDays = 0;
        function totalDaysWorked(numOfDays, dailyWage){
            if(dailyWage>0)return numOfDays+1;
            return numOfDays;
        }
    
        console.log("UC7G - no. of days employee worked "+ empDailyWageArr.reduce(totalDaysWorked,0));
}