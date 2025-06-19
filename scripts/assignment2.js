function convertToFahrenheit() {
    document.getElementById('results').innerHTML = '';
    
    let temperature  = prompt('Enter temperature in Celsius:');
    let F = temperature  * 9/5 + 32;
    document.getElementById('results').innerHTML += `<p class="result-line">Celsius: ${temperature } → Fahrenheit: ${F}</p>`;
}

document.getElementById('convertBtn').addEventListener('click', convertToFahrenheit);
