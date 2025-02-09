const programs = [
    { 
        name: "Google Chrome", 
        category: "Windows", 
        img: "img/chrome.png", 
        link: "#", 
        description: "Быстрый и удобный веб-браузер от Google."
    },
    { 
        name: "VLC Media Player", 
        category: "Windows", 
        img: "img/vlc.png", 
        link: "#", 
        description: "Популярный медиаплеер с поддержкой множества форматов."
    },
    { 
        name: "WinRAR", 
        category: "Windows", 
        img: "img/Winrar.png", 
        link: "#", 
        description: "Архиватор файлов с высокой степенью сжатия."
    },
    { 
        name: "Telegram", 
        category: "Android", 
        img: "img/Telegram.png", 
        link: "#", 
        description: "Быстрый и безопасный мессенджер."
    },
    { 
        name: "WhatsApp", 
        category: "Android", 
        img: "img/whatsapp.png", 
        link: "#", 
        description: "Один из самых популярных мессенджеров в мире."
    }
];

function displayPrograms(programList) {
    const listContainer = document.getElementById("program-list");
    listContainer.innerHTML = ""; 

    programList.forEach(program => {
        const div = document.createElement("div");
        div.classList.add("program");
        div.innerHTML = `
            <img src="${program.img}" alt="${program.name}">
            <h3>${program.name}</h3>
            <p><strong>${program.category}</strong></p>
            <p class="description">${program.description}</p>
            <button onclick="location.href='${program.link}'">Скачать</button>
        `;
        listContainer.appendChild(div);
    });
}

function searchPrograms() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredPrograms = programs.filter(program => 
        program.name.toLowerCase().includes(query)
    );
    displayPrograms(filteredPrograms);
}

window.onload = () => {
    displayPrograms(programs);
};
