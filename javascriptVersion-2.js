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
    .format("dddd, D MMM YYYY");
  let userTimeOffset = document.querySelector("#userCityUTC");
  userTimeOffset.innerHTML = moment().tz(`${userCurrentCity}`).format("[UTC]Z");
}

setInterval(showUserCurrentTimezone, 1000);

let userChoice = document.querySelector("#user-chosen-timezones");
userChoice.addEventListener("change", showInfoOfChosenCity);

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