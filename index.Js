const humidityValueEl = document.getElementById('humidityValue');
const temperatureValueEl = document.getElementById('temperatureValue');
const overallStatusEl = document.getElementById('overallStatus');

function getSimulatedDHTData() {
    // Simula valores realistas para DHT11
    const simulatedHumidity = Math.floor(Math.random() * (90 - 40 + 1)) + 40; // 40-90%
    const simulatedTemperature = Math.floor(Math.random() * (35 - 15 + 1)) + 15; // 15-35°C
    return { humidity: simulatedHumidity, temperature: simulatedTemperature };
}

function updateDashboard() {
    const data = getSimulatedDHTData();
    humidityValueEl.textContent = data.humidity;
    temperatureValueEl.textContent = data.temperature;
    
    overallStatusEl.classList.remove('dry', 'normal', 'wet');

    // La lógica de estado se basa en la humedad para el ejemplo de la planta
    if (data.humidity < 45) { // Si la humedad es baja (planta seca)
        overallStatusEl.classList.add('dry');
    } else if (data.humidity >= 45 && data.humidity <= 75) { // Humedad óptima
        overallStatusEl.classList.add('normal');
    } else { // Humedad alta (podría ser demasiada agua o ambiente muy húmedo)
        overallStatusEl.classList.add('wet');
    }
}

setInterval(updateDashboard, 2000);
updateDashboard(); // Initial call