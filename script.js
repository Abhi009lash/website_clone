document.addEventListener('DOMContentLoaded', function () {
    window.setTimeout(function () {
        document.querySelectorAll('form.js-static-form').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                var status = form.querySelector('.form-status');
                if (!status) {
                    status = document.createElement('p');
                    status.className = 'form-status';
                    form.appendChild(status);
                }

                status.textContent = 'Thank you. Our team will get back to you shortly.';

                window.setTimeout(function () {
                    form.reset();
                }, 1000);
            });
        });
    }, 0);

    document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            var nav = document.querySelector('.navbar-collapse.show');
            if (nav && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
            }
        });
    });
});
