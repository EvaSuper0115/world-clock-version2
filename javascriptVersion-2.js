function showInfoOfChosenCity(event) {
  let userChosenTimeZoneValue = event.target.value;
  if (userChosenTimeZoneValue.length > 0) {
    let userChosenCityFormattedName = userChosenTimeZoneValue
      .replace("_", " ")
      .split("/")[1];
    let now = moment().tz(`${userChosenTimeZoneValue}`);
    let timezoneTime = now.format("HH:mm:ss");

    let timezoneDate = now.format("ddd, D MMM YYYY");
    let chosenCityTimeOffset = moment()
      .tz(`${userChosenTimeZoneValue}`)
      .format("[UTC]Z");

    let chosenCity1Info = document.querySelector("#chosenCityInfos");
    chosenCity1Info.innerHTML += ` 
    
    <div id="chosenCity" class="cityName">
    ${userChosenCityFormattedName}
    </div>

    <div id="chosenCityTime" class="timeDisplayText">
    ${timezoneTime} 
    </div>

    <div id="chosenCitytDate" class="dateDisplayText">
    ${timezoneDate}
    </div>
    <div class="timeOffsetwidget">
      <div
      id="timeDifferenceChosenCity1"
      class="timeDifferenceDisplayText"
      >${chosenCityTimeOffset}
      </div>
    </div>
    `;
  }
}

function displayDefaultCity2() {
  let defaultCity2Value = "Europe/Madrid";
  let defaultCity2 = document.querySelector("#defaultCity2");
  defaultCity2.innerHTML = defaultCity2Value.replace("_", " ").split("/")[1];

  let defaultCity2Time = moment().tz(`${defaultCity2Value}`).format("HH:mm:ss");
  let city2Time = document.querySelector("#defaultCity2Time");
  city2Time.innerHTML = `${defaultCity2Time}`;

  let defaultCity2Date = moment()
    .tz(`${defaultCity2Value}`)
    .format("ddd, D MMM YYYY");
  let city2Date = document.querySelector("#defaultCity2Date");
  city2Date.innerHTML = `${defaultCity2Date}`;

  let defaultCity2UTC = moment().tz(`${defaultCity2Value}`).format("[UTC]Z");
  let city2UTC = document.querySelector("#timeDifferencedefaultCity2");
  city2UTC.innerHTML = `${defaultCity2UTC}`;
}

setInterval(displayDefaultCity2, 1000);

function defaultCity1() {
  let defaultTimezone1 = "Asia/Hong_Kong";
  let formattedDefaultTimezone1 = defaultTimezone1
    .replace("_", " ")
    .split("/")[1];
  let defaultCity1 = document.querySelector("#defaultCity1");
  defaultCity1.innerHTML = `${formattedDefaultTimezone1}`;

  let cityTime = document.querySelector("#defaultCityCurrentTime");
  let time = moment().tz(`${defaultTimezone1}`).format("HH:mm:ss");
  cityTime.innerHTML = `${time}`;

  let cityDate = document.querySelector("#defaultCityDate");
  let date = moment().tz(`${defaultTimezone1}`).format("ddd, D MMM YYYY");
  cityDate.innerHTML = `${date}`;

  let cityUTC = document.querySelector("#defaultCityUTC");
  let UTC = moment().tz(`${defaultTimezone1}`).format("[UTC]Z");
  cityUTC.innerHTML = `${UTC}`;
}
setInterval(defaultCity1, 1000);

function showUserCurrentTimezone() {
  let userCurrentCity = moment.tz.guess();
  let userCurrentCityFormattedName = userCurrentCity
    .replace("_", " ")
    .split("/")[1];
  let userCity = document.querySelector("#userCurrentTimezone");
  userCity.innerHTML = `${userCurrentCityFormattedName}`;
  let userTime = document.querySelector("#userCurrentTime");
  userTime.innerHTML = moment().tz(`${userCurrentCity}`).format("HH:mm:ss");
  let userDate = document.querySelector("#userCurrentDate");
  userDate.innerHTML = moment()
    .tz(`${userCurrentCity}`)
    .format("ddd, D MMM YYYY");
  let userTimeOffset = document.querySelector("#userCityUTC");
  userTimeOffset.innerHTML = moment().tz(`${userCurrentCity}`).format("[UTC]Z");
}

setInterval(showUserCurrentTimezone, 1000);

let userChoice = document.querySelector("#user-chosen-timezones");
userChoice.addEventListener("change", showInfoOfChosenCity);

function clearClocks(event) {
  event.preventDefault();
  let content = document.querySelector("#chosenCityInfos");
  content.innerHTML = ` `;
}

let clear = document.querySelector("#crossButton");
clear.addEventListener("click", clearClocks);

function clearDefaultCity1(event) {
  event.preventDefault();
  let content = document.querySelector("#defaultCity1info");
  content.innerHTML = ``;

  let col = document.querySelector("#transformCol");
  col.classList.add("col-md-12");

  let widget1 = document.querySelector("#firstWidget");
  widget1.classList.add("widgetMaxWidthWhenClosed");

  let widget3 = document.querySelector("#thirdWidget");
  widget3.classList.add("widgetMaxWidthWhenClosed");
}

let crossoutDefaultCity1 = document.querySelector("#crossButtonDefaultCity1");
crossoutDefaultCity1.addEventListener("click", clearDefaultCity1);

//change theme function//
function changeTheme(event) {
  let selectedThemeName = event.target.value;
  console.log(selectedThemeName);

  if (selectedThemeName === "cool") {
    let coolTheme = document.querySelector("body");
    coolTheme.classList.remove("romantic");
    coolTheme.classList.remove("dawn");
    coolTheme.classList.add("dark");
  } else if (selectedThemeName === "romantic") {
    let romanticTheme = document.querySelector("body");
    romanticTheme.classList.remove("dark");
    romanticTheme.classList.remove("dawn");
    romanticTheme.classList.add("romantic");
  } else if (selectedThemeName === "dawn") {
    let oceanTheme = document.querySelector("body");
    oceanTheme.classList.remove("dark");
    oceanTheme.classList.remove("romantic");
    oceanTheme.classList.add("dawn");
  } else {
    let naturalTheme = document.querySelector("body");
    naturalTheme.classList.remove("dark");
    naturalTheme.classList.remove("romantic");
    naturalTheme.classList.remove("dawn");
  }
}
let themeSelect = document.querySelector("#theme-colors-widget");
themeSelect.addEventListener("change", changeTheme);
