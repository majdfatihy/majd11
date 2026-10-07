document.addEventListener('DOMContentLoaded', () => {
    // إعدادات مساحات الإعلانات
    const adSpaces = [
        { id: 'ad-leaderboard', width: '728px', height: '90px', text: 'مساحة إعلانية (728x90)' },
        { id: 'ad-rectangle', width: '300px', height: '250px', text: 'مساحة إعلانية (300x250)' }
    ];

    adSpaces.forEach(ad => {
        const el = document.getElementById(ad.id);
        if (el) {
            el.style.width = '100%';
            el.style.maxWidth = ad.width;
            el.style.height = ad.height;
            el.style.backgroundColor = '#e2e8f0';
            el.style.border = '2px dashed #94a3b8';
            el.style.color = '#64748b';
            el.style.display = 'flex';
            el.style.alignItems = 'center';
            el.style.justifyContent = 'center';
            el.style.margin = '20px auto';
            el.style.fontWeight = 'bold';
            el.style.borderRadius = '8px';
            el.innerHTML = `<span>${ad.text}</span>`;
        }
    });
});
