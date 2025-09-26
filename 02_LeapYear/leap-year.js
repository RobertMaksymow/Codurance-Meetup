
export function leapYear(year){
    if(year % 4 !== 0){
        console.log("not by 4", year);
        return false;
    } 

    if(year % 100 === 0 && year % 400 !== 0){
        console.log("not by 400", year);
        return false;
    }
    
    if(year % 400 === 0){
        console.log("div by 400", year);
        return true;
    } 

    if(year % 4 === 0){
        console.log("div by 4", year);
        return true;
    } 
}

// console.log(leapYear(1600)); // true
// console.log(leapYear(1800)); // false
// console.log(leapYear(1900)); // false
// console.log(leapYear(1996)); // true
// console.log(leapYear(1997)); // false
// console.log(leapYear(2000)); // true