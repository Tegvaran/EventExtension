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

    (date ?? heading).insertAdjacentElement("afterend", badge);

}

renderReadingTime(document.querySelector("article"));


const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        // If a new article was added.
        for (const node of mutation.addedNodes) {
            if (node instanceof Element && node.tagName === "ARTICLE") {
                // Render the reading time for this new article.
            }
        }
    }
});

// https://developer.chrome.com/ is a SPA (Single Page Application) so can
// update the address bar and render new content without reloading. Our content
// script won't be reinjected when this happens, so we need to watch for
// changes to the content.
observer.observe(document.querySelector('devsite-content'), {
  childList: true
});