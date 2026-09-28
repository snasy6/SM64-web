const canvas = document.getElementById("game");

const gl = canvas.getContext("webgl");

if (!gl) {
    alert("WebGL is not supported!");
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
    );
}

window.addEventListener("resize", resize);

resize();

gl.clearColor(
    0.1,
    0.1,
    0.15,
    1.0
);

function gameLoop() {

    gl.clear(
        gl.COLOR_BUFFER_BIT |
        gl.DEPTH_BUFFER_BIT
    );

    requestAnimationFrame(gameLoop);
}

gameLoop();
