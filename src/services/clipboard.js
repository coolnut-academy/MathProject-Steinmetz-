export async function copyText(text, successMessage = "Copied") {
  try {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      setCopyStatus(successMessage);
      return true;
    }
    fallbackCopy(text);
    setCopyStatus(`${successMessage} using fallback`);
    return true;
  } catch (error) {
    showFallbackPanel(text);
    setCopyStatus(`Copy failed. Select text from fallback panel. ${error.message}`);
    return false;
  }
}

export function setCopyStatus(message) {
  const target = document.querySelector("#copy-status");
  if (target) {
    target.textContent = message;
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.className = "visually-hidden";
  document.body.append(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  if (!ok) {
    throw new Error("document.execCommand returned false");
  }
}

function showFallbackPanel(text) {
  let panel = document.querySelector("#copy-fallback-panel");
  if (!panel) {
    panel = document.createElement("dialog");
    panel.id = "copy-fallback-panel";
    panel.className = "fallback-dialog";
    panel.innerHTML = `
      <form method="dialog">
        <h2>Fallback source text</h2>
        <p>Select and copy this text manually.</p>
        <textarea rows="12"></textarea>
        <button type="submit">Close</button>
      </form>
    `;
    document.body.append(panel);
  }
  panel.querySelector("textarea").value = text;
  if (panel.showModal) {
    panel.showModal();
  }
}
