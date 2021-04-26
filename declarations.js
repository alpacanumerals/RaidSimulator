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

  const tankRole = 'tank';
  const dpsRole = 'DPS';
  const healerRole = 'healer'

  const pawnTankDamage = 200;
  const pawnTankMaxHp = 2000;

  const pawnDpsDamage = 400;
  const pawnDpsMaxHp = 1000;

  const pawnHealDamage = 200;
  const pawnHealMaxHp = 1000;
  const pawnHealPower = 500;
  const pawnHealTimer = 5000;

  const pi = Math.PI;

  // variables to hold objects that need to persist outside of create/update function calls
  var player;
  var boss;

  var party;

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

  var bossTitle = ["Lv50  Forgiven Cuteness"]

  //pawn variables
  var pawns;
  var twentyThreeNames = [
    "Foofs Mcfluffs",
    "Viewing Cutscene",
    "Brb Cat",
    "Additional Pylons",
    "Wistful Alpaca",
    "Brave Cod",
    "Ron Tsumo",
    "Getty Images",
    "Partly True",
    "Blackmore Nightseige",
    "Richard Dank'ly",
    "Bryn Alstria",
    "Robert Baladorado",
    "Kuro Hime",
    "Dawn Yolrider",
    "Calradio Mask",
    "Mibo Ranceperu",
    "Willis Wayne",
    "Fam Namez",
    "Throck Morton",
    "Selene S'lyvaria",
    "Vivi Vivi'anna",
    "Jana Oltera"
  ];
  var playerName = "Raid' Simulator";
  var cardNames = [];