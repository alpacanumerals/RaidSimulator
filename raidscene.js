// the gameplay. this should later be able to be called with different boss behaviour
const RaidScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function RaidScene ()
  {
      Phaser.Scene.call(this, { key: 'RaidScene' });
  },

  preload: function () {
      this.load.image('player', 'assets/player.png');
      this.load.image('pawn', 'assets/pawn.png');
      this.load.image('boss', 'assets/forgivencuteness.png');
      this.load.image('moveTarget', 'assets/moveTarget.png');

      this.load.image('spark', 'assets/prt.png');
      this.load.image('bullet1', 'assets/bullet1.png');

      this.load.spritesheet('pawnhair1', 'assets/pawnhair1.png', { frameWidth: 48, frameHeight: 36 });
      this.load.spritesheet('pawnhair2', 'assets/pawnhair2.png', { frameWidth: 48, frameHeight: 36 });
      this.load.spritesheet('pawnhair3', 'assets/pawnhair3.png', { frameWidth: 48, frameHeight: 36 });

      this.load.spritesheet('pawnhead1', 'assets/pawnhead1.png', { frameWidth: 48, frameHeight: 28 });

      this.load.spritesheet('pawnbody1', 'assets/pawnbody1.png', { frameWidth: 48, frameHeight: 36 });
      this.load.spritesheet('pawnbody2', 'assets/pawnbody2.png', { frameWidth: 48, frameHeight: 36 });

      this.load.spritesheet('pawnbottom1', 'assets/pawnbottom1.png', { frameWidth: 48, frameHeight: 36 });
      this.load.spritesheet('pawnbottom2', 'assets/pawnbottom2.png', { frameWidth: 48, frameHeight: 36 });
      this.load.spritesheet('pawnbottom3', 'assets/pawnlegs1.png', { frameWidth: 48, frameHeight: 36 });

      this.load.image("bossroom", "assets/bossroom1.png")

      this.load.audio("se-aoe", "assets/se-attack3-long.wav");
  },

  create: function (gameTime) {
      // currently not used, was hoping to turn into player attacks later
      particles = this.add.particles('spark');

      player = this.physics.add.image(960, 720, 'player');
      playerTarget = this.physics.add.image(960, 720, 'playerTarget');

      //MALCODE STARTS
      //Testing Layout
      const pawnCardStyle = {fontFamily: "Trebuchet MS", fontSize: "16px", fill: '#66ffff' }

      P01 = this.add.text(55, -85, "Player", pawnCardStyle);
      P02 = this.add.text(55, -45, "Player", pawnCardStyle);
      P03 = this.add.text(55, -5, "Player", pawnCardStyle);
      P04 = this.add.text(55, 35, "Player", pawnCardStyle);
      P05 = this.add.text(55, 75, "Player", pawnCardStyle);
      P06 = this.add.text(55, 115, "Player", pawnCardStyle);
      P07 = this.add.text(55, 155, "Player", pawnCardStyle);
      P08 = this.add.text(55, 195, "Player", pawnCardStyle);
      P09 = this.add.text(55, 235, "Player", pawnCardStyle);
      P10 = this.add.text(55, 275, "Player", pawnCardStyle);
      P11 = this.add.text(55, 315, "Player", pawnCardStyle);
      P12 = this.add.text(55, 355, "Player", pawnCardStyle);

      P13 = this.add.text(325, -85, "Player", pawnCardStyle);
      P14 = this.add.text(325, -45, "Player", pawnCardStyle);
      P15 = this.add.text(325, -5, "Player", pawnCardStyle);
      P16 = this.add.text(325, 35, "Player", pawnCardStyle);
      P17 = this.add.text(325, 75, "Player", pawnCardStyle);
      P18 = this.add.text(325, 115, "Player", pawnCardStyle);
      P19 = this.add.text(325, 155, "Player", pawnCardStyle);
      P20 = this.add.text(325, 195, "Player", pawnCardStyle);
      P21 = this.add.text(325, 235, "Player", pawnCardStyle);
      P22 = this.add.text(325, 275, "Player", pawnCardStyle);
      P23 = this.add.text(325, 315, "Player", pawnCardStyle);
      P24 = this.add.text(325, 355, "Player", pawnCardStyle);
      //Let's also throw the arena on.
      room = this.add.image(1245, 540, "bossroom")

      //MALCODE ENDS


      // pawn creation start
      const defineAnims = () => {
      const rate = 1;
      const repeat = 1;
      this.anims.create({
          key: 'hair1down',
          frames: this.anims.generateFrameNumbers('pawnhair1', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });
      this.anims.create({
          key: 'hair2down',
          frames: this.anims.generateFrameNumbers('pawnhair2', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });
      this.anims.create({
          key: 'hair3down',
          frames: this.anims.generateFrameNumbers('pawnhair3', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });

      this.anims.create({
          key: 'head1down',
          frames: this.anims.generateFrameNumbers('pawnhead1', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });

      this.anims.create({
          key: 'body1down',
          frames: this.anims.generateFrameNumbers('pawnbody1', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });
      this.anims.create({
          key: 'body2down',
          frames: this.anims.generateFrameNumbers('pawnbody2', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });

      this.anims.create({
          key: 'bottom1down',
          frames: this.anims.generateFrameNumbers('pawnbottom1', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });
      this.anims.create({
          key: 'bottom2down',
          frames: this.anims.generateFrameNumbers('pawnbottom2', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });
      this.anims.create({
          key: 'bottom3down',
          frames: this.anims.generateFrameNumbers('pawnlegs1', { start: 0, end: 0 }),
          frameRate: rate,
          repeat: repeat
      });
      }

      const composePawn = (container) => {
      const getRandomIndex = (array) => {
          return Math.floor(Math.random() * array.length);
      }
      // get legs
      const legKeys = ['pawnbottom1', 'pawnbottom2', 'pawnbottom3'];
      const legDownAnims = ['bottom1down', 'bottom2down', 'bottom3down'];
      const legIndex = getRandomIndex(legKeys);
      const legKey = legKeys[legIndex];
      var legSprite = this.add.sprite(0, -18, legKey);
      legSprite._downAnimKey = legDownAnims[legIndex];
      container.add(legSprite)

      // get torso
      const torsoKeys = ['pawnbody1', 'pawnbody2'];
      const torsoDownAnims = ['body1down', 'body2down'];
      const torsoIndex = getRandomIndex(torsoKeys);
      const torsoKey = torsoKeys[torsoIndex];
      torsoSprite = this.add.sprite(0, -52, torsoKey);
      torsoSprite._downAnimKey = torsoDownAnims[torsoIndex];
      container.add(torsoSprite)

      // get head
      const headKey = 'pawnhead1';
      headSprite = this.add.sprite(0, -76, headKey);
      headSprite._downAnimKey = 'head1down';
      container.add(headSprite)

      // get hair
      const hairKeys = ['pawnhair1', 'pawnhair2', 'pawnhair3'];
      const hairDownAnims = ['hair1down', 'hair2down', 'hair3down'];
      const hairIndex = getRandomIndex(hairKeys);
      const hairKey = hairKeys[hairIndex];
      var hairSprite = this.add.sprite(0, -72, hairKey);
      hairSprite._downAnimKey = hairDownAnims[hairIndex];
      container.add(hairSprite)
      }

      const addPawnEmitter = (container) => {
      var emitter = particles.createEmitter({
          x: container.x,
          y: container.y,
          speed: 50,
          quantity: 0.01,
          scale: { start: 0.1, end: 0.2 },
      });

      emitter.setSpeed(50);
      emitter.setBlendMode(Phaser.BlendModes.ADD);
      // emitter.pause();

      container.add(emitter);
      }

      pawns = this.physics.add.group();

      var i
      for (i=0; i<8; i++) {
      const pawn = this.add.container();
      this.physics.world.enable(pawn);
      composePawn(pawn);
      // addPawnEmitter(pawn);
      pawns.add(pawn);
      }
      this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 0 }),
      frameRate: 0,
      repeat: 0
      });

      Phaser.Actions.RandomCircle(pawns.getChildren(), startZone);
      pawns.getChildren().forEach(pawn => {
      pawn.targetLocation = new Phaser.Geom.Point(pawn.x, pawn.y);
      pawn.pawnAttackInterval = Phaser.Math.RND.between(250, 400)
      pawn.nextPawnAttackTime = globalClock + pawn.pawnAttackInterval
      pawn.pawnMoveInterval = Phaser.Math.RND.between(100, 400)
      pawn.nextPawnMoveTime = globalClock + pawn.pawnMoveInterval;
      pawn.respondingToMechanic = false;
      pawn.currentHealth = pawnMaxHp;
      pawn.keio = false;
      pawn.knowsMechanic = Math.random() < 0.25 ? true : false;
      }, this);
      // pawn creation end

      boss = this.physics.add.image(960, 200, 'boss')

      this.input.on('pointerdown', function (pointer)
      {
          playerTarget.setPosition(pointer.x, pointer.y);
          this.physics.moveToObject(player, playerTarget, 240);
      }, this
      );

      timeText = this.add.text(15, 510, 'Time: ', { fill: '#00ff00' });
      bossHealthText = this.add.text(15, 530, 'Boss Hp: ', { fill: '#00ff00' });
      mechanicText = this.add.text(15, 550, 'No Mechanic', { fill: '#00ff00' });

      nextBossMoveTime = globalClock + bossMoveInterval;
      bossHealth = bossMaxHp;

      mechanicActive = false;
      nextMechanicTime = globalClock + bossMechanicInterval;
  },

  update: function(gameTime, delta) {
      globalClock = gameTime;
      timeText.setText('Time: ' + globalClock);
      bossHealthText.setText(bossHealth + '/' + bossMaxHp);
      if (bossHealth <= 0) {
      this.scene.start('IntroScene');
      }

      // resolve end-of-mechanic when it is time to fire
      if (mechanicActive && globalClock > mechanicFireTime) {
      currentMechanic.damageAnimation(this, boss);
      this.sound.play("se-aoe");
      // check for damage
      pawns.getChildren().forEach(pawn => {
          if (currentMechanic.checkDamageZone(pawn, boss)) {
          pawn.currentHealth -= currentMechanic.damage;
          }
      }, this);

      pawns.getChildren().forEach(pawn => {pawn.respondingToMechanic = false}, this);

      nextMechanicTime = globalClock + bossMechanicInterval;
      mechanicActive = false;
      mechanicText.setText('No Mechanic')
      }

      // start a mechanic if it is time to charge one
      if (!mechanicActive && globalClock > nextMechanicTime) {
      mechanicActive = true;
      currentMechanic = circleAoe; // this will later need to be from somewhere
      mechanicFireTime = globalClock + currentMechanic.chargeTime;
      nextBossMoveTime = mechanicFireTime + bossMoveInterval;
      mechanicText.setText('Mechanic Active!')
      }

      // a generic function used to check if an object has reached its target and stop it if so
      const checkStop = (object, target) => {
      var distance = Phaser.Math.Distance.Between(object.x, object.y, target.x, target.y);
      if (object.body.speed > 0 && distance < 8)
      {
          object.body.reset(target.x, target.y);
      }
      }

      // move the boss if it is time
      if (gameTime > nextBossMoveTime) {
      nextBossMoveTime = globalClock + bossMoveInterval;
      bossTarget.x = Phaser.Math.RND.between(790, 1700);
      bossTarget.y = Phaser.Math.RND.between(160, 860);
      this.physics.moveToObject(boss, bossTarget, 240);
      }

      // locate the boss damage circle for later reference
      const bossDamageCircle = new Phaser.Geom.Circle(boss.x, boss.y, damageRange);

      // pawns call this to handle their attack
      const pawnAttack = (pawn) => {
      if (!pawn.keio && gameTime > pawn.nextPawnAttackTime) {
          if (bossDamageCircle.contains(pawn.x, pawn.y)) {
          pawn.nextPawnAttackTime = gameTime + pawn.pawnAttackInterval
          // sfx
          bossHealth = bossHealth - pawnDamage;
          }
      }
      }

      // pawns in flocking mode use this to determine their movement
      const flockPawn = (pawn) => {
      var targetX = 0;
      var targetY = 0;
      var flockMaximum = 250;
      const flockMinimum = 10;
      var peerCount = 0;
      var emergencyBreak = 0;
      const surveyPeers = (maxRadius) => {
          pawns.getChildren().forEach(other => {
          const dist = Phaser.Math.Distance.Between(pawn.x, pawn.y, other.x, other.y);
          if (dist < flockMaximum && dist > flockMinimum) {
              peerCount++;
              targetX += other.x;
              targetY += other.y;
          }
          });
      }
      while (peerCount == 0 && emergencyBreak < 3) {
          surveyPeers(flockMaximum);
          flockMaximum = flockMaximum * 2;
          emergencyBreak++;
      }
      if (peerCount == 0) {
          peerCount = 1;
      };
      const target = new Phaser.Math.Vector2(targetX/peerCount, targetY/peerCount);
      pawn.targetLocation = target;
      this.physics.moveToObject(pawn, pawn.targetLocation, 240);
      }

      const movePawn = (pawn) => {
      if (true) { // direction checker later
          // const components = pawn.getAll('_downAnimKey');
          // components.forEach(component => component.anims.play(component._downAnimKey))
      }
      if (!pawn.keio && gameTime > pawn.nextPawnMoveTime) {
          pawn.nextPawnMoveTime = globalClock + pawn.pawnMoveInterval;
          if (mechanicActive) {
          if (pawn.knowsMechanic) { // knows mechanic check
              if (!pawn.respondingToMechanic) {
              pawn.respondingToMechanic = true;
              pawn.targetLocation = currentMechanic.getSafeLocation(pawn, boss);
              this.physics.moveToObject(pawn, pawn.targetLocation, 240);
              }
          } else {
              // if you don't know the mechanic, follow the crowd
              flockPawn(pawn);
          }
          } else {
          if (!bossDamageCircle.contains(pawn.x, pawn.y)) {
              pawn.targetLocation = Phaser.Geom.Circle.Random(bossDamageCircle);
              this.physics.moveToObject(pawn, pawn.targetLocation, 240);
          }
          }
      }
      checkStop(pawn, pawn.targetLocation);
      }

      const checkDeath = (pawn) => {
      if (pawn.currentHealth <= 0) {
          pawn.currentHealth = 0;
          pawn.keio = true;
          // pawn stops moving
          pawn.angle = 90;
          // pawn.body.reset(pawn.x, pawn.y);
      }
      }

      pawns.getChildren().forEach(pawn => {
      checkDeath(pawn);
      pawnAttack(pawn);
      movePawn(pawn);
      }, this);

      checkStop(boss, bossTarget);
      checkStop(player, playerTarget);
  }
});