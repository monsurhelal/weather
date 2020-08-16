
const ui = new Ui;

//fetch data from ip api
async function getData(){
    const allData = await fetch("https://ipapi.co/json/");
    const allDataJson = await allData.json();

    return allDataJson;
}
getData().then(data =>{

    document.getElementById('w-pc').innerText = 'post code' + data.postal;
    
    
    const weather = new Weather(data.city);

    weather.getWeather().then(data => {

        ui.showData(data);
        console.log(data);
    });
});
document.getElementById('sub-btn').addEventListener("click",() => {
    const cityName = document.getElementById('cityName').value;
    const weather = new Weather(cityName);

    weather.getWeather().then(data => {

        ui.showData(data);
    });
    document.getElementById('cityName').value = '';
})
document.getElementById('sub-btn').addEventListener("keypress",() => {
    const cityName = document.getElementById('cityName').value;
    const weather = new Weather(cityName);

    weather.getWeather().then(data => {

        ui.showData(data);
    });
    document.getElementById('cityName').value = '';
})