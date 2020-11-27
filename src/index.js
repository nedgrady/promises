// Without anything special, lines of JavaScript execute syncronously
// Example:

const twoSeconds = 2000

console.log("Getting weather conditions...")
const location = getCurrentLocation()
console.log(`You are at ${location}`)
console.log("At last, I can response to user input...")

function getCurrentLocation() {
    synchronouslySleepFor(twoSeconds)
    return "Manchester"
}

function synchronouslySleepFor(timeInMilliseconds) {
    var start = new Date().getTime(), expire = start + timeInMilliseconds;
    while (new Date().getTime() < expire) { }
    return;
}