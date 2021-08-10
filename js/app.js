import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import '@fancyapps/fancybox/dist/jquery.fancybox';
import 'load-google-maps-api';
import Swiper from 'swiper';
import sal from 'sal.js';


(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Sep 16, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());

(function (window, document, undefined) {
    "use strict";

    // List of Video Vendors embeds you want to support
    var players = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]', 'iframe[src*="google.com"]'];

    // Select videos
    var fitVids = document.querySelectorAll(players.join(","));

    // If there are videos on the page...
    if (fitVids.length) {
        // Loop through videos
        for (var i = 0; i < fitVids.length; i++) {
            // Get Video Information
            var fitVid = fitVids[i];
            var width = fitVid.getAttribute("width");
            var height = fitVid.getAttribute("height");
            var aspectRatio = height / width;
            var parentDiv = fitVid.parentNode;

            // Wrap it in a DIV
            var div = document.createElement("div");
            div.className = "fitVids-wrapper";
            div.style.paddingBottom = aspectRatio * 100 + "%";
            parentDiv.insertBefore(div, fitVid);
            fitVid.remove();
            div.appendChild(fitVid);

            // Clear height/width from fitVid
            fitVid.removeAttribute("height");
            fitVid.removeAttribute("width");
        }
    }
})(window, document);


// var track = document.getElementById('track');

// var controlBtn = document.getElementById('play-pause');

// function playPause() {
//     if (track.paused) {
//         track.play();
//         //controlBtn.textContent = "Pause";
//         controlBtn.className = "pause";
//     } else {
//         track.pause();
//         //controlBtn.textContent = "Play";
//         controlBtn.className = "play";
//     }
// }

// controlBtn.addEventListener("click", playPause);
// track.addEventListener("ended", function () {
//     controlBtn.className = "play";
// });



sal({
    threshold: 0.1,
});