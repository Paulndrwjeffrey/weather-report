const input = document.getElementById('userinput')
const searchBtn = document.getElementById('searchbtn')
const icon = document.getElementById('duck')
const uvIndex = document.getElementById('UVindex')
const recSearch = document.getElementById('recentsearch')
var recentSearches = []

function firstThing() {
    if (localStorage.recentSearches) {
        recentSearches = JSON.parse(localStorage.getItem('recentSearches'))
        createSearchList()
    } else {
        recentSearches = []
    }
}

function createSearchList(array) {
    var searchList = document.getElementById('recentsearch')
    searchList.style.display = 'flex'
    searchList.innerHTML = ""
    for (var i = 0; i < recentSearches.length; i++) {
        var entry = document.createElement('button')
        entry.appendChild(document.createTextNode(recentSearches[i]))
        searchList.appendChild(entry)
    }
}

firstThing()

function search() {
    var userInput = input.value.trim()
    recentSearches.push(userInput)
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
    createSearchList()
    document.getElementById('weather').style.display = 'unset'
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial&appid=feca628886b7c4f2dff8cb9c14d6efb6')
    .then(response => response.json())
    .then(function(data){
        document.getElementById('citydate').innerText = data.name + '  ' + moment().format('l')
        document.getElementById('duck').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png'
        duck.style.display = 'block'
        document.getElementById('temp').innerText = 'Temperature: ' + Math.round(data.main.temp) + ' Degrees'
        document.getElementById('humidity').innerText = 'Humidity: ' + data.main.humidity + '%'
        document.getElementById('windspeed').innerText = 'Wind Speed: ' + data.wind.speed + ' MPH'

        var lat = data.coord.lat
        var lon = data.coord.lon 
        fetch('https://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=feca628886b7c4f2dff8cb9c14d6efb6')
        .then(response => response.json())
        .then(function(data){
            document.getElementById('UVindex').innerText = 'UV Index: ' + data.value
                if (data.value < 3) { 
                    uvIndex.style.color = "limegreen"
                } else if (data.value > 3 && data.value < 6) {
                    uvIndex.style.color = "orange"
                } else {
                    uvIndex.style.color = "red"
                }
            
                fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&units=imperial&appid=feca628886b7c4f2dff8cb9c14d6efb6')
                .then(response => response.json())
                .then(function(data) {
                    console.log(data)
                    document.getElementById('dayonedate').innerText = moment().add(1, 'days').format('l')
                    document.getElementById('dayoneicon').src = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon +'@2x.png'
                    document.getElementById('dayonetemp').innerText = 'Temp: ' + Math.round(data.list[0].main.temp) + 'deg.'
                    document.getElementById('dayonehum').innerText = 'Humidity: ' + data.list[0].main.humidity + '%'

                    document.getElementById('daytwodate').innerText = moment().add(2, 'days').format('l')
                    document.getElementById('daytwoicon').src = 'https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon +'@2x.png'
                    document.getElementById('daytwotemp').innerText = 'Temp: ' + Math.round(data.list[8].main.temp) + 'deg.'
                    document.getElementById('daytwohum').innerText = 'Humidity: ' + data.list[8].main.humidity + '%'

                    document.getElementById('daythreedate').innerText = moment().add(3, 'days').format('l')
                    document.getElementById('daythreeicon').src = 'https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon +'@2x.png'
                    document.getElementById('daythreetemp').innerText = 'Temp: ' + Math.round(data.list[16].main.temp) + 'deg.'
                    document.getElementById('daythreehum').innerText = 'Humidity: ' + data.list[16].main.humidity + '%'

                    document.getElementById('dayfourdate').innerText = moment().add(4, 'days').format('l')
                    document.getElementById('dayfouricon').src = 'https://openweathermap.org/img/wn/' + data.list[24].weather[0].icon +'@2x.png'
                    document.getElementById('dayfourtemp').innerText = 'Temp: ' + Math.round(data.list[24].main.temp) + 'deg.'
                    document.getElementById('dayfourhum').innerText = 'Humidity: ' + data.list[24].main.humidity + '%'

                    document.getElementById('dayfivedate').innerText = moment().add(5, 'days').format('l')
                    document.getElementById('dayfiveicon').src = 'https://openweathermap.org/img/wn/' + data.list[32].weather[0].icon +'@2x.png'
                    document.getElementById('dayfivetemp').innerText = 'Temp: ' + Math.round(data.list[32].main.temp) + 'deg.'
                    document.getElementById('dayfivehum').innerText = 'Humidity: ' + data.list[32].main.humidity + '%'
                })
            
                
        })
    }) 
}

