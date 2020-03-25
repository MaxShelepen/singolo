// const menu = document.querySelector('#menu');

// menu.addEventListener('click', (event) => {
//     menu.querySelectorAll('.navbar__list-item > a').forEach(el => el.classList.remove('active'));
//     event.target.classList.add('active');
// });

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('#wrapper > div');
    const links = document.querySelectorAll('#menu a')
    divs.forEach((el) => {
    if (el.offsetTop - 230 <= curPos && (el.offsetTop + el.offsetHeight - 230) > curPos) {
       links.forEach((a) => {
            a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
            a.classList.add('active')};
            });
        };
        
    });
};

const phoneScreen = document.querySelector('.phone__screen__slide-2');
const phone1__screenSlide1 = document.querySelector('.phone1__screen-Slide1');
const btn__phone1 = document.querySelector('.button__phone1');
const btn__phone2 = document.querySelector('.button__phone2');
const btn__phoneSlide2 = document.querySelector('.button__phone1-Slide2 ');
const phone2__screenSlide1 = document.querySelector('.phone2__screen-Slide1');
const slider = document.querySelector('.slider');
const slide1 = document.querySelector('.slider__slide-1');
const slide2 = document.querySelector('.slider__slide-2');

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
};

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);

    });

};

function showItem(direction) {

    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
};



function previuosItem(n) {
    hideItem('to-right')
    changeCurrentItem(n - 1);
    showItem('from-left');
    changeBackgrounds();
};


function nextItem(n) {
    hideItem('to-left')
    changeCurrentItem(n + 1);
    showItem('from-right');
    changeBackgrounds();

};

function changeBackgrounds() {
    slider.classList.add('background__Slide-1')
    if (!slider.className.includes('background__Slide-2')) {
        slider.classList.add('background__Slide-2')
    } else {
        slider.classList.remove('background__Slide-2')
    };
};


document.querySelector('.control.left').addEventListener('click', function (n) {
    if (isEnabled) {
        previuosItem(currentItem);
    }

});

document.querySelector('.control.right').addEventListener('click', function (n) {
    if (isEnabled) {
        nextItem(currentItem);
    }
});


btn__phoneSlide2.addEventListener('click', (event) => {
    const className = event.target.className;
    if (className.includes('in')) {
        phoneScreen.querySelector('.screen').classList.remove('off');
        btn__phoneSlide2.classList.remove('in');
    } else {
        phoneScreen.querySelector('.screen').classList.add('off');
        btn__phoneSlide2.classList.add('in');
    };
});


btn__phone1.addEventListener('click', (event) => {
    const className = event.target.className;
    if (className.includes('in')) {
        phone1__screenSlide1.querySelector('.screen').classList.remove('off');
        btn__phone1.classList.remove('in');
    } else {
        phone1__screenSlide1.querySelector('.screen').classList.add('off');
        btn__phone1.classList.add('in');
    };
});

btn__phone2.addEventListener('click', (event) => {
    const className = event.target.className;
    if (className.includes('in')) {
        phone2__screenSlide1.querySelector('.screen').classList.remove('off');
        btn__phone2.classList.remove('in');
    } else {
        phone2__screenSlide1.querySelector('.screen').classList.add('off');
        btn__phone2.classList.add('in');
    };
});

const portfolio = document.querySelector('.portfolio');



portfolio.addEventListener('click', (event) => {
    const portfolioImages = document.querySelector('.portfolio__3column');
    const images = portfolioImages.querySelectorAll('.portfolio__item');

    if (event.target.className === 'portfolio__tag') {
        const portfolioTags = document.querySelector('.portfolio__tags');

        portfolioTags.querySelectorAll('.portfolio__tag').forEach(el => el.classList.remove('active__tag'));
        event.target.classList.add('active__tag');

        const newImages = [...images].sort((a, b) => Math.random() - 0.5);
        portfolioImages.append(...newImages);

    }
    if (event.target.className === 'images__item') {
        images.forEach(el => el.querySelector('.images__item').classList.remove('active__images'));
        event.target.classList.add('active__images');

    }
});

const form = document.querySelector('.form');

