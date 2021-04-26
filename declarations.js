  // constants for gameplay to refer to. some of these may stop being constants for e.g. boss variance
  const leftPlayBound = 690;
  const rightPlayBound = 1800;
  const topPlayBound = 60;
  const bottomPlayBound = 960;

  const raidZoneCentreX = (leftPlayBound + rightPlayBound)/2

  const raidZone = new Phaser.Geom.Rectangle(leftPlayBound, topPlayBound, rightPlayBound, bottomPlayBound);
  const startZone = new Phaser.Geom.Circle(raidZoneCentreX, 720, 100);

  const damageRange = 150;
  const bossMoveInterval = 5000;
  const bossMechanicInterval = 10000;
  const bossMaxHp = 1000000;
  const pawnDamage = 200;
  const pawnMaxHp = 1000;

  const pi = Math.PI;

  // variables to hold objects that need to persist outside of create/update function calls
  var player;
  var boss;

  var pawns;

  var attackParticle;

  var playerTarget;
  var bossTarget = new Phaser.Math.Vector2();

  var timeText;
  var bossHealthText;
  var mechanicText;

  var nextBossMoveTime;
  var bossHealth;

  var nextMechanicTime;
  var mechanicFireTime;
  var mechanicActive;
  var currentMechanic;

  var mechanics;

  var globalClock;

  var graphics;