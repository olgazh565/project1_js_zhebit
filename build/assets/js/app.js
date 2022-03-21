console.log('Hello world!');
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
    // ПЕРЕВОД ТЕКТСА

const englishLangButton = document.querySelector('.en')
const russianLangButton = document.querySelector('.ru')

russianLangButton.onclick = function(event){
  event.preventDefault();  
  let russianLang = langArray['ru'];
  document.querySelectorAll('[text]').forEach(elem => {
    elem.innerHTML = russianLang[elem.getAttribute('text')]
  })
  localStorage.setItem('russianLangOn', true)
}
englishLangButton.onclick = function(event){
  event.preventDefault();
  let englishLang = langArray['en'];
  document.querySelectorAll('[text]').forEach(elem => {
    elem.innerHTML = englishLang[elem.getAttribute('text')]
  })
  localStorage.setItem('russianLangOn', false)
}
  
const langSelector = document.querySelector('.nav__lang_switch');

langSelector.onclick = function(event){
   
  if (event.target != englishLangButton) {
    englishLangButton.classList.remove('active');
    russianLangButton.classList.add('active');
  } else {
    englishLangButton.classList.add('active');
    russianLangButton.classList.remove('active');
  }
}
  
document.addEventListener('DOMContentLoaded', chooseLanguage)

function chooseLanguage(){
  if (localStorage.getItem('russianLangOn') === 'true'){
    russianLangButton.click()
  } else{
    englishLangButton.click()
  }
} 

// СМЕНА БЛОКОВ КАРТИНОК

const buttonWinter = document.querySelector('.winter');
const buttonSpring = document.querySelector('.spring');
const buttonSummer = document.querySelector('.summer');
const buttonAutumn = document.querySelector('.autumn');

const portfolioBlocks = document.querySelectorAll('.portfolio__wrap')

buttonWinter.onclick = function(event){
  document.querySelector('.portfolio__button.selected').classList.remove('selected');
  document.querySelector('.portfolio__wrap.selected').classList.remove('selected');
  event.target.classList.add('selected');
  for (let elem of portfolioBlocks){
    if (elem.getAttribute('id') === 'winter'){
      elem.classList.add('selected')
    }
  }
}
buttonSpring.onclick = function(event){
  document.querySelector('.portfolio__button.selected').classList.remove('selected');
  document.querySelector('.portfolio__wrap.selected').classList.remove('selected');
  event.target.classList.add('selected');
  for (let elem of portfolioBlocks){
    if (elem.getAttribute('id') === 'spring'){
      elem.classList.add('selected')
    }
  }
}
buttonSummer.onclick = function(event){
  document.querySelector('.portfolio__button.selected').classList.remove('selected');
  document.querySelector('.portfolio__wrap.selected').classList.remove('selected');
  event.target.classList.add('selected');
  for (let elem of portfolioBlocks){
    if (elem.getAttribute('id') === 'summer'){
      elem.classList.add('selected')
    }
  }
}
buttonAutumn.onclick = function(event){
  document.querySelector('.portfolio__button.selected').classList.remove('selected');
  document.querySelector('.portfolio__wrap.selected').classList.remove('selected');
  event.target.classList.add('selected');
  for (let elem of portfolioBlocks){
    if (elem.getAttribute('id') === 'autumn'){
      elem.classList.add('selected')
    }
  }
}

// Смена темы страницы с темной на светлую

const lightThemeButton = document.querySelector('.nav__light_switch')
const darkThemeButton = document.querySelector('.nav__dark_switch')
const blackElements = document.querySelectorAll('.change-theme')
const goldElements = document.querySelectorAll('.change-theme-gold')
const background = document.querySelector('html')
const darkThemeImg = document.querySelector('.nav__dark_switch img')
const lightThemeImg = document.querySelector('.nav__light_switch img')
const pseudoElements = document.querySelectorAll('h2 span')
const portfolioActiveButton = document.querySelector('.portfolio__button.selected')

darkThemeButton.addEventListener('click', changeToDarkTheme)

function changeToDarkTheme(event){
  event.preventDefault()
  background.style.background = '#000000';
  for (let elem of blackElements){
    elem.style.cssText = 'color: #ffffff; font-weight: 400;' 
  }
  for (let elem of goldElements){
    elem.style.color = '#bdae82';
  }
  for (let elem of pseudoElements){
    elem.classList.add('title_span')
    elem.classList.remove('theme-gold-pseudoelem')
  }
  lightThemeImg.setAttribute('src', './assets/imgs/sun.svg')
  darkThemeImg.setAttribute('src', './assets/imgs/moon_g.svg')
  
  localStorage.setItem('lightThemeOn', false)
  
  darkThemeButton.style.display = 'none';
  lightThemeButton.style.display = 'block';

  // portfolioActiveButton.style.color = "#000000";
}

lightThemeButton.addEventListener('click', changeToLightTheme)

function changeToLightTheme(event){
  event.preventDefault()

  background.style.background = '#ffffff';
  for (let elem of blackElements){
    elem.style.cssText = 'color: #000000; font-weight: 700;'
  }
  for (let elem of goldElements){
    elem.style.color = '#000000';
  }
  for (let elem of pseudoElements){
    elem.classList.remove('title_span')
    elem.classList.add('theme-gold-pseudoelem')
  }
  darkThemeImg.setAttribute('src', './assets/imgs/moon.svg')
  lightThemeImg.setAttribute('src', './assets/imgs/sun_g.svg')

  localStorage.setItem('lightThemeOn', true)

  darkThemeButton.style.display = 'block';
  lightThemeButton.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', chooseTheme)
  
function chooseTheme(){
  if (localStorage.getItem('lightThemeOn') === 'true'){
    lightThemeButton.click()
  } else{
    darkThemeButton.click()
  }
}

// При mouseover картинки все равно дергаются

// const insta = document.querySelector('.links__instagram')
// insta.onmouseover = function(event){
//   event.target.setAttribute('src', './assets/imgs/instagram_g.svg')
// }
// insta.onmouseout = function(event){
//   event.target.setAttribute('src', './assets/imgs/instagram.svg')
// }
