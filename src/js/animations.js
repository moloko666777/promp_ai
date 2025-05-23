// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
