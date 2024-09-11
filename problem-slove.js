// problem: 1 Solve
/*
function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0 || income < expenses) {
        return "Invalid Input"
    }

    const remainingBalance = income - expenses;
    const result = remainingBalance * 0.20;
    return result;
}
const results = calculateTax(10000, 33000);
console.log(results);
*/





// problem: 2 done
/*
function sendNotification(email) {

    const emailSymbol = '@';
    if (!email.includes(emailSymbol)) {
        return "Invalid Email"
    }

    const emailSplit = email.split('@')
    const userName = emailSplit[0]
    const domainName = emailSplit[1]
    return userName + ' sent you an email from ' + domainName;

}
const results = sendNotification('sadia8@icloud.com');
console.log(results);
*/

// problem: 3 solve

/*
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    return /\d/.test(name);

}

const results = checkDigitsInName('raj')
console.log(results);
*/


// problem: 4
/*
function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input"
    }
    let totalMarks = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        totalMarks += 20;
    }

    else if (totalMarks >= 80) {
        return true;
    }

    return false;
}

const person = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true}

const result = calculateFinalScore(person);
console.log(result);
*/

// problem: 5
/*
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input"
    }

    let timeSum = 0;
    for (const time of waitingTimes) {
        timeSum += time
    }

    const timeLength = waitingTimes.length
    const avg = timeSum / timeLength;
    const avgRounded = Math.round(avg)
    const waitingPeople = serialNumber - 1;
    const remainingPeople = waitingPeople - timeLength;
    const remainingTime = remainingPeople * avgRounded;
    return remainingTime;




}
const time = [10, 15, 20, 25, 60, 30, 100, 50]
const serialNumber = 50
const result = waitingTime(time, serialNumber);
console.log(result);
*/




