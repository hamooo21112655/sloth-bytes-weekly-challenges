const dayOfYear = (dateString) => {
    const [month, days, year] = dateString.split("/").map(Number);
    const [_, ...legitMonths] = [...Array(month).keys()];

    return days + legitMonths.reduce((daysAcc, month1) => new Date(year, month1, 0).getDate() + daysAcc, 0);

} 

console.log(dayOfYear("12/31/2019"));
