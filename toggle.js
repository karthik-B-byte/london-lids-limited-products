document.querySelectorAll('.product h3').forEach(title => {
  title.addEventListener('click', () => {
    const specs = title.nextElementSibling;
    if (specs && specs.tagName === 'UL') {
      specs.classList.toggle('show');
      title.classList.toggle('active');
    }
  });
});
