export function startLoader(element) {
  element.innerHTML = `<div class="loading-spinner"></div>`;
}

export function stopLoader(element, value) {
  element.textContent = value;
}
