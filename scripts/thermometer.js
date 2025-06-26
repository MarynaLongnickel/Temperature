    const slider = document.getElementById("temperature");
    const tempValue = document.getElementById("tempValue");
    const mercuryFill = document.getElementById("mercuryFill");
    const scaleRadios = document.querySelectorAll("input[name='scale']");

    let currentScale = "C";

    function updateThermometer() {
      const tempC = parseInt(slider.value);
      const temp = currentScale === "C" ? tempC : ((tempC * 9) / 5 + 32);

      tempValue.textContent = `${temp.toFixed(1)}°${currentScale}`;

      // Fill height based on Celsius value
      const percent = (tempC + 100) / 200;
      const heightPx = Math.max(0, Math.min(1, percent)) * 260; // max fill height in px
      mercuryFill.style.height = `${heightPx}px`;

      // Color change
      const r = Math.round(255 * percent);
      const b = Math.round(255 * (1 - percent));
      mercuryFill.style.backgroundColor = `rgb(${r}, 50, ${b})`;
    }

    slider.addEventListener("input", updateThermometer);
    scaleRadios.forEach(radio => {
      radio.addEventListener("change", (e) => {
        currentScale = e.target.value;
        updateThermometer();
      });
    });

    updateThermometer();