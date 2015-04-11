
//Source: http://stackoverflow.com/questions/5529718/how-to-detect-internet-speed-in-javascript


var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 
var downloadSize = 4995374; //bytes

window.onload = function() {
    var oProgress = document.getElementById("progress");
    oProgress.innerHTML = "Loading the image, please wait...";
    window.setTimeout(MeasureConnectionSpeed, 1);
};

function MeasureConnectionSpeed() {
    var oProgress = document.getElementById("progress");
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        oProgress.innerHTML = "Invalid image, or error downloading";
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
    
    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        oProgress.innerHTML = "Your connection speed is: <br />" + 
           speedBps + " bps<br />"   + 
           speedKbps + " kbps<br />" + 
           speedMbps + " Mbps<br />";
    }
}
