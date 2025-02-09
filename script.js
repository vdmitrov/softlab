// База программ
const programs = [
    { name: "Google Chrome", category: "Windows", img: "img/chrome.png", link: "#" },
    { name: "VLC Media Player", category: "Windows", img: "img/vlc.png", link: "#" },
    { name: "WinRAR", category: "Windows", img: "img/winrar.png", link: "#" },
    { name: "Adobe Photoshop", category: "Mac", img: "img/photoshop.png", link: "#" },
    { name: "Telegram", category: "Android", img: "img/telegram.png", link: "#" },
];

// Функция для отображения программ
function displayPrograms(programList) {
    const listContainer = document.getElementById("program-list");
    listContainer.innerHTML = ""; // Очищаем перед добавлением новых данных

    programList.forEach(program => {
        const div = document.createElement("div");
        div.classList.add("program");
        div.innerHTML = `
            <img src="${program.img}" alt="${program.name}">
            <h3>${program.name}</h3>
            <p>${program.category}</p>
            <button onclick="location.href='${program.link}'">Скачать</button>
        `;
        listContainer.appendChild(div);
    });
}

// Функция поиска программ
function searchPrograms() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredPrograms = programs.filter(program => 
        program.name.toLowerCase().includes(query)
    );
    displayPrograms(filteredPrograms);
}

// Загружаем программы при загрузке страницы
window.onload = () => {
    displayPrograms(programs);
};
