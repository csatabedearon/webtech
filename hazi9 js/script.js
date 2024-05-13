$(document).ready(function () {

    $('#showHeadings').click(function () {
        var headings = $('article h2');
        console.log("Címek száma:", headings.length);
        console.log("Címek:", headings.toArray().map(h => h.textContent));
    });

    var paras = $('article p');
    var index = 0;
    $('.manipulatePara').click(function () {
        if (index >= paras.length) {
            index = 0;
        }

        var currentPara = paras.eq(index);
        if (index % 2 === 0) {
            currentPara.css('font-style', 'italic');
        } else {
            currentPara.addClass('oddColor');
            currentPara.append('<hr>');
        }
        index++;
    });


    $('article h2').click(function () {
        $(this).toggleClass('bordered');
    });
});
