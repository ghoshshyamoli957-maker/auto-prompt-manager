// Floating Button Injection for Browsers
console.log("Auto Prompt Manager Content Script Loaded.");

const floatBtn = document.createElement('div');
floatBtn.innerHTML = '🤖 Prompt Mgr';
floatBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 999999; background: #4f46e5; color: white; padding: 10px 15px; border-radius: 30px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.3);';
document.body.appendChild(floatBtn);

floatBtn.addEventListener('click', () => {
    alert("Auto Prompt Manager Floating Button Clicked! Ready to paste prompts & media.");
});