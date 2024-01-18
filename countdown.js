document.addEventListener("DOMContentLoaded", function () {
    var countDownDate = new Date("jan 31, 2024 12:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Happy Wedding !";
        }
    }, 
    1000);
});