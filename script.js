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
      img: "img/Firefoxs.png", 
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
  
  // Создаем карточки для каждой отфильтрованной программы
  filteredPrograms.forEach(program => {
    const programCard = document.createElement("div");
    programCard.classList.add("program");
    programCard.innerHTML = `
      <img src="${program.img}?v=1" alt="${program.name}" loading="lazy" onerror="this.onerror=null;this.src='img/fallback.png';">
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

/**
 * Функция загрузки мобильного меню из файла mobile_menu.html.
 */
function loadMobileMenu() {
  fetch('mobile_menu.html')
    .then(response => {
      if (!response.ok) {
        throw new Error("Не удалось загрузить mobile_menu.html");
      }
      return response.text();
    })
    .then(html => {
      document.getElementById("mobile-menu-container").innerHTML = html;
    })
    .catch(error => {
      console.error("Ошибка при загрузке мобильного меню:", error);
    });
}

/**
 * Функция переключения отображения мобильного меню.
 */
function toggleMobileMenu() {
  const container = document.getElementById("mobile-menu-container");
  container.classList.toggle("open");
}

// Запуск после полной загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
  // Определяем текущую страницу и выбираем категории
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
  displayProgramsByCategory(categories);
  loadMobileMenu();
});
