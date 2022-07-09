$(function () {
    let WAIT_TIME = 700;
    var text = document.querySelector(".new-box__about");
    text.style.display = "none";

    let innsbruck = new City(document.querySelector(".new-box--innsbruck"), document.querySelector(".about-innsbruck"), 'Innsbruck', true);
    let krakow = new City(document.querySelector(".new-box--krakow"), document.querySelector(".about-krakow"), 'Krakow', true);
    let lvov = new City(document.querySelector(".new-box--lvov"), document.querySelector(".about-lvov"), 'Lvov', true);

    var cities = [innsbruck, krakow, lvov]

    function hideCity(city) {
        $(city.object).animate({
            "height": "6em"
        }, WAIT_TIME)
        city.aboutText.style.display = "none";
        city.isHide = true;

    }

    cities.forEach(cityElem => {
        hideCity(cityElem)
        cityElem.object.addEventListener("click", function () {
            if (cityElem.isHide) {

                cities.forEach(el => {
                    if (!el.isHide) {
                        hideCity(el)
                    }
                });


                $(cityElem.object).animate({
                    "height": "16em"
                }, WAIT_TIME)

                cityElem.aboutText.style.display = "block";

                cityElem.isHide = false;
            }
        })
    });


});
