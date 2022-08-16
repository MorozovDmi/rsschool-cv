const dats = document.querySelector('.date')
dats.textContent = 'Date';
const times = document.querySelector('.time')
times.textContent = 'Time';





function showDate(date) {
    const currentDate = date.toDateString();
    dats.textContent = currentDate;
   
}


function showTime(time) {
    
    const currentTime = time.toLocaleTimeString();
    times.textContent = currentTime
}


function updateDate() {
    const date = new Date();
    showDate(date);
    showTime(date);
}
updateDate();
setInterval(updateDate,1000)


const greeting = document.querySelector('.greeting')
const date = new Date();
const hours = date.getHours();


 
function getTimeOfDay() {
    if (hours <= 6)  {
    return 'morning';
  }
    else if(hours <= 12) {
    return 'day';
}
    else if(hours <= 18) {
    return 'evening';
    }
    else  {
    return 'night';
}
}
const timeOfDay =  getTimeOfDay();
const greetingText = `Good ${timeOfDay},`;
greeting.textContent = greetingText;


const names = document.querySelector('.name');


function setLocalStorage() {
    localStorage.setItem('name',names.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
        names.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage) ;





// body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description')

async function getWeather(){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=833889771a7543dff411240540f38184&units=metric"
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;

}


getWeather()




