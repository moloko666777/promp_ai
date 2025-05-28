// import gsap from 'gsap';
import { gsap, ScrollTrigger } from 'gsap/all';

// Регистрируем плагин ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);
//
// // Функция для инициализации анимаций
// export function initAnimations() {
//     // Анимация для всех секций
//     gsap.utils.toArray('section').forEach(section => {
//         gsap.fromTo(section,
//             {
//                 opacity: 0,
//                 y: 50
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: section,
//                     start: "top 80%",
//                     end: "top 20%",
//                     toggleActions: "play none none reverse"
//                 }
//             }
//         );
//     });
//
//     // Анимация для заголовков
//     gsap.utils.toArray('h2').forEach(heading => {
//         gsap.fromTo(heading,
//             {
//                 opacity: 0,
//                 y: 30
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.8,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: heading,
//                     start: "top 80%",
//                     toggleActions: "play none none reverse"
//                 }
//             }
//         );
//     });
//
//     // Анимация для параграфов
//     gsap.utils.toArray('p').forEach(paragraph => {
//         gsap.fromTo(paragraph,
//             {
//                 opacity: 0,
//                 y: 20
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.6,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: paragraph,
//                     start: "top 85%",
//                     toggleActions: "play none none reverse"
//                 }
//             }
//         );
//     });
// }

// const menuItems = document.querySelectorAll('.header ul.menu li.menu-item');
//
// // Когда открывается меню (например, по клику)
// function openMenu() {
//     gsap.to(menuItems, {
//         opacity: 1,
//         y: 0, // если хотите ещё и сдвиг вверх
//         stagger: 0.05, // задержка между элементами в секундах
//         duration: 0.6,
//         ease: "power2.out"
//     });
// }
//
// // Когда закрывается меню (анимировать обратно)
// function closeMenu() {
//     gsap.to(menuItems, {
//         opacity: 0,
//         y: 20, // плавный уход вниз, если нужно
//         stagger: 0.03,
//         duration: 0.4,
//         ease: "power2.in"
//     });
// }

//
// const rows = document.querySelectorAll(".cb-tagreel-row");
// const rowsFrom = document.querySelectorAll(".cb-tagreel-row-from");
//
// rows.forEach(function (e, i) {
//     let row_width = e.getBoundingClientRect().width;
//     let row_item_width = e.children[0].getBoundingClientRect().width;
//     let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
//     let x_translation = initial_offset * -1;
//     // console.log(e.children[0].clientWidth);
//     console.log(x_translation);
//
//     gsap.set(e, {
//         xPercent: `${initial_offset}`
//     });
//
//     // let duration = 5 * (i + 1);
//
//     let tl = gsap.timeline();
//
//     tl.to(e, {
//         ease: "none",
//         duration: 9,
//         xPercent: 0,
//         repeat: -1
//     });
// });
//
// rowsFrom.forEach(function (e, i) {
//     let row_width = e.getBoundingClientRect().width;
//     let row_item_width = e.children[0].getBoundingClientRect().width;
//     let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
//     let x_translation = initial_offset * -1;
//     // console.log(e.children[0].clientWidth);
//     console.log(x_translation);
//
//     gsap.set(e, {
//         xPercent: `${initial_offset}`
//     });
//
//
//     let tl = gsap.timeline();
//
//     tl.from(e, {
//         ease: "none",
//         duration: 9,
//         xPercent: 0,
//         repeat: -1
//     });
// });



// Находим все контейнеры marquee на странице
// const marqueeContainers = document.querySelectorAll('.marquee-container');
//
// // Обрабатываем каждый контейнер отдельно
// marqueeContainers.forEach(marqueeContainer => {
//     // Находим контент внутри текущего контейнера
//     const marqueeContent = marqueeContainer.querySelector('.marquee-content');
//
//     const contentWidth = marqueeContent.offsetWidth;
//     const containerWidth = marqueeContainer.offsetWidth;
//
//     // Клонируем контент для текущего контейнера
//     let totalContentWidth = contentWidth;
//     while (totalContentWidth < containerWidth + contentWidth) {
//         const clone = marqueeContent.cloneNode(true);
//         marqueeContainer.appendChild(clone);
//         totalContentWidth += contentWidth;
//     }
//
//     // Собираем все элементы контента внутри текущего контейнера
//     const contents = marqueeContainer.querySelectorAll('.marquee-content');
//
//     contents.forEach(content => {
//         gsap.to(content, {
//             x: `-=${content.offsetWidth}`,
//             duration: 20,
//             ease: "none",
//             repeat: -1,
//             modifiers: {
//                 x: gsap.utils.unitize(x => parseFloat(x) % content.offsetWidth)
//             }
//         });
//
//         content.addEventListener('mouseenter', () => {
//             gsap.to(content, { timeScale: 0.2 });
//         });
//
//         content.addEventListener('mouseleave', () => {
//             gsap.to(content, { timeScale: 1 });
//         });
//     });
// });

const rows = document.querySelectorAll(".cb-tagreel-row")

rows.forEach(function (e, i) {
    let row_width = e.getBoundingClientRect().width;
    let row_item_width = e.children[0].getBoundingClientRect().width;
    console.log('row_item_width', row_item_width)
    let initial_offset = ((2 * row_item_width) / row_width) * 50 * -1;
    console.log('initial_offset', initial_offset);
    let x_translation = initial_offset * -1;
    // console.log(e.children[0].clientWidth);
    console.log(x_translation);



    gsap.set(e, {
        xPercent: `${initial_offset}`
    });

    // let duration = 5 * (i + 1);

    let tl = gsap.timeline();

    tl.to(e, {
        ease: "none",
        duration: 15,
        xPercent: 0,
        repeat: -1
    });
});

const rowsFrom = document.querySelectorAll(".cb-tagreel-row-from")

rowsFrom.forEach(function (e, i) {
    let row_width = e.getBoundingClientRect().width;
    let row_item_width = e.children[0].getBoundingClientRect().width;
    console.log('row_item_width', row_item_width)
    let initial_offset = ((2 * row_item_width) / row_width) * 50 * -1;
    console.log('initial_offset', initial_offset);
    let x_translation = initial_offset * -1;
    // console.log(e.children[0].clientWidth);
    console.log(x_translation);



    gsap.set(e, {
        xPercent: `${initial_offset}`
    });

    // let duration = 5 * (i + 1);

    let tl = gsap.timeline();

    tl.from(e, {
        ease: "none",
        duration: 15,
        xPercent: 0,
        repeat: -1
    });
});