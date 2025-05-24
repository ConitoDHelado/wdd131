function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16));
}

let windChill = "N/A";
let temperature = 10;
let windSpeed = 5;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${Math.round(calculateWindChill(temperature, windSpeed) * 10) / 10 } ºC`;
}

windchill.innerHTML = `<span>${windChill}</span>`;

