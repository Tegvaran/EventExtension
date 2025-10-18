// Fetch a tip and save it in storage.
const updateTip = async () => {
    const response = await fetch('https://chrome.dev/f/extension_tips/');
    const tips = await response.json();
    const randomIndex = Math.floor(Math.random() * tips.length);
    return chrome.storage.local.set({tip: tips[randomIndex]});
};

const ALARM_NAME = 'tip';

async function createAlarm() {
    const alarm = await chrome.alarms.get(ALARM_NAME);

    if (typeof alarm === 'undefined') {
        chrome.alarms.create(ALARM_NAME, {
            delayInMinutes: 1,
            periodInMinutes: 1440
        });
        updateTip();
    }
}

createAlarm();

// Update tip once a day 
chrome.alarms.onAlarm.addListner(updateTip);