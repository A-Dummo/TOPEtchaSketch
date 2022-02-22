function run() {
    const grid = document.querySelector("#grid-of-divs");
    const n = Number(prompt());
    const percentage = 1 / n * 100;
    for (let i = 0; i < n * n; i++) {
        //grid.innerHTML += "<div class='etchPixel'><p>f</p></div>";
        //grid.innerHTML += `<div style="min-width: ${percentage}%; min-height: ${percentage}%"><p>f</p></div>`;
        grid.innerHTML += `<div class='etchPixel' style="min-width: ${percentage}%"><p>f</p></div>`;
    }
}

run();