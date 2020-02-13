const updateCCYear = () => {
  document.querySelectorAll('.cc-year').forEach(span => {
    const currentYear = new Date().getUTCFullYear();
    span.innerHTML = currentYear;
  });
};

// header
$('#headerBar').load('/templates/header.html', () => {
  const loc = window.location.pathname;
  $('.language a').removeClass('active');
  if (loc === '/en') {
    $('#en-lang').addClass('active');
  } else {
    $('#ita-lang').addClass('active');
  }

  updateCCYear();
});

// footer
$('#footerBar').load('/templates/footer.html', () => updateCCYear());
