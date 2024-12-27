document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Бетмен", description: "Глвынй герой  ." },
        { term: "Темный рыцарь", description: "кличка" },
        { term: "Джокер", description: "Главный злодей  " },
        { term: "Возраст", description: "41." },
        { term: "Локация", description: "Готтем" },
        { term: "Автор ", description: "Кирилл Свита." },
        { term: "Сборы фильма", description: "Более 100,000.000р" },
        { term: "Мораль ", description: "Бороться за правду и честность ." },
        { term: "Особенности бэтмена", description: "Высокий интелект, Боевые исскуства, познания в науке " },
        { term: "IQ бетмена ", description: "192 баллов " }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
