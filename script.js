const photoData = [
    {title: "Мудрый взгляд", description: "В такой день Кайро особенно философичен. Его глубокий взгляд словно раскрывает секреты вселенной."},
    {title: "Король уюта", description: "Кайро осознал, что он истинный король уюта. Мягкость его шерсти делает его незаменимым компаньоном."},
    {title: "Грация в движении", description: "Кайро движется с абсолютной грацией. Его ловкость не знает границ."},
    {title: "Безмятенный покой", description: "Кайро нашел идеальное место для медитации. Его спокойствие заразительно."},
    {title: "Игровое настроение", description: "Кайро готов к приключениям! Его игривый дух переполняет энергией."},
    {title: "Княжеское величие", description: "Кайро восседает со всем величием, которое ему положено."},
    {title: "Нежные мечты", description: "Кайро погружен в сладкие сны. Его мирное выражение говорит о чудесных снах."},
    {title: "Сторож красоты", description: "Кайро охраняет гармонию и совершенство. Его внимательный взор не пропускает деталей."},
    {title: "Полнота чувств", description: "Кайро на пике своего шарма и красоты. Каждый момент с ним священен в вечность."},
    {title: "Вечная любовь", description: "Кайро - воплощение нежности и преданности. Его любовь бесконечна и чиста."}
];

function openModal(index) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-image').src = document.querySelectorAll('.gallery-item')[index].querySelector('img').src;
    document.getElementById('modal-title').textContent = photoData[index].title;
    document.getElementById('modal-description').textContent = photoData[index].description;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('modal').onclick = function(e) {
    if (e.target === this) closeModal();
}

document.querySelector('.close').onclick = closeModal;