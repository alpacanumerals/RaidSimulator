// the first scene players see
const IntroScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function RaidScene ()
  {
    Phaser.Scene.call(this, { key: 'IntroScene' });
  },

  preload: function () {
    this.load.image('title', 'assets/title.png');
    this.load.image('fullscreen1', 'assets/button-fullscreen-1.png');
    this.load.image('fullscreen2', 'assets/button-fullscreen-2.png');
    this.load.image('start1', 'assets/button-start-1.png');
    this.load.image('start2', 'assets/button-start-2.png');
    this.load.audio('click', 'assets/se-type.wav');
    //this.load.text("data", "assets/_Barks-v1.txt");
    //Testing text loading from another file.
  },

  create: function () {
    //console.log(this.cache.text.get("data")) 
    //Testing text loading from another file.
    this.add.image(960, 540, "title");
    click = this.sound.add("click");
    const hintStyle = {fontFamily: "Trebuchet MS", fontSize: "16px", fill: '#009900' }
    this.add.text(720, 850, "This is an Early Version(tm) but we're happy we got something out.", hintStyle);
    this.add.text(850, 880, "Click on the platform to move.", hintStyle);
    this.add.text(821, 910, "Be near the boss to contribute damage.", hintStyle);

    var fullscreenButton = this.add.image(400, 600, "fullscreen1");
    fullscreenButton.setInteractive();
    fullscreenButton.on('pointerdown', function () {
      fullscreenButton.setTexture("fullscreen2")
      click.play();
    }, this);
    fullscreenButton.on('pointerout', function () {
      fullscreenButton.setTexture("fullscreen1")
      }, {}, this);
    fullscreenButton.on('pointerup', function () {
      fullscreenButton.setTexture("fullscreen1")
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
      }    
      else {
        this.scale.startFullscreen();
      }
    }, this);  
    
    var startButton = this.add.image(400, 700, 'start1');
    startButton.setInteractive();
    startButton.on('pointerdown', function () {
      startButton.setTexture("start2")
      click.play();
    }, {}, this);
    startButton.on('pointerout', function () {
      startButton.setTexture("start1")
    }, {}, this);
    startButton.on('pointerup', function () {
      startButton.setTexture("start1")
      this.time.delayedCall(350, function () {
        this.scene.start('RaidScene');
      }, {}, this);
    }, this);
  },

  update: function (gameTime) {
      globalClock = gameTime;
  },
})