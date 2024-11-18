document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('active');
        const isChecked = toggleButton.classList.contains('active');
        console.log(isChecked ? 'تم تفعيل "تذكرني"' : 'تم إلغاء "تذكرني"');
    });
});




var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

document.querySelectorAll(".alertButton").forEach(button => {
    button.addEventListener("click", function() {
        alert("Your message is sent");
    });
});




