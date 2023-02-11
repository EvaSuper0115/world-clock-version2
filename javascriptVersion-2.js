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
    chosenCity1Info.innerHTML += ` <div id="chosenCity" class="cityName">${userChosenCityFormattedName}</div>

            <div id="chosenCityTime" class="timeDisplayText">${timezoneTime} </div>

            <div id="chosenCitytDate" class="dateDisplayText">${timezoneDate}</div>
            <div class="timeOffsetwidget">
              <div
                id="timeDifferenceChosenCity1"
                class="timeDifferenceDisplayText"
              >${chosenCityTimeOffset}</div>
            </div>`;
  }
}

function showInfoOfChosenCity2(event) {
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

    let chosenCity = document.querySelector("#chosenCity2");
    chosenCity.innerHTML = `${userChosenCityFormattedName}`;

    let chosenCityTime = document.querySelector("#chosenCityTime2");
    chosenCityTime.innerHTML = `${timezoneTime} `;

    let chosenCityDate = document.querySelector("#chosenCitytDate2");
    chosenCityDate.innerHTML = `${timezoneDate}`;

    let chosenCityTimeDifference = document.querySelector(
      "#timeDifferenceChosenCity2"
    );
    chosenCityTimeDifference.innerHTML = `${chosenCityTimeOffset}`;
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

function defaultDisplay1() {
  let defaultCity = "Asia/Hong_Kong";
  let defaultCityFormattedName = defaultCity.replace("_", " ").split("/")[1];
  let defaultCityName = document.querySelector("#chosenCity");

  defaultCityName.innerHTML = `${defaultCityFormattedName}`;

  let defaultCityTime = document.querySelector("#chosenCityTime");
  defaultCityTime.innerHTML = moment().tz(`${defaultCity}`).format("HH:mm:ss");

  let defaultCityDate = document.querySelector("#chosenCitytDate");
  defaultCityDate.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("ddd, D MMM YYYY");

  let defaultCityTimeOffset = document.querySelector(
    "#timeDifferenceChosenCity1"
  );
  defaultCityTimeOffset.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("[UTC]Z");
}

let userChoice = document.querySelector("#user-chosen-timezones");
userChoice.addEventListener("change", showInfoOfChosenCity);

defaultDisplay1();

function defaultDisplay2() {
  let defaultCity = "Asia/Tokyo";
  let defaultCityFormattedName = defaultCity.replace("_", " ").split("/")[1];
  let defaultCityName = document.querySelector("#chosenCity2");
  defaultCityName.innerHTML = `${defaultCityFormattedName}`;

  let defaultCityTime = document.querySelector("#chosenCityTime2");
  defaultCityTime.innerHTML = moment().tz(`${defaultCity}`).format("HH:mm:ss");

  let defaultCityDate = document.querySelector("#chosenCitytDate2");
  defaultCityDate.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("ddd, D MMM YYYY");

  let defaultCityTimeOffset = document.querySelector(
    "#timeDifferenceChosenCity2"
  );
  defaultCityTimeOffset.innerHTML = moment()
    .tz(`${defaultCity}`)
    .format("[UTC]Z");

  let userChoice2 = document.querySelector("#user-chosen-timezones2");
  userChoice2.addEventListener("change", showInfoOfChosenCity2);
}
defaultDisplay2();

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
