let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')
let clickSound = document.getElementById('click-sound')


let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 // vai gravar a ultima posição independendo do tanto de item

function setSlider() {
    let itemOld = container.querySelector('.list .item.active')

    itemOld.classList.remove('active') // remove a classe ativa


    let dotsOld = indicator.querySelector('ul li.active ')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)


}



prevButton.onclick = () => {

    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
    clickSound.play()

}

nextButton.onclick = () => {


    list.style.setProperty('--calculation', 1)

    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
    clickSound.play()



}


const backgrounds = [
    'radial-gradient(circle, rgb(58,79,252) 44%, rgba(36, 31, 31, 1) 100%)',
    'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)',
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgb(83,218,71) 100%)',
    'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(59,52,52,1) 100%)',
];
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.querySelector('.container').style.background = backgrounds[currentIndex];
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    document.querySelector('.container').style.background = backgrounds[currentIndex];
});