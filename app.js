const obrazki = document.querySelector('main');

let link
let xobrazek

function x() {
    for(let wiersz = 1; wiersz<4; wiersz+=1){
        for(let kolumna = 1;kolumna<5;kolumna+=1){
            let image = document.createElement('img');
            image.src = `christmas_0${wiersz}_0${kolumna}.png`
            image.draggable = true;
            obrazki.appendChild(image)
        }
    }
    
}
x();
obrazki.addEventListener('dragstart',function(event){
    link = event.target.src;
    xobrazek = event.target;
});
obrazki.addEventListener('dragover',function(event){
    event.preventDefault();
});
obrazki.addEventListener('drop',function(event){
    if(!event.target.src) return;
    xobrazek.src = event.target.src;
    event.target.src = link;
});
