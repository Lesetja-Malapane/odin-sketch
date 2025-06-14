const container = document.getElementsByClassName("container");

for (let i = 0; i < 16; i++) {
    for (let n = 0; n < 16; n++) {
        let newDiv = document.createElement("div");
        newDiv.className = `div-number ${i}-${n}`;
        container[0].appendChild(newDiv);
    }
}

function getNumberForColor() {
    return Math.floor(Math.random() * 226)
}
const allDivs = document.querySelectorAll(".div-number");

allDivs.forEach(divItem => {
    divItem.addEventListener("mouseover", () => {
        const red = getNumberForColor();
        const blue = getNumberForColor();
        const green = getNumberForColor();

        divItem.style.backgroundColor = `rgb(${red},${blue},${green})`;
    })
})