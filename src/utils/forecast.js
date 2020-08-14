const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a5f08c89a6db6ad2c9a05cb1ff0724dc&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current)
            callback(undefined, body.current.weather_descriptions[0] + " It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degrees out." + " The humidity is " + body.current.humidity + "%")
        }
    })
}

module.exports = forecast