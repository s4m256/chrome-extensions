chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg?.type !== "rerender-mathjax" || !sender.tab?.id) return;

  chrome.scripting.executeScript({
    target: { tabId: sender.tab.id },
    world: "MAIN",
    func: () => {
      if (!window.MathJax?.Hub?.Queue) return;

      function addSpaces(el) {
        if (!el.classList.contains("MathJax_CHTML")) return;
        const target = el.parentElement?.tagName === "FONT" ? el.parentElement : el;
        const before = target.previousSibling;
        const after = target.nextSibling;
        if (!before || before.textContent?.slice(-1) !== "\u00A0")
          target.before(document.createTextNode("\u00A0"));
        if (!after || after.textContent?.[0] !== "\u00A0")
          target.after(document.createTextNode("\u00A0"));
      }

      window.MathJax.Hub.Queue(["Reprocess", window.MathJax.Hub], () => {
        document
          .querySelectorAll(".MathJax_CHTML:not(.MJXc-processing), .MathJax_Preview, .MathJax_Display")
          .forEach((el) => {
            el.classList.add("notranslate");
            el.setAttribute("translate", "no");
            addSpaces(el);
          });
      });
    },
  }).catch(() => {});
});