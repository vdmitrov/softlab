const programs = [
  { 
      name: "Google Chrome", 
      category: "Windows", 
      img: "img/chrome.png", 
      link: "#", 
      description: "Быстрый браузер с поддержкой всех современных стандартов." 
  },
  { 
      name: "VLC Media Player", 
      category: "Windows", 
      img: "img/vlc.png", 
      link: "#", 
      description: "Медиаплеер с поддержкой всех форматов видео и аудио." 
  },
  { 
      name: "WinRAR", 
      category: "Windows", 
      img: "img/winrar.png", 
      link: "#", 
      description: "Архиватор файлов с поддержкой множества форматов." 
  },
  { 
      name: "Telegram", 
      category: "Android", 
      img: "img/Telegram.png", 
      link: "#", 
      description: "Безопасный мессенджер с поддержкой чатов и звонков." 
  },
  { 
      name: "WhatsApp", 
      category: "Android", 
      img: "img/whatsapp.png", 
      link: "#", 
      description: "Популярный мессенджер для обмена сообщениями и звонков." 
  },
  { 
      name: "Notepad++", 
      category: "Windows", 
      img: "img/notepad++.png", 
      link: "#", 
      description: "Мощный текстовый редактор для программистов." 
  },
  { 
      name: "Firefox", 
      category: "Windows", 
      img: "img/firefox.png", 
      link: "#", 
      description: "Открытый браузер с высоким уровнем безопасности." 
  },
  { 
      name: "Spotify", 
      category: "Windows", 
      img: "img/spotify.png", 
      link: "#", 
      description: "Сервис для стриминга музыки с огромной библиотекой." 
  },
  { 
      name: "Instagram", 
      category: "Android", 
      img: "img/instagram.png", 
      link: "#", 
      description: "Популярная социальная сеть для обмена фотографиями и видео." 
  },
  { 
      name: "Skype", 
      category: "Windows", 
      img: "img/skype.png", 
      link: "#", 
      description: "Программа для видеозвонков и обмена сообщениями." 
  }
];

function displayProgramsByCategory(categories) {
    const programList = document.getElementById("program-list");
    if (!programList) return;

    // Очищаем контейнер перед добавлением новых карточек
    programList.innerHTML = "";

    // Фильтруем программы по переданным категориям
    const filteredPrograms = programs.filter(program => categories.includes(program.category));

    // Для каждой программы создаём карточку и добавляем её в контейнер
    filteredPrograms.forEach(program => {
        const programCard = document.createElement("div");
        programCard.classList.add("program");
        programCard.innerHTML = `
            <img src="${program.img}" alt="${program.name}">
            <h3>${program.name}</h3>
            <p><strong>Категория:</strong> ${program.category}</p>
            <p><strong>Описание:</strong> ${program.description}</p>
            <a href="${program.link}" target="_blank"><button>Скачать</button></a>
        `;
        programList.appendChild(programCard);
    });
}
