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
    toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(20, 700, 175, 10, "blue");
    createPlatform(350, 600, 175, 10, "red");
    createPlatform(650, 500, 175, 10, "yellow");
    createPlatform(950, 400, 175, 10, "green");
    createPlatform(1250, 300, 175, 10, "pink");

    // TODO 3 - Create Collectables

    createCollectable("database", 400, 500);
    createCollectable("diamond", 700, 400);
    createCollectable("grace", 1000, 300);

    // TODO 4 - Create Cannons

    createCannon("top", 400, 2000);
    createCannon("right", 300, 2000);
    createCannon("bottom", 800, 2000);
    createCannon("left", 400, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
