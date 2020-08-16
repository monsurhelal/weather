class Ui{
    constructor(){

        this.city = document.getElementById('w-location');
        this.desc = document.getElementById('w-des');
        this.tamp = document.getElementById('w-strint');
        this.icon = document.getElementById('w-icon');
        this.humirity= document.getElementById('w-humidity');
        this.presser = document.getElementById('w-presser');
        this.wind = document.getElementById('w-wind');
        this.jeepC = document.getElementById('w-pc');

    }
    showData(weather){

        this.city.innerText = weather.name;
        this.desc.innerText = weather.weather[0].description;
        this.tamp.innerText = Math.round(weather.main.temp - 273.15) + '°c';
        this.icon.src = `http://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`;
        this.humirity.innerText = 'humidity '+weather.main.humidity + '%';
        this.presser.innerText = 'air pressure ' + weather.main.pressure;
        this.wind.innerText = 'Wind speed ' + weather.wind.speed + 'km/h';




    }
}