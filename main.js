
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // لمنع إعادة تحميل الصفحة
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('يرجى ملء جميع الحقول!');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صالح!');
            return;
        }

        alert('تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا!');
        document.querySelector('form').reset(); // إعادة تعيين الحقول
    });

// تأثير بسيط عند التمرير لإظهار الأقسام
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            section.classList.add('visible');
        }
    });
});

// إضافة كلاس CSS مرئي عند التمرير
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
});

AOS.init();