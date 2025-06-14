const container = document.getElementsByClassName("container");

for (let i = 0; i < 16; i++) {
    for (let n = 0; n < 16; n++) {
        let newDiv = document.createElement("div");
        newDiv.className = `div-number ${i}-${n}`;
        container[0].appendChild(newDiv);
    }
}
