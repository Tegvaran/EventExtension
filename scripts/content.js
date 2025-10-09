function renderReadingTime(article) {
    // If there is not article in DOM, dont render anything.
    if (!article) {
        return;
    }

    const text = article.textContent;
    const wordMatchRegExp = /[^s]+/g; 
    const words = text.matchAll(wordMatchRegExp); //Returns iterator

    // Convert the iterator to a list
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);

    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    const heading = article.querySelector("h1");

    const date = article.querySelector("time")?.parentNode;

    (data ?? heading).insertAdjacentElement("afterend", badge);

}

renderReadingTime(document.querySelector("article"));