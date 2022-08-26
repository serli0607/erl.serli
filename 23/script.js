let lamp = document.getElementById('lamp');
for (let s = 0; s <100; s++) {
   let trafficLight = "";

      if (s % 2 == 0) {
         trafficLight = "green";
      } else {
         trafficLight = "blue";
      }

lamp.innerHTML += `<div class="traffic" id="traffic` + s + `">
                  <div class="lampu buled ${trafficLight}"></div>
                  <button class="button buled" data-index="`+ s + `"></button></div>`
}
function toggleLight(index) {
let serliCantik = document.getElementById('traffic' + index).querySelector('.lampu');
serliCantik.classList.toggle('on')
}
lamp.addEventListener('click', function (e) { 
    if (e.target.classList.contains('button')) {
     let index = e.target.attributes['data-index'].value
     toggleLight(index)}
});
FontFaceSetLoadEvent
