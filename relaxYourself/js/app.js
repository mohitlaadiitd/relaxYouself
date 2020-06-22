var innerCircle = document.querySelector(".inner-container");

innerCircle.innerHTML = 'Breathe';

function change() {
    innerCircle.innerHTML = 'Breathe';

    innerCircle.style["animation-name"] = 'small';

    setTimeout(function () {
        innerCircle.innerHTML = 'Hold';

        setTimeout(function () {
            innerCircle.innerHTML = 'Relax';
        }, 1500);
    }, 3000);

}
change();
setInterval(change, 7500);
