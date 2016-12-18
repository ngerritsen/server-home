document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-relative-link]')
    .forEach(function (link) {
      var relativeLink = link.getAttribute('data-relative-link');
      link.href = location.origin + relativeLink;
    });
})
