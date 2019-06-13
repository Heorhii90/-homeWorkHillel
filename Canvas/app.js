'use strict';

(function boll() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const ballRadius = document.getElementById('rangeBall');
    const collorBall = document.getElementById('colorPicker');
    const W = canvas.width;
    const H = canvas.height;
    const keyAction = { 37: 'left', 38: 'up', 39: 'right', 40: 'down' };
    const PI = Math.PI;

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let xSpead = 0;
    let ySpead = -2;


    init();

    function init() {
        setInterval(animate, 10);
        addEvent();
    }

    function addEvent() {
        ballRadius.addEventListener('change', circle(x, y, true));
        collorBall.addEventListener('change', circle(x, y, true));
        document.body.addEventListener('keydown', eventKey)
    }

    function eventKey(e) {
        let direction = keyAction[e.keyCode]
        circle(setDirectionMotion(direction))
    }

    function circle(x, y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, W, H);
        ctx.arc(x, y, ballRadius.value, 0, PI * 2);
        ctx.fillStyle = collorBall.value;
        ctx.fill();
    }

    function animate() {
        y += ySpead;
        x += xSpead;
        ctx.clearRect(0, 0, W, H);
        ctx.beginPath();
        circle(x, y, true)
        if (x < (0 + ballRadius.value) || x > (W - ballRadius.value)) {
            xSpead = -xSpead
        }
        if (y < (0 + ballRadius.value) || y > (H - ballRadius.value)) {
            ySpead = -ySpead
        }

    }

    function setDirectionMotion(e) {
        switch (e) {
            case 'up':
                xSpead = 0;
                ySpead = -2;
                break;
            case 'right':
                xSpead = 2;
                ySpead = 0;
                break;
            case 'down':
                xSpead = 0;
                ySpead = 2;
                break;
            case 'left':
                xSpead = -2;
                ySpead = 0;
        }

    }
}());


