  // constants for gameplay to refer to. some of these may stop being constants for e.g. boss variance
  const leftPlayBound = 690;
  const rightPlayBound = 1800;
  const topPlayBound = 60;
  const bottomPlayBound = 960;

  const raidZoneCentreX = (leftPlayBound + rightPlayBound)/2
  const raidZoneCentreY = (topPlayBound + bottomPlayBound)/2

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

  var particles;

  var attackParticle;

  var playerTarget;
  var bossTarget = new Phaser.Math.Vector2();

  var mechanicText;
  var playerDamageText;

  var nextBossMoveTime;
  var bossHealth;

  var nextMechanicTime;
  var mechanicFireTime;
  var mechanicActive;
  var currentMechanic;
  var mechanicCycleIndex;

  var bossAttackList;
  var mechanicList;

  var raidEndTime;
  var raidResetTime;

  var emitter;

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
    "Jana Oltera",
    //post-23 brute forcing
    "Statistical Mechanics",
    "Bankruptcy Protection",
    "Legal Representation",
    "Alvianne Wilson",
    "Milly Cook",
    "Joel Ravendark",
    "Rowan Mirrorlake",
    "Anastasia ",
    "Sarah Good",
    "Abigail Williams'",
    "Felxi Mentos",
    "Case Westphalia",
    "Evangeline James",
    "Birb Apprentice",
    "Graceful Alpaca",
    "Majestic Alpaca",
    "Wind-up Astolfo",
    "Wind-up Catboy",
    "Wind-up Kirito",
    "Wind-up Lelouch",
    "Fear Reaper",
    "Lalabrea Hahabread",
    "Wineseller Winecellar",
    "Elincia Eve",
    "Accidents Happen",
    "Viewing Catscene",
    "Windows Xp",
    "Vorlof Halderac",
    "Dylan Seaspear",
    "Yuriko Dragonsong",
    "Darth Sephiroth",
    "Forty Hortensia",
    "John Darthman",
    "John Ricardo",
    "Bizjojo Memejojo",
    "Charles Xavierx'",
    "Bruce' Wayne'",
    "Gothicjedi Darkshadow",
    "Break Glass",
    "Hildebrand Lockefor",
    "Ichiro Kururugi",
    "Mutsu Akari",
    "Ren Dynler",
    "Yorham Pickford",
    "Gordo Allegretto",
    "Serene Holodeath",
    "Haurchefant Portraits",
    "Doggo Barko",
    "Sasuke' Uchiha'",
    "Yeet Yeetsov",
    "Ancient Flarewipe",
    "Filthy Normie",
    "Jason Dunkirk",
    "Marco Davila",
    "Arran Trujillo",
    "Hawkeye Braithwaite",
    "Zachariah Page",
    "Steady Crits",
    "Gary Abbas",
    "Orbert Khan",
    "Farida Aeringsley",
    "Jimena Canmore",
    "Teruin Lannister",
    "Elodie Nova'Stark",
    "Wind-up Hanse'davion",
    "Nidhogg Warsiege",
    "Jane Kitefiend",
    "Cinder Rise",
    "Corvo West",
    "Rateup Isalie",
    "Tsundere Yandere",
    "Keaton Kyrfall",
    "Nathaniel Nightblade",
    "Randall Greywords",
    "Christian Potato",
    "Steinus Swordbreaker",
    "Yuna Arbourlight",
    "Kojima's Demon",
    "Laplace's Demon",
    "Descartes' Demon"
  ];
  var playerName = "Raid' Simulator";
  var cardNames = [];

  var attacksA = [
    "Dancing Mad",
    "Douncing Mad",
    "Prancing Mad",
    "Pouncing Mad",
    "Gyring Mad",
    "Gymbling Mad"
  ]
  var attacksB = [
    "Whirling Whack",
    "Flamboyant Flail",
    "Reckless Roll",
    "Exuberant Excess",
    "Thundering Thump",
    "Heedless Headbutt"
  ] 
  var attacksC = [
    "Cheek Star Cannon",
    "Eye Beams",
    "Pom Blaster",
    "Eary Slash"
  ]