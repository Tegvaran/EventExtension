(async () => {

    // Sends message to the service worker and recieves a tip in response

    const {tip} =  await chrome.runtime.sendMessage({greeting: 'tip'});

    const nav = document.querySelector('.upper-tabs > nav');

    const tipWidget = createDomElement(`
        <button type ='button' popovertarget="tip-popover" popovertargetaction="show" style="padding: 0 12px; height:36px;" >
            <span style ="displau: block; font :var)--devsote-link-font, 500 14px/20px var (--devsite-primary-font-family));"> Tip </span>
        </button>`
    );

    const popover = createDomElement(
        `<div id='tip-popover' popover style="margin: auto;"?${tip}</div>`
    );

    document.body.append(popover);
    nav.append(tipWidget);
})();

function createDomElement(html) {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    return dom.body.firstElementChild;
}