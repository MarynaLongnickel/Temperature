function convertTemp() {
    document.getElementById('results').innerHTML = '';

    let temperature = prompt('Enter temperature:');
    let unit = prompt('Enter unit (C or F):');

    if (!temperature || !unit) {
        console.log('Missing input.');
        return;
    }

    unit = unit.toUpperCase();
    let result;
    let otherUnit;
    let tempInF;

    switch (unit) {
        case 'C':
            otherUnit = 'F';
            result = (Number(temperature) * 9 / 5) + 32;
            tempInF = result;
            break;

        case 'F':
            otherUnit = 'C';
            result = (Number(temperature) - 32) * 5 / 9;
            tempInF = Number(temperature);
            break;

        default:
            console.log('Please enter a valid unit (C or F).');
            return;
    }

    // Determine color
    let colorClass = '';
    if (tempInF < 50) {
        colorClass = 'cold';
    } else if (tempInF > 90) {
        colorClass = 'hot';
    }

    document.getElementById('results').innerHTML += `
        <p class="result-line ${colorClass}">${unit}: ${temperature} → ${otherUnit}: ${result.toFixed(2)}</p>
    `;
}

document.getElementById('convertBtn').addEventListener('click', convertTemp);
