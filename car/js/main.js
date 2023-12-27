function start() {
    let domFirstLight = document.getElementById('first_light')
    let domSecondLight = document.getElementById('second_light')
    let domThirdLight = document.getElementById('third_light')

    domFirstLight.style.backgroundColor = '#10b519'
    domSecondLight.style.backgroundColor = '#f7f411'
    domThirdLight.style.backgroundColor = '#a83232'
}

var positionCar1 = 0;
var positionCar2 = 0;
var x1 = 200;
var x2 = 200;

document.addEventListener("keydown", function (event) {
    let domCar_1 = document.getElementById('car_1');
    let domCar_2 = document.getElementById('car_2');

    console.log(event.key);

    switch (event.key) {
        case 'ArrowRight':
            playRaceSound();
          
            positionCar1 += 10;
            domCar_2.style.marginLeft = positionCar1 + 'px';
            x1 -= 2;
            xang1.style.width = x1 + "px";
            break;

        case 'd':
            playRaceSound();
            positionCar2 += 10;
            domCar_1.style.marginLeft = positionCar2 + 'px';
            x2 -= 2;
            xang2.style.width = x2 + "px";
            break;
    }
})

function playRaceSound() {
    var raceAudio = document.getElementById("raceSound");

    // Check if the audio is playing
    if (!raceAudio.paused) {
        // If playing, pause the audio
        raceAudio.pause();
    } else {
        // If paused, play the audio
        raceAudio.play();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Lấy tham chiếu đến cây
    var tree = document.getElementById('tree');

    // Khai báo biến để lưu trữ hướng chuyển động của cây (1 là qua phải, -1 là qua trái)
    var direction = 1;

    // Khai báo hàm thực hiện chuyển động
    function animateTree() {
        // Lấy vị trí hiện tại của cây
        var currentX = parseInt(getComputedStyle(tree).left);

        // Kiểm tra và thay đổi hướng nếu cây chạm đến giới hạn
        if (currentX <= 0) {
            direction = 1;
        } else if (currentX >= 2000) {
            direction = -1;
        }

        // Di chuyển cây theo hướng hiện tại
        tree.style.left = (currentX + direction) + 'px';
    }

    // Thiết lập chuyển động bằng setInterval
    setInterval(animateTree, 50);
});

