const apiKey = '4e28fd44172171a9678306f1648809fa'

const data = async (query) => {
    var link = 'https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=4e28fd44172171a9678306f1648809fa'
    const response = await fetch(link)
    const JSON = await response.json()
    console.log(link)
    let text = JSON
    return text
}

console.log(data(apiKey))