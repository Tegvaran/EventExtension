// function renderAddToCalendarButton()  {
//     // If there is no buttonSpan in DOM, do not render anything.
//     // if (!section) {
//     //     return;
//     // }

//     const addCalendarButton = document.createElement("button");
//     addCalendarButton.textContent = "Add to Calendar";
//     addCalendarButton.id = "tegvaranSoochButton"

//     const buttonSpan = document.getElementsByClassName("x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xc5r6h4 xqeqjp1 x1phubyo x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk xdl72j9 x2lah0s x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1fmog5m xu25z0z x140muxe xo1y3bh x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1mywscw x1y1aw1k xf159sx xwib8y2 xmzvs34")[0].parentElement;

//     buttonSpan.insertAdjacentElement("afterbegin", addCalendarButton);


//     // This gets the button span element. 
//     // Can  use this to add a button before or after the element
// }   

// renderAddToCalendarButton();
// renderAddToCalendarButton(document.querySelector(".x6s0dn4 x78zum5"))


// function renderReadingTime(article) {
//     // If there is not article in DOM, dont render anything.
//     if (!article) {
//         return;
//     }

//     const text = article.textContent;
//     const wordMatchRegExp = /[^s]+/g; 
//     const words = text.matchAll(wordMatchRegExp); //Returns iterator

//     // Convert the iterator to a list
//     const wordCount = [...words].length;
//     const readingTime = Math.round(wordCount / 200);

//     const badge = document.createElement("p");
//     badge.classList.add("color-secondary-text", "type--caption");
//     badge.textContent = `⏱️ ${readingTime} min read`;

//     const heading = article.querySelector("h1");

//     const date = article.querySelector("time")?.parentNode;

//     (date ?? heading).insertAdjacentElement("afterend", badge);

// }

// renderReadingTime(document.querySelector("article"));


// const observer = new MutationObserver((mutations) => {
//     for (const mutation of mutations) {
//         // If a new article was added.
//         for (const node of mutation.addedNodes) {
//             if (node instanceof Element && node.tagName === "ARTICLE") {
//                 // Render the reading time for this new article.
//             }
//         }
//     }
// });

// // https://developer.chrome.com/ is a SPA (Single Page Application) so can
// // update the address bar and render new content without reloading. Our content
// // script won't be reinjected when this happens, so we need to watch for
// // changes to the content.
// observer.observe(document.querySelector('devsite-content'), {
//   childList: true
// });

const addCalendarButton = document.createElement("button");
addCalendarButton.textContent = "Add to Calendar";
addCalendarButton.id = "tegvaranSoochButton"

const buttonSpan = document.getElementsByClassName("x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xc5r6h4 xqeqjp1 x1phubyo x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk xdl72j9 x2lah0s x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak x2lwn1j xeuugli x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1fmog5m xu25z0z x140muxe xo1y3bh x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1mywscw x1y1aw1k xf159sx xwib8y2 xmzvs34")[0].parentElement;

buttonSpan.insertAdjacentElement("afterbegin", addCalendarButton);