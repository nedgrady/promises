
const twoSeconds = 2000

// Function to be invoked at some point in the future
function handleLocationResponse(location) {
    console.log(`You are at ${location}`)
}

console.log("Getting weather conditions...")
getCurrentLocationWithCallback(handleLocationResponse)
console.log("At last, I can respond to user input...")


function getCurrentLocationWithCallback(callback) {
    const invokeCallback = () => { callback("Cloudy") }

    setTimeout(invokeCallback, twoSeconds)
    console.log("After setTimeout")
    // No need to retun - response is 'returned' via the callback function
}