document.addEventListener('DOMContentLoaded', () => {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertButton = document.getElementById('convertButton');
    const resultDisplay = document.getElementById('resultDisplay');
    const inputError = document.getElementById('inputError');

    function convertTemperature() {
        inputError.textContent = '';

        const inputValue = temperatureInput.value.trim();
        const originalUnit = unitSelect.value;
        let convertedValue;
        let convertedUnitSymbol;

        if (inputValue === '') {
            inputError.textContent = 'Temperature cannot be empty!';
            resultDisplay.value = '';
            return;
        }

        const temperature = parseFloat(inputValue);

        if (isNaN(temperature)) {
            inputError.textContent = 'Please enter a valid number!';
            resultDisplay.value = '';
            return;
        }

        switch (originalUnit) {
            case 'fahrenheit':
                convertedValue = (temperature - 32) * 5 / 9;
                convertedUnitSymbol = '°C';
                break;
            case 'celsius':
                convertedValue = (temperature * 9 / 5) + 32;
                convertedUnitSymbol = '°F';
                break;
            case 'kelvin':
                convertedValue = temperature - 273.15;
                convertedUnitSymbol = '°C';
                break;
            default:
                resultDisplay.value = 'Error: Invalid unit selected.';
                return;
        }

        resultDisplay.value = `${convertedValue.toFixed(4)} ${convertedUnitSymbol}`;
    }

    convertButton.addEventListener('click', convertTemperature);

    temperatureInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            convertTemperature();
        }
    });

    convertTemperature();
});