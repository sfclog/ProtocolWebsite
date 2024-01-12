var i = 1;
document.addEventListener('DOMContentLoaded', function () {
    var intervalId = setInterval(function () {
        if (i > 500) {
            document.getElementById("logo").style.opacity = "0"; // Tăng độ trong suốt để ẩn logo
            clearInterval(intervalId);
            setTimeout(function () {
                document.getElementById("logo").style.display = "none"; // Ẩn logo khi đã trượt đủ
                document.getElementById("title").style.display = "block"; // Hiện title
                logo_up();
            }, 1000);
            return;
        }
        document.getElementById("logo").style.left = i * 2 + "px";

        i++;
    }, 10);
});


function logo_up() {

    var i = 50;
    var intervalId = setInterval(function () {
        i--;
        if(i < 30) {
         clearInterval(intervalId);
         document.getElementById("loadingbar").style.display = "flex";
         barin();
        } else {
          document.getElementById("title").style.top = i + "%";
        }

    }, 10);

}
function barin() {
    var i = 0;
    var intervalId = setInterval(function () {
        i++;
        if(i > 100) {
            clearInterval(intervalId);

            setTimeout(function () {
                document.getElementsByClassName("loading").item(0).style.display = "none";
                document.getElementsByClassName("realbody").item(0).style.display = "flex";

            }, 2000);


        } else {
            document.getElementById("loadingbar-in").style.width = i + "%";

        }
    }, 10);

}

