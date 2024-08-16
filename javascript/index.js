const body = document.querySelector("body");

for (let i = 0; i < 510; i++) {
    const div = document.createElement("div");

    body.appendChild(div);
}

var divs = Array.from(document.querySelectorAll("body div"));

var arr = [
    153, 118, 117, 150, 183, 217, 252, 287, 322, 357, 324, 291, 258, 225, 191,
    156, 121, 120,
];

const arr2 = [221, 188, 189, 223, 256, 289, 254, 219, 185, 186];

// console.log(body.children[0].classList)

// body.childNodes[2].classList.toggle("active")
Array.from(body.children).forEach((element) => {
    element.onclick = function () {
        console.log(Array.from(body.children).indexOf(this));
        this.classList.toggle("active");
    };
});

setInterval(() => {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            body.children[arr[i]].classList.toggle("active");
        }, i * 100);
    }
    
    setTimeout(() => {
        for (let i = 0; i < arr2.length; i++) {
            setTimeout(() => {
                body.children[arr2[i]].classList.toggle("active");
            }, i * 100);
        }
    }, arr.length*100);
}, arr.length*100 + arr2.length*100);