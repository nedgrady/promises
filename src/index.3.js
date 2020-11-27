const twoSeconds = 2000

console.log("Getting weather conditions...")
getCurrentLocationWithPromise()
.then(location => console.log(`You are at ${location}`))

console.log("At last, I can response to user input...")


function getCurrentLocationWithPromise() {
    var locationPromise = new Promise(function(resolve, reject) {
        synchronouslySleepFor(twoSeconds)
        resolve("Manchester")
    })

    return locationPromise
}

function synchronouslySleepFor(timeInMilliseconds) {
    console.log("Starting Sync Sleep")
    var start = new Date().getTime(), expire = start + timeInMilliseconds;
    while (new Date().getTime() < expire) { }
    console.log("Ending Sync Sleep")
}