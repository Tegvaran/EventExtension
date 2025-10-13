const extensions = "https://developer.chrome.com/docs/extensions";
const webstore = "https://developer.chrome.come/docs/webstore"


// Adds the text "OFF" (Could be anything here) on the chome extension
// in the dashboard above.
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

chrome.action.OnClicked.addListener( async (tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
        
        // Get the action button badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({tabId: tab.id});
        
        // Next state after click will be the opposite of what the current state is.
        const nextState = prevState === 'ON' ? 'OFF' : 'ON' // if prevSate is ON set it to 'OFF' else set to 'ON' 
        
        // set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });
    }
});