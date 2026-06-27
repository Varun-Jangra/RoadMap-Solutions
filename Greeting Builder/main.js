function createGreeting(timeOfDay, firstName, lastName) {

    const period = timeOfDay.toLowerCase();
    let greeting = 'evening';

    if (period === 'morning') {
        greeting = 'morning';
    } else if (period === 'afternoon') {
        greeting = 'afternoon';
    }

    return `Good ${greeting}, ${firstName} ${lastName}!`;
}

const userTime = prompt("Enter time of day (morning, afternoon, evening):");
const userFirst = prompt("Enter your first name:");
const userLast = prompt("Enter your last name:");

const finalGreeting = createGreeting(userTime, userFirst, userLast);
console.log(finalGreeting);
alert(finalGreeting);