const searchInput = document.querySelector('.search-input');
const chips = document.querySelectorAll('.chip');
const searchForm = document.querySelector('.search-form');

if (searchInput) {
  searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.borderColor = '#9aa0a6';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.borderColor = '#dadce0';
  });
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    if (searchInput) {
      const value = chip.dataset.query || chip.textContent.trim();
      searchInput.value = value;
      searchInput.focus();
    }
  });
});

if (searchForm) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = searchForm.querySelector('.google-btn');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Searching...';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1200);
    }
  });
}
