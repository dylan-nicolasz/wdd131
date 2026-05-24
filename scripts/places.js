document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = "Last Modified: " + document.lastModified;

const currentTemp = 9;
const currentWindSpeed = 12;

const calculateWindChill = (temp, speed) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));

if (currentTemp <= 10 && currentWindSpeed > 4.8) {
    const windChill = calculateWindChill(currentTemp, currentWindSpeed);
    
    document.getElementById("wind-chill-value").textContent = `${windChill.toFixed(1)} °C`;
} else {
    document.getElementById("wind-chill-value").textContent = "N/A";
}