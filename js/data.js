// Все 5★ персонажи
const ALL_FIVE_STARS = [
    { id: '5-1', name: 'Мефисто', rarity: 5 },
    { id: '5-2', name: 'Фици', rarity: 5 },
    { id: '5-3', name: 'Молли', rarity: 5 },
    { id: '5-4', name: 'Лишайник', rarity: 5 },
    { id: '5-5', name: 'Шино', rarity: 5 },
    { id: '5-6', name: 'Шанон', rarity: 5 },
    { id: '5-7', name: 'Мису', rarity: 5 },
    { id: '5-8', name: 'Лихуа', rarity: 5 },
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
        name: 'Электро',
        fiveStar: HALF_1[0],        // Архонт Огня
        fourStars: [ALL_FOUR_STARS[0], ALL_FOUR_STARS[1], ALL_FOUR_STARS[2]], // Рыцарь, Лучница, Маг
        color: '#9370db'
    },
    {
        id: 2,
        name: 'Гидро',
        fiveStar: HALF_1[1],        // Архонт Воды
        fourStars: [ALL_FOUR_STARS[2], ALL_FOUR_STARS[3], ALL_FOUR_STARS[4]], // Маг, Ассасин, Бард
        color: '#00bfff'
    },
    {
        id: 3,
        name: 'Анэмо',
        fiveStar: HALF_1[2],        // Архонт Воздуха
        fourStars: [ALL_FOUR_STARS[4], ALL_FOUR_STARS[5], ALL_FOUR_STARS[6]], // Бард, Кузнец, Жрица
        color: '#87ceeb'
    },
    {
        id: 4,
        name: 'Дендро',
        fiveStar: HALF_1[3],        // Архонт Земли
        fourStars: [ALL_FOUR_STARS[6], ALL_FOUR_STARS[7], ALL_FOUR_STARS[0]], // Жрица, Странник, Рыцарь
        color: '#7fff00'
    },
    {
        id: 5,
        name: 'Пиро',
        fiveStar: HALF_2[0],        // Архонт Молнии
        fourStars: [ALL_FOUR_STARS[1], ALL_FOUR_STARS[3], ALL_FOUR_STARS[5]], // Лучница, Ассасин, Кузнец
        color: '#ff4500'
    },
    {
        id: 6,
        name: 'Крио',
        fiveStar: HALF_2[1],
        fourStars: [ALL_FOUR_STARS[0], ALL_FOUR_STARS[4], ALL_FOUR_STARS[7]], // Рыцарь, Бард, Странник
        color: '#87ceeb'
    },
    {
        id: 7,
        name: 'Гео',
        fiveStar: HALF_2[2],      
        fourStars: [ALL_FOUR_STARS[2], ALL_FOUR_STARS[5], ALL_FOUR_STARS[6]], // Маг, Кузнец, Жрица
        color: '#daa520'
    },
    {
        id: 8,
        name: 'Аура',
        fiveStar: HALF_2[3],       
        fourStars: [ALL_FOUR_STARS[3], ALL_FOUR_STARS[6], ALL_FOUR_STARS[7]], // Ассасин, Жрица, Странник
        color: '#ffccff'
    }
];

// Текущий выбранный баннер (по умолчанию первый)
let currentBanner = BANNERS[0];

const WISH_COST = 160;