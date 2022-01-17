
'use strict';
var forms = document.querySelectorAll('.needs-validation');
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

var myModal = document.querySelector('#addNewGaleria')
var modal = new bootstrap.Modal(myModal, {
    backdrop: 'static'
})

document.querySelector('#addGaleria').addEventListener('click', function () {
    modal.show();
})
