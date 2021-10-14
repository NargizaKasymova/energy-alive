
const $headerButton = document.querySelector('.header-button')

const $button = document.querySelector('button')

const $pageItemOne = document.querySelector('.one')
const $pageItemTwo = document.querySelector('.two')
const $pageItemThree = document.querySelector('.three')

const $pageButtonOne = document.querySelector('.page-button-one')
const $pageButtonTwo = document.querySelector('.page-button-two')
const $pageButtonThree = document.querySelector('.page-button-three')

const $pageViewImageOne = document.querySelector('.vector-one')
const $pageViewImageTwo = document.querySelector('.vector-two')
const $pageViewImageThree = document.querySelector('.vector-three')



$headerButton.addEventListener('click', (event) => {

    document.body.classList.toggle('night-version');

    $pageItemOne.classList.toggle('item-night');
    $pageItemTwo.classList.toggle('item-night');
    $pageItemThree.classList.toggle('item-night');

    $pageButtonOne.classList.toggle('button-night');
    $pageButtonTwo.classList.toggle('button-night');
    $pageButtonThree.classList.toggle('button-night');

    $button.classList.toggle('button-night');
  
    if ($headerButton.textContent === "Дневная версия сайта"){
        $headerButton.textContent = "Ночная версия сайта";
        $pageViewImageOne.innerHTML = `<img class = "vector" src='images/Vector.png'><p>  255</p>`
        $pageViewImageTwo.innerHTML = `<img class = "vector" src='images/Vector.png'><p>  255</p>`
        $pageViewImageThree.innerHTML = `<img class = "vector" src='images/Vector.png'><p>  255</p>`
        console.log($pageViewImageOne.innerHTML)
    } else {
        $headerButton.textContent = "Дневная версия сайта";
        $pageViewImageOne.innerHTML = `<img class = "vector" src='images/Vector-night.png'><p>  255</p>`
        $pageViewImageTwo.innerHTML = `<img class = "vector" src='images/Vector-night.png'><p>  255</p>`
        $pageViewImageThree.innerHTML = `<img class = "vector" src='images/Vector-night.png'><p>  255</p>`
        console.log($pageViewImageOne.innerHTML)
    }
})

