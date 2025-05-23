# 🚀 Gulp Проект з Tailwind CSS

## 📝 Опис
Проект на Gulp з використанням Tailwind CSS, PostCSS, ESBuild, GSAP та Lenis для створення сучасних веб-сайтів.

## 🛠 Технології
- ⚡️ Gulp 4
- 🎨 Tailwind CSS
- 🛠 PostCSS
- ⚡️ ESBuild
- 🎭 GSAP (GreenSock Animation Platform)
- 🎯 Lenis (Плавний скрол)
- 🚀 Surge (Деплой)

## ⚙️ Встановлення
```bash
# Клонувати репозиторій
git clone [url-репозиторію]

# Перейти в директорію проекту
cd gulp_project_tailwind

# Встановити залежності (npm)
npm install

# АБО встановити залежності (yarn)
yarn install
```

## 🚀 Використання
```bash
# Запуск в режимі розробки (npm)
npm run dev

# АБО запуск в режимі розробки (yarn)
yarn dev

# Збірка проекту та автоматичний деплой (npm)
npm run prod

# АБО збірка проекту та автоматичний деплой (yarn)
yarn prod
```

## ✨ Функціональність
- Компіляція SCSS в CSS
- Обробка JavaScript за допомогою ESBuild
- Оптимізація зображень
- Автоматичне додавання вендорних префіксів
- Мініфікація CSS та JavaScript
- Плавний скрол за допомогою Lenis
- Анімації за допомогою GSAP
- Автоматичний деплой на Surge при збірці

## Технології

- Gulp 4
- TailwindCSS 3.4
- Lenis (плавне прокручування)
- BrowserSync
- SCSS
- PostCSS
- ESBuild
- Open Sans (локальні шрифти)

## Конфігурація

Основні налаштування знаходяться у файлах:
- `config.js` - загальні налаштування проекту
- `tailwind.config.js` - конфігурація TailwindCSS
- `gulpfile.js` - завдання Gulp

## Особливості збірки

- JavaScript файли об'єднуються в один файл `main.js`
- SCSS файли компілюються в один CSS файл
- Зображення оптимізуються для продакшену
- Шрифти копіюються в папку dist/build
- Автоматичне оновлення браузера при змінах

## 📁 Структура проекту
```
├── src/
│   ├── js/
│   │   ├── main.js
│   │   └── animations.js
│   ├── scss/
│   │   └── main.scss
│   └── components/
│       └── scripts.html
├── dist/
├── build/
├── gulpfile.js
├── package.json
└── README.md
```

## 🎭 Анімації
Проект включає в себе наступні анімації при скролі:
- Плавна поява секцій
- Анімація заголовків
- Анімація параграфів
- Налаштовувані тригери для кожного елементу

## 🌐 Деплой
Проект налаштований на автоматичний деплой через Surge при виконанні команди `npm run prod` або `yarn prod`. Для налаштування деплою:
1. Встановіть Surge: `npm install -g surge` або `yarn global add surge`
2. Налаштуйте домен в `gulpfile.js` (замініть 'your-domain.surge.sh' на ваш домен)
3. При першому деплої Surge попросить створити акаунт

## 📄 Ліцензія
MIT