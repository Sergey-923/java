// Функция валидации телефона
function validatePhone(phone) {
    const re = /^\+?[0-9\s\-\(\)]+$/;
    return re.test(phone);
}

// Получаем элементы
const form = document.getElementById('order-form');
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submit-button');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

// Обработчик отправки формы
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Валидация полей
    const phone = phoneInput.value.trim();
    
    if (!validatePhone(phone)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }
    
    // Открываем модальное окно
    modal.style.display = 'block';
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Плавный скролл к форме
document.querySelector('.header__link[href="#order"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#order-form').scrollIntoView({
        behavior: 'smooth'
    });
});

// Подсветка активного пункта меню
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY;
    
    sections.forEach(section => {
        if (section.offsetTop <= scrollPos + 70 && section.offsetTop + section.offsetHeight > scrollPos) {
            document.querySelector('.header__link[href="#' + section.id + '"]').classList.add('active');
        } else {
            document.querySelector('.header__link[href="#' + section.id + '"]').classList.remove('active');
        }
    });
});
