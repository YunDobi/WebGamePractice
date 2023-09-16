window.addEventListener('keydown', (event) => {

  switch (event.key) {
  case 'x':
    //block double jump
    console.log(player.velocity.y, jumpCount)
  
    if (player.velocity.y === 0 || jumpCount === 1) {
      player.velocity.y = -15;
      jumpCount += 1;
    }
    break;

  case 'ArrowLeft':
    keys.left.pressed = true;
    break;

  case 'ArrowRight':
    keys.right.pressed = true;
    break;
  }
});

//stop the moving
window.addEventListener('keyup', (event) => {
  switch (event.key) {
  case 'ArrowLeft':
    keys.left.pressed = false;
    break;

  case 'ArrowRight':
    keys.right.pressed = false;
    break;
  }
});