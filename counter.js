export function setupCounter(element) {
  let counter = 0;
  const setCounter = async (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
    if (count > 0) {
      const tab = await chrome.tabs.query({ active: true });
      chrome.scripting.executeScript({
        target: {
          tabId: tab[0].id,
        },
        func: () => {
          // document.body.style.backgroundColor = "red";
          console.log("aaaaaa");
        },
      });
    }
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
