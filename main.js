const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 64 * 16;
canvas.height = 64 * 9;

const player = new Player();

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

//double jump
let jumpCount = 0;
const keys = {
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  right: {
    pressed: false,
  },
};

const animate = () => {
  window.requestAnimationFrame(animate);
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  //prevent the press both directions and stop moving even though pressing other direction, continue
  player.velocity.x = 0;
  if (keys.left.pressed) {
    player.velocity.x = -4;
  } else if (keys.right.pressed) {
    player.velocity.x = 4;
  }
  //check the character doublejumped or not
  if (jumpCount > 1) {
    jumpCount = 0;
  }
  player.draw();
  player.update();
};
animate();
