const programs = [
    { name: "Google Chrome", category: "Windows", img: "img/chrome.png", link: "#" },
    { name: "VLC Media Player", category: "Windows", img: "img/vlc.png", link: "#" },
    { name: "WinRAR", category: "Windows", img: "img/winrar.png", link: "#" },
    { name: "Mozilla Firefox", category: "Linux", img: "img/firefox.png", link: "#" },
    { name: "LibreOffice", category: "Linux", img: "img/libreoffice.png", link: "#" },
    { name: "Telegram", category: "Android", img: "img/telegram.png", link: "#" },
];

function displayPrograms(category) {
    const listContainer = document.getElementById("program-list");
    listContainer.innerHTML = "";

    const filteredPrograms = programs.filter(program => program.category === category);

    filteredPrograms.forEach(program => {
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

function searchPrograms() {
    const query = document.getElementById("search").value.toLowerCase();
    const category = document.title.includes("Windows") ? "Windows" :
                     document.title.includes("Linux") ? "Linux" :
                     document.title.includes("Android") ? "Android" : null;

    const filteredPrograms = programs.filter(program =>
        program.category === category && program.name.toLowerCase().includes(query)
    );

    displayPrograms(category);
}

window.onload = () => {
    const category = document.title.includes("Windows") ? "Windows" :
                     document.title.includes("Linux") ? "Linux" :
                     document.title.includes("Android") ? "Android" : null;
    displayPrograms(category);
};
