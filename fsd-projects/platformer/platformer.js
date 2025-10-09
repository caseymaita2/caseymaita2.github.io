$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(500, 0, 20, 290, "blue");
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(700, 0, 40, 300, "yellow");
    createPlatform(900, 0, 60, 310, "green");
    createPlatform(1100, 0, 80, 330, "pink");

    // TODO 3 - Create Collectables

    createCollectable("D Rose", 1350, 50);
    createCollectable("Michael Jordan", 1150, 90);
    createCollectable("LeBron", 950, 130);

    // TODO 4 - Create Cannons

    createCannon("top", 200, 100);
    createCannon("right", 300, 3000);
    createCannon("bottom", 200, 400);
    createCannon("left", 300, 2000);



    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
