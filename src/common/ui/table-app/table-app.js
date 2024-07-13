const tRows = document.querySelectorAll('.table-card__content tr');
console.log('Trows: ', tRows)

tRows.forEach((item, idx) => {
  const t = setTimeout(() => {
    item.classList.remove('move-up');
    clearTimeout(t);
  }, idx * 200 + 500);
})