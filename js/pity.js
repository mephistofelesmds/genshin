const Pity = {
    checkFiveStar(pityCounter) {
        if (pityCounter >= 90) return true;
        if (pityCounter >= 89) return Math.random() < 0.5;
        return Math.random() < 0.006;
    },

    checkFourStar(pityCounter) {
        if (pityCounter >= 10) return true;
        if (pityCounter >= 9) return Math.random() < 0.5;
        return Math.random() < 0.051;
    },

    performWish() {
        const data = Storage.getData();
        const banner = currentBanner;
        let result;

        if (this.checkFiveStar(data.pity5)) {
            data.pity5 = 0;
            data.pity4++;
            result = { ...banner.fiveStar, isFiveStar: true };
        } else if (this.checkFourStar(data.pity4)) {
            data.pity4 = 0;
            data.pity5++;
            const fourStarPool = banner.fourStars;
            const char = fourStarPool[Math.floor(Math.random() * fourStarPool.length)];
            result = { ...char, isFourStar: true };
        } else {
            data.pity4++;
            data.pity5++;
            const item = THREE_STARS[Math.floor(Math.random() * THREE_STARS.length)];
            result = { ...item, isThreeStar: true };
        }

        const entry = {
            ...result,
            date: new Date().toISOString(),
            banner: banner.name
        };
        data.inventory.push(entry);
        data.history.push(entry);
        Storage.saveData(data);

        return result;
    }
};