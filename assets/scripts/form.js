const formInputArray = document.querySelectorAll(".idea__input");

formInputArray.forEach(element => {
    element.addEventListener('focus', function a() {
        element.previousElementSibling.classList.add('-filled');
    })
    element.addEventListener('blur', function b() {
        if(!element.value) {
            element.previousElementSibling.classList.remove('-filled');
        }
    })
})