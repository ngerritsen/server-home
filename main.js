document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.js-link')
    .forEach(function (link) {
      var port = link.getAttribute('data-port');
      var path = link.getAttribute('data-path');
      var secure = link.getAttribute('data-secure');

      link.href =
        (secure ? 'https://' : 'http://') +
        location.host +
        (port ? ':' + port : '') +
        (path ? path : '');

      link.classList.add('active');
    });
})
