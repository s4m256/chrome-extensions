chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg?.type !== "rerender-mathjax" || !sender.tab?.id) return;

  chrome.scripting.executeScript({
    target: { tabId: sender.tab.id },
    world: "MAIN",
    func: () => {
      const protect = (el) => {
        el.classList.add("notranslate");
        el.setAttribute("translate", "no");
        if (el.classList.contains("MathJax")) {
          el.style.marginLeft = "0.3em";
          el.style.marginRight = "0.3em";
        }
      };

      if (!window.MathJax?.Hub?.Queue) return;

      window.MathJax.Hub.Queue(["Reprocess", window.MathJax.Hub], () => {
        document
          .querySelectorAll(".MathJax, .MathJax_Preview, .MathJax_Display")
          .forEach(protect);
      });
    },
  }).catch(() => {});
});