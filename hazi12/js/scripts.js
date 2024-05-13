document.addEventListener("DOMContentLoaded", function() {
    var infoParagraph = document.querySelector('p.info');
    var wordsCount = infoParagraph.textContent.trim().split(/\s+/).length;
    var resultInput = document.querySelector('input#eredmeny');
    resultInput.value = wordsCount;
});
$(document).ready(function() {
    $('input[value="Animate!"]').click(function() {
        var box = $('.anim .box');
        box.animate({ left: '690px' }, 3000, function() {
            box.animate({ left: '10px' }, 1000);
        });
    });
});
