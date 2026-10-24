(function () {
    var isKa = document.documentElement.lang === 'ka';
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = '<button class="lightbox-close" aria-label="' + (isKa ? 'დახურვა' : 'Close') + '">&times;</button><img alt=""><div class="lightbox-caption"></div>';
    document.body.appendChild(box);

    var img = box.querySelector('img');
    var cap = box.querySelector('.lightbox-caption');
    var closeBtn = box.querySelector('.lightbox-close');
    var last = null;

    function open(el) {
        last = document.activeElement;
        img.src = el.currentSrc || el.src;
        img.alt = el.alt;
        cap.textContent = el.alt;
        box.classList.add('open');
        closeBtn.focus();
    }
    function close() {
        box.classList.remove('open');
        img.removeAttribute('src');
        if (last) last.focus();
    }

    document.querySelectorAll('.card img').forEach(function (el) {
        el.tabIndex = 0;
        el.setAttribute('role', 'button');
        el.addEventListener('click', function () { open(el); });
        el.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(el); }
        });
    });
    box.addEventListener('click', function (e) { if (e.target !== img) close(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && box.classList.contains('open')) close();
    });
})();
