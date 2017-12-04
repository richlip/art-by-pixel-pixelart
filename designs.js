(function() {
  'use strict';

  // Globale Variablen
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixel_canvas");

  // listener
  $sizePicker.addEventListener('submit', function() {
    event.preventDefault();

    // Grid Daten ziehen
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    makeGrid(width, height);
  })

  // Grid erstellen
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 0; row < height; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < width; cell++ ) {
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        }
    }
  }

  // Farben wechseln
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();
