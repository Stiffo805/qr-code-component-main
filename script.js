const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const qrCodeSizeRangeElement = document.querySelector('#qr-code-size-range');
const cssVariablesRoot = document.querySelector(':root');

qrCodeSizeRangeElement.addEventListener('input', function(event) {
  const value = event.target.value;

  cssVariablesRoot.style.setProperty('--qr-code-scale', 1 + value / 100);
})