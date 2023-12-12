const root = document.querySelector('#root');
document.addEventListener('DOMContentLoaded', makeBoxes);
function makeBoxes() {
    for (let i = 0; i < 10000; i++) {
        let box = createBox();
        root.appendChild(box);
        let drawing = false;
        box.addEventListener('mousemove', function (event) {
            if (drawing) {
                event.target.style.backgroundColor = "white";
            }
        });
        document.addEventListener('click', function () {
            drawing = !drawing;
        });
    }
}
function createBox() {
    let box = document.createElement('div');
    box.classList.add('box');
    return box;
}