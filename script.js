document.getElementById('lab1').addEventListener('click', function() {
    var labContent = document.getElementById('labContent');
    labContent.innerHTML = `
        <h2>Лабораторна робота 1</h2>
        <p>Тут буде відображена інформація про першу лабораторну роботу.</p>
        <p>Варіанти:</p>
        <ul>
            <li>Тема 1</li>
            <li>Тема 2</li>
            <!-- Додайте сюди інші варіанти -->
        </ul>
    `;
});
