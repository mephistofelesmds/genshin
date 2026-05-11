const Storage = {
    getData() {
        const raw = localStorage.getItem('playerData');
        let data;
        if (raw) {
            data = JSON.parse(raw);
        } else {
            data = {
                primogems: 0,
                pity4: 0,
                pity5: 0,
                inventory: [],
                history: []
            };
        }
        // Защита: если старые данные без history — добавляем
        if (!data.history) data.history = [];
        if (!data.inventory) data.inventory = [];
        if (data.primogems === undefined) data.primogems = 0;
        if (data.pity4 === undefined) data.pity4 = 0;
        if (data.pity5 === undefined) data.pity5 = 0;
        return data;
    },

    saveData(data) {
        localStorage.setItem('playerData', JSON.stringify(data));
    },

    getGems() {
        return this.getData().primogems;
    },

    getInventory() {
        return this.getData().inventory;
    },

    getHistory() {
        return this.getData().history;
    },

    addItem(item) {
        const data = this.getData();
        const entry = {
            ...item,
            date: new Date().toISOString()
        };
        data.inventory.push(entry);
        data.history.push(entry);
        this.saveData(data);
    },

    spendGems(amount) {
        const data = this.getData();
        if (data.primogems < amount) return false;
        data.primogems -= amount;
        this.saveData(data);
        return true;
    },

    addGems(amount) {
        const data = this.getData();
        data.primogems += amount;
        this.saveData(data);
    },

    getStats() {
        const data = this.getData();
        const fiveStar = data.inventory.filter(i => i.rarity === 5).length;
        const fourStar = data.inventory.filter(i => i.rarity === 4).length;
        const threeStar = data.inventory.filter(i => i.rarity === 3).length;
        return {
            total: data.inventory.length,
            fiveStar,
            fourStar,
            threeStar,
            pity4: data.pity4,
            pity5: data.pity5
        };
    },

    resetAll() {
        localStorage.removeItem('playerData');
    }
};