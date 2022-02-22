function run() {
    const grid = document.querySelector("#grid-of-divs");
    const pixelAmount = Number(prompt("Amount of pixels"));

    populateGrid(grid, pixelAmount);


}

function populateGrid(etchGrid, pixelAmount) {
    const percentage = 100 / pixelAmount;
    for (let i = 0; i < pixelAmount * pixelAmount; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add("etchPixel");
        pixel.setAttribute('style', `min-width: ${percentage}%`)

        pixel.addEventListener('mouseover', () => {
            pixel.classList.add("pixelGray");
            console.log(i);
        }, {once: true});

        etchGrid.appendChild(pixel);
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const grid = document.querySelector("#grid-of-divs");
    grid.innerHTML = "";
    run();
});

run();