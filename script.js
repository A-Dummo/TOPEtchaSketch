function run() {
    const grid = document.querySelector("#grid-of-divs");
    const n = Number(prompt());
    const percentage = 1 / n * 100;
    for (let i = 0; i < n * n; i++) {
        grid.innerHTML += `<div class="etchPixel" style="min-width: ${percentage}%"></div>`;
    }
}

run();

const grids = document.querySelectorAll(".etchPixel");
grids.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.classList.add("pixelGray");
        console.log(1);
    });
});