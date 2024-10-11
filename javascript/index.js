function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Klaipeda
  let klaipedaElement = document.querySelector("#klaipeda");
  if (klaipedaElement) {
    let klaipedaDateElement = klaipedaElement.querySelector(".date");
    let klaipedaTimeElement = klaipedaElement.querySelector(".time");
    let klaipedaTime = moment().tz("Europe/Vilnius");

    klaipedaDateElement.innerHTML = klaipedaTime.format("MMMM	Do YYYY");
    klaipedaTimeElement.innerHTML = klaipedaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone==="current") {
    cityTimeZone=moment.tz.guess(); 
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

document.addEventListener("DOMContentLoaded", function () {
  let citySelect = document.getElementById("city");
  let backLinkContainer = document.getElementById("back-link-container");

  citySelect.addEventListener("change", function () {
    let selectedCity = citySelect.value;
    backLinkContainer.innerHTML = "";

    if (selectedCity === "current") {
      let backLink = document.createElement("a");
      backLink.href = "index.html"; 
      backLink.textContent = "All cities";
      backLinkContainer.appendChild(backLink);
    }
  });
});
