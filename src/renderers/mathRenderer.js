let pendingTypeset = Promise.resolve();

export async function typesetMath(container) {
  if (!container || !window.MathJax?.typesetPromise) {
    return;
  }

  pendingTypeset = pendingTypeset.then(async () => {
    try {
      if (window.MathJax.typesetClear) {
        window.MathJax.typesetClear([container]);
      }
      await window.MathJax.typesetPromise([container]);
    } catch (error) {
      const warning = document.createElement("div");
      warning.className = "math-render-error";
      warning.textContent = `MathJax render warning: ${error.message}`;
      container.prepend(warning);
    }
  });

  return pendingTypeset;
}
