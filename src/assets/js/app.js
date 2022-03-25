console.log('Hello world!');

// import langArray from './components/translate';

const langArray = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }
// ПЕРЕВОД ТЕКСТА-----------------------------------------

const langButtons = document.querySelectorAll('.nav__lang_switcher');

for (let elem of langButtons) {
  elem.addEventListener('click', switchLanguage);
}

function switchLanguage(event) {
  
  langButtons.forEach(e => e.classList.remove('active'));

  const chosenLanguage = langArray[event.target.getAttribute('id')];

  document.querySelectorAll('[text]').forEach(elem => {
      elem.innerHTML = chosenLanguage[elem.getAttribute('text')]
  });

  event.target.classList.add('active');
  
  localStorage.setItem('selectedLanguage', event.target.getAttribute('id'));
}

const englishLangButton = document.getElementById('en');
const russianLangButton = document.getElementById('ru');

function loadLanguage() {

  if (localStorage.getItem('selectedLanguage') === 'ru') {
      
    russianLangButton.click();
   
  } else{
      
      englishLangButton.click();
  }
}
loadLanguage();

// СМЕНА БЛОКОВ КАРТИНОК --------------------------------

const seasonButtons = document.querySelectorAll('.portfolio__button');
const portfolioBlocks = document.querySelectorAll('.portfolio__wrap');

for (let button of seasonButtons) {
  button.onclick = function(event) {
    
    document.querySelector('.portfolio__button.selected').classList.remove('selected');
    document.querySelector('.portfolio__wrap.selected').classList.remove('selected');
    
    event.target.classList.add('selected');

    for (let elem of portfolioBlocks) {

      if (elem.getAttribute('id') === button.getAttribute('text')){
        elem.classList.add('selected');
      }
    }
  }
}

// Смена темы страницы с темной на светлую ------------------

const lightThemeButton = document.querySelector('.nav__light_switch');
const darkThemeButton = document.querySelector('.nav__dark_switch');
const html = document.querySelector('html');

lightThemeButton.addEventListener('click', changeToLightTheme);

function changeToLightTheme(event) {
    
  html.classList.add('light');  
    
  localStorage.setItem('lightThemeOn', true);

  darkThemeButton.style.display = 'block';
  lightThemeButton.style.display = 'none';    
}

darkThemeButton.addEventListener('click', changeToDarkTheme);

function changeToDarkTheme(event) {
    
  html.classList.remove('light');        
  
  localStorage.setItem('lightThemeOn', false);
  
  darkThemeButton.style.display = 'none';
  lightThemeButton.style.display = 'block';    
}

function chooseTheme() {

  if (localStorage.getItem('lightThemeOn') === 'true') {
    changeToLightTheme();

  } else {
    changeToDarkTheme();
  }
} 

chooseTheme();


// Burger-menu -----------------------------------------

const menu = document.querySelector('.nav__menu');
const openMenuButton = document.querySelector('.nav__mobile_button');
const closeMenuButton = document.querySelector('.nav__close_mobile');

openMenuButton.onclick = function() {
  menu.classList.add('active');
}

closeMenuButton.onclick = function() {
  menu.classList.remove('active');
}

// Валидация формы --------------------------------------------

const form = document.querySelector('.form__contact');
const formInputs = form.elements;
const button = document.querySelector('.form__button');

for (let element of formInputs) {
  element.oninput = function(event) {

    if (!event.target.value){
      event.target.classList.add('error');
    } else {
      event.target.classList.remove('error');
    }
  }
}

form.onsubmit = function(event) {
  event.preventDefault();
  for (let element of formInputs) {

    if (!element.value) {
      element.classList.add('error');
    } else {
      element.classList.remove('error');
    }
  }
  form.reset();
}

