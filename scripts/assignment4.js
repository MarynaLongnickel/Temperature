function convertTemperatureRange(startValue, endValue, scale) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    scale = scale.toUpperCase();

    if (scale !== 'C' && scale !== 'F') {
        console.log('Invalid scale. Use "C" or "F".');
        return;
    }

    for (let temp = Number(startValue); temp <= Number(endValue); temp++) {
        let converted, resultLine, colorClass = '';
        let tempInF = scale === 'C' ? (temp * 9 / 5) + 32 : temp;

        if (scale === 'C') {
            converted = (temp * 9 / 5) + 32;
            resultLine = `C: ${temp} → F: ${converted.toFixed(2)}`;
        } else {
            converted = (temp - 32) * 5 / 9;
            resultLine = `F: ${temp} → C: ${converted.toFixed(2)}`;
        }

        if (tempInF < 50) {
            colorClass = 'cold';
        } else if (tempInF > 90) {
            colorClass = 'hot';
        }

        resultsContainer.innerHTML += `
            <p class="result-line ${colorClass}">${resultLine}</p>
        `;
    }
}

document.getElementById('rangeConvertBtn').addEventListener('click', () => {
    const startValue = prompt('Enter the starting temperature:');
    const endValue = prompt('Enter the ending temperature:');
    const scale = prompt('Enter the scale (C or F):');

    if (!startValue || !endValue || !scale) {
        console.log('All inputs are required.');
        return;
    }

    convertTemperatureRange(startValue, endValue, scale);
});
