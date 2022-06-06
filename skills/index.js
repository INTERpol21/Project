const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })

}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

}


// const all = document.querySelectorAll('.slide');
// // выведем все найденные DOM элементы в консоль
// for (let elem of all) {
//     console.log(elem);
// }




// Jquery!!!
// Fixed Header 
// Получаем доступ к шапке через id=header в файле HTML 
$(function () {

    let header = $("#header");
    let intro = $("#intro");
    // получаем высоту вместе с pading страницы. innerHeight
    let introH = intro.innerHeight();
    // Обращаемся к нашему окну и к скроллу страницы сверху. То есть берем scrollTop, нашего window
    let scrollPos = $(window).scrollTop();

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    // создаем параметры для приема в функцию 
    checkScroll(scrollPos, introH);

    // Работаем с окном и хотим следить за скроллом scroll. Добавляем при обновлении страницы, проверку load. И проверку на размер окна resize
    $(window).on("scroll resize", function () {
        // Перезаписываем событие при resize
        introH = intro.innerHeight();

        // $(window) = this/так как находиться внутри этой функции
        scrollPos = $(this).scrollTop();


        // создаем параметры для приема в функцию 
        checkScroll(scrollPos, introH);
    });

    // Добавляем при обновлении страницы, проверку load. За место этого создаем отдельную функцию
    // выносим проверку в отдельную функцию
    function checkScroll(scrollPos, introH) {
        // Если, позиция скрола > чем высота интро блока

        if (scrollPos > introH) {
            // то добавляем класс fixed
            header.addClass("fixed");
        } else {
            // если меньше, то удаляем fixed
            header.removeClass("fixed");
        }
    }

    // Smooth Scroll

    // Делаем выборку элемента с атрибутом data-scroll
    $("[data-scroll]").on("click", function (event) {
        // Отменяем с помошью стандартное поведение ссылки при клике event
        event.preventDefault();
        // Получаем data отрибут, то есть scroll, или получаем id элимента
        let elementId = $(this).data('scroll');
        //Получаем отступ сверху элимента id.offset().top, то есть при клики на кнопки навигации в шапке получаем расстояние 
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            // анимация движения до позиции скролла при нажатие на кнопку в шапке. -70 для точного скролла 
            scrollTop: elementOffset - 70
            // 700 млсекунд для плавного скролла
        }, 700);


        // console.log(elementId);

    });

    /* Nav Toggle */
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    
});