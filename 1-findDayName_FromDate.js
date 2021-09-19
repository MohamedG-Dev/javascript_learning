function getDayName(dateString){
    let dayName;
    const date=new Date(dateString);
    const options = {
        weekday: 'long'
    };
    dayName = new Intl.DateTimeFormat('en-Us', options).format(date);
    return dayName;
}
//Given a date string, , in the format MM/DD/YYYY
const day=getDayName("11/12/2010");
console.log(`The day for the given Date is ${day}`);