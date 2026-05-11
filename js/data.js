// Все 5★ персонажи
const ALL_FIVE_STARS = [
    { id: '5-1', name: 'Архонт Огня', rarity: 5 },
    { id: '5-2', name: 'Архонт Воды', rarity: 5 },
    { id: '5-3', name: 'Архонт Воздуха', rarity: 5 },
    { id: '5-4', name: 'Архонт Земли', rarity: 5 },
    { id: '5-5', name: 'Архонт Молнии', rarity: 5 },
    { id: '5-6', name: 'Архонт Льда', rarity: 5 },
    { id: '5-7', name: 'Архонт Тьмы', rarity: 5 },
    { id: '5-8', name: 'Архонт Света', rarity: 5 },
];

// Все 4★ персонажи
const ALL_FOUR_STARS = [
    { id: '4-1', name: 'Рыцарь', rarity: 4 },
    { id: '4-2', name: 'Лучница', rarity: 4 },
    { id: '4-3', name: 'Маг', rarity: 4 },
    { id: '4-4', name: 'Ассасин', rarity: 4 },
    { id: '4-5', name: 'Бард', rarity: 4 },
    { id: '4-6', name: 'Кузнец', rarity: 4 },
    { id: '4-7', name: 'Жрица', rarity: 4 },
    { id: '4-8', name: 'Странник', rarity: 4 },
];

// 3★ предметы
const THREE_STARS = [
    { id: '3-1', name: 'Меч', rarity: 3 },
    { id: '3-2', name: 'Лук', rarity: 3 },
    { id: '3-3', name: 'Копьё', rarity: 3 },
    { id: '3-4', name: 'Катализатор', rarity: 3 },
    { id: '3-5', name: 'Клеймор', rarity: 3 },
];

// Половины 5★
const HALF_1 = ALL_FIVE_STARS.slice(0, 4); // Огонь, Вода, Воздух, Земля
const HALF_2 = ALL_FIVE_STARS.slice(4, 8); // Молния, Лёд, Тьма, Свет

// 8 баннеров
const BANNERS = [
    {
        id: 1,
        name: 'Баннер Огня',
        fiveStar: HALF_1[0],        // Архонт Огня
        fourStars: [ALL_FOUR_STARS[0], ALL_FOUR_STARS[1], ALL_FOUR_STARS[2]], // Рыцарь, Лучница, Маг
        color: '#ff4500'
    },
    {
        id: 2,
        name: 'Баннер Воды',
        fiveStar: HALF_1[1],        // Архонт Воды
        fourStars: [ALL_FOUR_STARS[2], ALL_FOUR_STARS[3], ALL_FOUR_STARS[4]], // Маг, Ассасин, Бард
        color: '#00bfff'
    },
    {
        id: 3,
        name: 'Баннер Воздуха',
        fiveStar: HALF_1[2],        // Архонт Воздуха
        fourStars: [ALL_FOUR_STARS[4], ALL_FOUR_STARS[5], ALL_FOUR_STARS[6]], // Бард, Кузнец, Жрица
        color: '#7fff00'
    },
    {
        id: 4,
        name: 'Баннер Земли',
        fiveStar: HALF_1[3],        // Архонт Земли
        fourStars: [ALL_FOUR_STARS[6], ALL_FOUR_STARS[7], ALL_FOUR_STARS[0]], // Жрица, Странник, Рыцарь
        color: '#daa520'
    },
    {
        id: 5,
        name: 'Баннер Молнии',
        fiveStar: HALF_2[0],        // Архонт Молнии
        fourStars: [ALL_FOUR_STARS[1], ALL_FOUR_STARS[3], ALL_FOUR_STARS[5]], // Лучница, Ассасин, Кузнец
        color: '#9370db'
    },
    {
        id: 6,
        name: 'Баннер Льда',
        fiveStar: HALF_2[1],        // Архонт Льда
        fourStars: [ALL_FOUR_STARS[0], ALL_FOUR_STARS[4], ALL_FOUR_STARS[7]], // Рыцарь, Бард, Странник
        color: '#87ceeb'
    },
    {
        id: 7,
        name: 'Баннер Тьмы',
        fiveStar: HALF_2[2],        // Архонт Тьмы
        fourStars: [ALL_FOUR_STARS[2], ALL_FOUR_STARS[5], ALL_FOUR_STARS[6]], // Маг, Кузнец, Жрица
        color: '#4b0082'
    },
    {
        id: 8,
        name: 'Баннер Света',
        fiveStar: HALF_2[3],        // Архонт Света
        fourStars: [ALL_FOUR_STARS[3], ALL_FOUR_STARS[6], ALL_FOUR_STARS[7]], // Ассасин, Жрица, Странник
        color: '#ffd700'
    }
];

// Текущий выбранный баннер (по умолчанию первый)
let currentBanner = BANNERS[0];

const WISH_COST = 160;