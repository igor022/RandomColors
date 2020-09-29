// const circles = Array.from(document.getElementsByClassName('circle'));
// const maxColorValue = 16777215;

// document.addEventListener('mousemove', mouseMove);

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

// function mouseMove(e) {
    
//     let color = (getRandomInt(maxColorValue + 1).toString(16));
//     console.log(color);
//     color = '0'.repeat(6 - color.length).concat(color);
//     color = '#' + color;
//     console.log(color);
//     console.log(`(${e.screenX}, ${e.screenY})`);
//     circles.forEach(element => {
//         element.style['background-color'] = color;
//     });
// }

// console.log(circles);


const circles = document.querySelectorAll('.circle');


document.body.addEventListener('mousemove', handleMove);


function handleMove(e) {
    console.log(e.screenY, e.screenX);
    circles[0].style = `background-color: rgb(42, ${e.screenY}, ${e.screenX})`;
    circles[1].style = `background-color: rgb(82, ${e.screenX}, ${e.screenY})`
    circles[2].style = `background-color: rgb(72, ${e.screenY}, ${e.screenX})`
}