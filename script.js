const subForm = document.querySelector(".sub__form");
const email = document.querySelector(".email_field");
const emailForm = document.querySelector(".email__form");
const submitBtn = document.querySelector(".btn__submit");



subForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email.focus();
        emailForm.classList.add("error");
    } else {
        emailForm.classList.remove("error");
        setTimeout(() => alert('Thank you for subscribed!'), 300);
    }
} )
