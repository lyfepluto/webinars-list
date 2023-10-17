const webinars = [
  {
    id: "webinar-1",
    title: "Современные стратегии продажи недвижимости",
    desc: "Cекреты успешных риелторов",
    url: "webinar-1.html",
  },
  {
    id: "webinar-2",
    title: "Цифровой маркетинг в недвижимости",
    desc: "Методы продвижения",
    url: "webinar-2.html",
  },
  {
    id: "webinar-3",
    title: "Правовые аспекты сделок с недвижимостью",
    desc: "Изменения в законодательстве",
    url: "webinar-3.html",
  },
  {
    id: "webinar-4",
    title: "Искусство оценки недвижимости",
    desc: "Ключевые принципы и методы",
    url: "webinar-4.html",
  },
  {
    id: "webinar-5",
    title: "Инвестиции в недвижимость",
    desc: "Стратегии и перспективы",
    url: "webinar-5.html",
  },
  {
    id: "webinar-6",
    title: "Создание успешного бренда риелтора",
    desc: "Советы по самопродвижению",
    url: "webinar-6.html",
  },
];

function searchWebinars(query) {
  query = query.toLowerCase();
  const results = webinars.filter((webinar) =>
    webinar.title.toLowerCase().includes(query)
  );

  return results;
}

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const query = searchInput.value;
  const searchResults = searchWebinars(query);
  displayResults(searchResults);
});

document.addEventListener('mousedown', function (event) {
  const isSearchInput = event.target === searchInput;
  const isResultsList = event.target === resultsList;
  const isLink = event.target.tagName === 'A'; 

  if (!isSearchInput && !isResultsList && !isLink) {
    resultsList.innerHTML = '';
  }
});

function displayResults(results) {
  resultsList.innerHTML = "";

  if (results.length === 0) {
    resultsList.innerHTML = "<li>Нет результатов</li>";
    return;
  }

  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.className = 'result-list'
    const link = document.createElement("a");
    link.textContent = result.title;
    link.href = result.url;
    listItem.appendChild(link);
    resultsList.appendChild(listItem);
  });
}