const button = document.querySelector('.btn');
document.body.addEventListener('submit', (e) => {
    e.preventDefault();
});
button.addEventListener('click', (event) => {
    const formResponse = `<div id="form-response-container">
      <form  action="/" method="POST" id="form-response-form">
        <p class="response-message"><h3 class = "pesponse-title">Письмо отправлено</h3></p>
        <p class = "topic">${form.subject.value !== '' ? '<h4>Тема</h4>' + ' ' + form.subject.value  : 'Без темы' }</p>
        <p class = "description">${form.blog.value !== '' ? '<h4>Описание</h4>' + '' + form.blog.value : 'Без описания' }</p>
        <input type="submit" class = "form__response-button"  value="Ok">
        
      </form>
    </div>`;

    showModal(formResponse);
});

function showModal(text) {
    const wrapperModal = document.createElement('div');
    wrapperModal.classList.add('wrapper-modal');
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal-window');
    wrapperModal.append(modalWindow);
    const quoteInner = document.querySelector('.quote__inner');
    modalWindow.innerHTML = text;
    quoteInner.append(wrapperModal);
    document.querySelector('.form__response-button').addEventListener('click', removeModal);
};

function removeModal() {
    document.querySelector('.modal-window').remove();
    document.querySelector('.wrapper-modal').remove();
};



const newLocalTime = 200;
(function ev() {
  let time;
  window.onresize = function tim() {
    if (time) { clearTimeout(time); }
    time = setTimeout(() => {
      resizeWindow();
    }, newLocalTime);
  };
}());

function resizeWindow() {
  
  if (window.innerWidth < 376) {createBurgerMenu()};
  if (window.innerWidth > 375) { console.log('up') };
  
    };

    window.addEventListener('load', resizeWindow);


    function createBurgerMenu() {
        const navigation = document.querySelector('.navbar');
        const titleHeader = document.querySelector('.logo__header');
        const burgerTemplate = `<div class="burger__menu">
                <div class="burger__header">
                    
                    <p class="burger__title">SINGOLO<span class="el-logo__burger">*</span></p> 
                </div>
              
                <ul id ='menu' class="burger__list">
                    <li class="burger__list-item"><a class="active" href="#home">home</a></li>
                    <li class="burger__list-item"><a href="#services">services</a></li>
                    <li class="burger__list-item"><a href="#portfolio">portfolio</a></li>
                    <li class="burger__list-item"><a href="#about">about</a></li>
                    <li class="burger__list-item"><a class="link" href="#contact">contact</a></li>
                </ul>
            </div>`;

const burger = document.createElement('div');
burger.className = 'burger hidden';
burger.innerHTML = burgerTemplate;
document.body.insertAdjacentElement('afterbegin', burger);

navigation.remove();
titleHeader.remove();

const buttonBurger = document.createElement('div');
buttonBurger.className = 'hamburger__logo ';

buttonBurger.innerHTML = `<div class="hamburger_menu close">
<div class="line line-1"></div>
<div class="line line-2"></div>
<div class="line line-3"></div>
</div>`;

document.body.insertAdjacentElement('afterbegin', buttonBurger);

const hamburgerLogo = document.createElement('p');
hamburgerLogo.className = 'hamburger__title';
const menuHamburger = document.querySelector('.hamburger_menu');





// buttonBurger.addEventListener('click', () => {
//     menuHamburger.classList.toggle('change');
//     if(burger.className = 'burger hidden') {
//         burger.classList.remove('hidden');
//         } 

// })

buttonBurger.addEventListener('click', (event) => {
    const className = event.target.className;
   
    if (className.includes('close')) {
        buttonBurger.classList.remove('close');
        burger.classList.remove('hidden');
        menuHamburger.classList.toggle('change');
    } else {
        buttonBurger.classList.add('close');
        burger.classList.add('hidden');
        menuHamburger.classList.remove('change');
    };

});



// const buttonBurgerHidden = document.querySelector('.logo ');
// menuHamburger.addEventListener('click', () => {
//     burger.classList.add('hidden');
    
// });



const headerWrapper = document.querySelector('.header__wrapper');
hamburgerLogo.innerHTML = `SINGOLO<span class="el-logo__hamburger">*</span>`;
headerWrapper.insertAdjacentElement('afterbegin', hamburgerLogo);


};

