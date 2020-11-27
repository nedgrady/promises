
const twoSeconds = 2000



function handleLocationResponse(location) {
    getCurrentWeatherConditionsWithCallback((weather) => {
        console.log(`At location ${location} with weather ${weather}`)
    })
}

console.log("Getting weather conditions...")
getCurrentLocationWithCallback(handleLocationResponse)
console.log("At last, I can response to user input...")


function getCurrentLocationWithCallback(callback) {
    const invokeCallback = () => { callback("Manchester") }

    setTimeout(invokeCallback, twoSeconds)
    // No need to retun - response is 'returned' via the callback function
}

function getCurrentWeatherConditionsWithCallback(callback) {
    const invokeCallback = () => { callback("Cloudy") } 
    
    setTimeout(invokeCallback, twoSeconds)
    // No need to retun - response is 'returned' via the callback function
}