let displayCounter = 1;
let displayCount = document.getElementById("displayCount");

function countDown(count) {
    
    let int = setInterval(function () {
        count--;
        document.getElementById("countdownTimer").innerHTML = `Timer: ${count}`;
        if(count === 0) {
            clearInterval(int);
            displayCount.value = ''
            displayCounter = 1

        };
    }, 1000);

    document.getElementById("setTimer").onclick = function check() {
        if(count === 0){
            countDown(6)
        }
        displayCount.value += `Count: ${displayCounter++}\n`;
        count = 6;
    }
}
countDown(6)
