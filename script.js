// Пример данных для программ
const programs = [
    { name: "Программа 1", description: "Описание программы 1", image: "img/program1.png" },
    { name: "Программа 2", description: "Описание программы 2", image: "img/program2.png" },
    { name: "Программа 3", description: "Описание программы 3", image: "img/program3.png" },
    { name: "Программа 4", description: "Описание программы 4", image: "img/program4.png" },
    { name: "Программа 5", description: "Описание программы 5", image: "img/program5.png" }
];

// Функция для загрузки программ
function loadPrograms() {
    const programList = document.getElementById("program-list");

    programs.forEach(program => {
        const programCard = document.createElement("div");
        programCard.classList.add("program");

        programCard.innerHTML = `
            <img src="${program.image}" alt="${program.name}">
            <h3>${program.name}</h3>
            <p>${program.description}</p>
            <button>Установить</button>
        `;

        programList.appendChild(programCard);
    });
}

// Вызовем функцию, чтобы загрузить программы при загрузке страницы
window.onload = loadPrograms;
