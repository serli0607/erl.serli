let lamp = document.getElementById('lamp');
for (let i = 0; i < 1000; i++) {
let trafficLight = `<div class="traffic" id="traffic` + i + `">
                <div class="light buled"></div>
                <button class="button buled" data-index="`+ i + `"></button></div>`

lamp.innerHTML += trafficLight
}

function toggleLight(index) {
let light = document.getElementById('traffic' + index).querySelector('.light');
light.classList.toggle('on')
}

lamp.addEventListener('click', function (event) { 
    { let index = event.target.attributes['data-index'].value
    toggleLight(index)}
});
