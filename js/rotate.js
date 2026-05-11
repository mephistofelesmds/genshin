(function() {
    // Ищем или создаём подсказку
    let hint = document.getElementById('rotateHint');
    if (!hint) {
        hint = document.createElement('div');
        hint.id = 'rotateHint';
        hint.className = 'rotate-hint';
        hint.style.display = 'none';
        hint.innerHTML = `
            <span class="rotate-icon">↻</span>
            <p>ПОВЕРНИТЕ</p>
            <p>ТЕЛЕФОН</p>
        `;
        document.body.prepend(hint);
    }

    function checkOrientation() {
        const isPortrait = window.innerWidth < 700 && window.innerHeight > window.innerWidth;
        
        if (isPortrait) {
            hint.style.display = 'flex';
            // Прячем основной контент
            const layout = document.querySelector('.wish-layout, .main-menu');
            if (layout) layout.style.display = 'none';
        } else {
            hint.style.display = 'none';
            const layout = document.querySelector('.wish-layout, .main-menu');
            if (layout) layout.style.display = '';
        }
    }

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', function() {
        setTimeout(checkOrientation, 100);
    });
    checkOrientation();
})();