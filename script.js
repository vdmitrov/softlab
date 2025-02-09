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
      img: "img/not.png", 
      link: "#", 
      description: "Мощный текстовый редактор для программистов." 
  },
  { 
      name: "Firefox", 
      category: "Windows", 
      img: "img/firefoxs.png", 
      link: "#", 
      description: "Открытый браузер с высоким уровнем безопасности." 
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

/**
 * Отображает карточки программ, фильтруя их по заданным категориям.
 * @param {Array} categories - массив категорий для фильтрации.
 */
function displayProgramsByCategory(categories) {
  const programList = document.getElementById("program-list");
  if (!programList) return;
  
  // Очищаем контейнер карточек
  programList.innerHTML = "";
  
  // Фильтруем программы по заданным категориям
  const filteredPrograms = programs.filter(program => categories.includes(program.category));
  
  // Для каждой программы создаём карточку и добавляем её в контейнер
  filteredPrograms.forEach(program => {
    const programCard = document.createElement("div");
    programCard.classList.add("program");
    programCard.innerHTML = `
      <img src="${program.img}" alt="${program.name}" loading="lazy">
      <h3>${program.name}</h3>
      <p><strong>Категория:</strong> ${program.category}</p>
      <p><strong>Описание:</strong> ${program.description}</p>
      <a href="${program.link}" target="_blank"><button>Скачать</button></a>
    `;
    programList.appendChild(programCard);
  });
}

/**
 * Функция поиска по карточкам программ.
 * При вводе текста в поле с id "search" скрывает карточки, в которых текст не содержит введенный запрос.
 */
function searchPrograms() {
  const query = document.getElementById("search").value.toLowerCase();
  const programCards = document.querySelectorAll(".program");
  
  programCards.forEach(card => {
    if (card.innerText.toLowerCase().includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Запуск после полной загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
  // Определяем текущий путь и выбираем категории
  const path = window.location.pathname.toLowerCase();
  let categories = [];
  
  if (path.includes("android.html")) {
    categories = ["Android"];
  } else if (path.includes("linux.html")) {
    categories = ["Linux"];
  } else if (path.includes("windows.html")) {
    categories = ["Windows"];
  } else {
    categories = ["Windows", "Android", "Linux"];
  }
  
  // Отображаем программы для выбранных категорий
  displayProgramsByCategory(categories);
});
