class Weather{

    constructor(city){
        this.city = city;
        this.appid = 'b9a3773961d1af8165bc40a80f8f467d';
    }
    //fetch weather api
    async getWeather() {

        const weatherApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`);
        const weatherApiJson = await weatherApi.json();
        return weatherApiJson;
        
    }

}