function searchAgain(e) {
    var userInput = e.target.innerText
    // recentSearches.push(userInput)
    // localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
    // createSearchList()
    document.getElementById('weather').style.display = 'unset'
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial&appid=feca628886b7c4f2dff8cb9c14d6efb6')
    .then(response => response.json())
    .then(function(data){
        document.getElementById('citydate').innerText = data.name + '  ' + moment().format('l')
        document.getElementById('duck').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png'
        duck.style.display = 'block'
        document.getElementById('temp').innerText = 'Temperature: ' + Math.round(data.main.temp) + ' Degrees'
        document.getElementById('humidity').innerText = 'Humidity: ' + data.main.humidity + '%'
        document.getElementById('windspeed').innerText = 'Wind Speed: ' + data.wind.speed + ' MPH'

        var lat = data.coord.lat
        var lon = data.coord.lon 
        fetch('https://api.openweathermap.org/data/2.5/uvi?lat=' + lat + '&lon=' + lon + '&appid=feca628886b7c4f2dff8cb9c14d6efb6')
        .then(response => response.json())
        .then(function(data){
            document.getElementById('UVindex').innerText = 'UV Index: ' + data.value
                if (data.value < 3) { 
                    uvIndex.style.color = "limegreen"
                } else if (data.value > 3 && data.value < 6) {
                    uvIndex.style.color = "orange"
                } else {
                    uvIndex.style.color = "red"
                }
            
                fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&units=imperial&appid=feca628886b7c4f2dff8cb9c14d6efb6')
                .then(response => response.json())
                .then(function(data) {
                    console.log(data)
                    document.getElementById('dayonedate').innerText = moment().add(1, 'days').format('l')
                    document.getElementById('dayoneicon').src = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon +'@2x.png'
                    document.getElementById('dayonetemp').innerText = 'Temp: ' + Math.round(data.list[0].main.temp) + 'deg.'
                    document.getElementById('dayonehum').innerText = 'Humidity: ' + data.list[0].main.humidity + '%'

                    document.getElementById('daytwodate').innerText = moment().add(2, 'days').format('l')
                    document.getElementById('daytwoicon').src = 'https://openweathermap.org/img/wn/' + data.list[8].weather[0].icon +'@2x.png'
                    document.getElementById('daytwotemp').innerText = 'Temp: ' + Math.round(data.list[8].main.temp) + 'deg.'
                    document.getElementById('daytwohum').innerText = 'Humidity: ' + data.list[8].main.humidity + '%'

                    document.getElementById('daythreedate').innerText = moment().add(3, 'days').format('l')
                    document.getElementById('daythreeicon').src = 'https://openweathermap.org/img/wn/' + data.list[16].weather[0].icon +'@2x.png'
                    document.getElementById('daythreetemp').innerText = 'Temp: ' + Math.round(data.list[16].main.temp) + 'deg.'
                    document.getElementById('daythreehum').innerText = 'Humidity: ' + data.list[16].main.humidity + '%'

                    document.getElementById('dayfourdate').innerText = moment().add(4, 'days').format('l')
                    document.getElementById('dayfouricon').src = 'https://openweathermap.org/img/wn/' + data.list[24].weather[0].icon +'@2x.png'
                    document.getElementById('dayfourtemp').innerText = 'Temp: ' + Math.round(data.list[24].main.temp) + 'deg.'
                    document.getElementById('dayfourhum').innerText = 'Humidity: ' + data.list[24].main.humidity + '%'

                    document.getElementById('dayfivedate').innerText = moment().add(5, 'days').format('l')
                    document.getElementById('dayfiveicon').src = 'https://openweathermap.org/img/wn/' + data.list[32].weather[0].icon +'@2x.png'
                    document.getElementById('dayfivetemp').innerText = 'Temp: ' + Math.round(data.list[32].main.temp) + 'deg.'
                    document.getElementById('dayfivehum').innerText = 'Humidity: ' + data.list[32].main.humidity + '%'
                })
            
                
        })
    }) 
}

searchBtn.addEventListener('click', search)
recSearch.addEventListener('click', (e) => {
   searchAgain(e)
})

//recSearch.addEventListener('click', searchAgain(e))
