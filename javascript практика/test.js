/*----------------------------------------Переменные-------------------------------------------------- */
const userName = "Anton";/* userName Верблюжая натация, второе слово с Большой буквы*/ 
let age = 24;
let boo = true; /*true/false. Булевые значения, пригодяться в сравнениях и условиях */ 

const header = document.querySelector(".header");/*querySelector-переменная селектор, возможна работа с таким же классом в CSS документе  */ 
const header = document.querySelector("input[type=text]");/*input[type=text]- input с классом text */

const header = document.querySelector("#header");/*получение выборки по ID */ 

const header = document.getElementById("#header");/*получение выборки по ID *//*Популярный метод */ 

const navLinks = document.querySelector(".nav__link");/*querySelector выьирает первый элимент, подходящий под требование  */ 

const navLinks = document.querySelectorAll(".nav__link");/*querySelectorAll сохраняет коллекцию элиментов */


console.log(typeof header);/*Используется повсеместно для проверки  /* */ 

/*let /*Переменная с изменяемым значением*/
/*const/*Переменная с НЕизменяемым значением*/

/*----------------------------------------Функции-------------------------------------------------- */
function sayHello(){                                     /*Функция с именем sayHello */
    let message = "Hello " + name ; /*Тут let локальная переменная и доступна только в теле функции */ 
                                    /* + склеивает строки в одну  */         
    /* Тело функции*/
   
    console.log(message);                            
}

sayHello; /*Вызов функции sayHello */




function simpleMath(a, b){  /*а и б, принимаются параметры отправленные из simpleMath(11, 22); */ 
    let result = a + b;      /*работа с параметрами */    
    console.log(result);              
}

simpleMath(11, 22);   /*Отправляем функции два параметра 11 и 22  */ 


/* */

function simpleMath(a, b){  /*а и б, принимаются параметры отправленные из simpleMath(11, 22); */ 
    let result = a + b;      /*работа с параметрами */    
    return result;           /*Возвращаем переменную result */   
}

let sum = simpleMath(11, 22);   /*Отправляем функции два параметра а и б  */ 

console.log(sum);           /*Вывод не из функции, а из самого кода  */


/*---------------------------------События и их обработка------------------------------------------------ */

/*Имя, обработчик событий скролла,(само событие, функция()) */
window.addEventListener("scroll", function(){
    checkScroll();
});  

document.addEventListener('DOMContentLoaded', checkScroll); /*Сокращение */


function checkScroll(){
   /* console.log("scrooled"); /*проверка обработчика событий с именем scrooled */ 
   let scrollPos = window.scrollY;
   if(scrollPos > 0){              /*Если позиция скролла больше нуля*/     
/*Операторы сравнения if else */
       header.classList.add("red"); /*Если больше, то будем выдавать класс RED */
   } else 
       header.classList.remove("red"); 
}; /*Если меньше или равно, то будем возвращать класс RED обратно */ 
   console.log(scrollPos);
  /* header.classList.add("red"); */                        
  /*название переменной header,объект методов для работы с классами,add-добавить, добавить класс RED   */
  /*Добавляем в CSS класс .header.red */ 
   /*Теперь цвет шапки меняется динамически */




/* */
/*Обработчик события при клике на кнопку */
const testBtn = document.querySelector('#testBtn');

testBtn.addEventListener("click", function(){
    console.log('clicked')
});



/*При помощи цикл for прошлись по всем ссылкам в колекции и сохранили в переменную и повесили click на каждую   */
for(let navItem of navLinks){
    navItem.addEventListener("click", function(){
        console.log(navItem.text)
    });
    /*Теперь обработчик событий весит на каждой ссылки navLinks */
}


