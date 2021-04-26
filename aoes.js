circleAoeRadius = 500;

const circleAoe = {
  name: 'initialise this from the list somehow',
  chargeTime: 5000,
  damage: 600,
  damageAnimation: (_this, boss) => {
    var damageCircle = _this.add.circle(boss.x, boss.y, circleAoeRadius, 0x6666ff);
      _this.tweens.add({
      targets: damageCircle,
      alpha: 0,
      yoyo: false,
      repeat: 0,
      ease: 'Sine.easeInOut'
    })
  },
  checkDamageZone: (pawn, boss) => {
    return Phaser.Math.Distance.Between(pawn.x, pawn.y, boss.x, boss.y) < circleAoeRadius;
  },
  getSafeLocation: (pawn, boss) => {
    // pretend circle is rectangle for tractability
    // pick random x in play area
    // pick y that is not inside rectangle
    const minDamageX = boss.x - circleAoeRadius;
    const maxDamageX = boss.x + circleAoeRadius;

    var y;
    const x = Phaser.Math.RND.between(leftPlayBound, rightPlayBound);
    if (x < minDamageX || x > maxDamageX) {
    y = Phaser.Math.RND.between(topPlayBound, bottomPlayBound);
    } else {
    const minDamageY = boss.y - circleAoeRadius;
    const maxDamageY = boss.y + circleAoeRadius;
    const topMargin = minDamageY - topPlayBound;
    const bottomMargin = bottomPlayBound - maxDamageY;
    if (topMargin <= 0) {
        y = Phaser.Math.RND.between(maxDamageY, bottomPlayBound);
    } else if (bottomMargin <= 0) {
        y = Phaser.Math.RND.between(topPlayBound, minDamageY);
    } else {
        const ratio = topMargin/(topMargin + bottomMargin);
        const above = Math.random() < ratio;
        y = above ? Phaser.Math.RND.between(maxDamageY, bottomPlayBound) : Phaser.Math.RND.between(topPlayBound, minDamageY);
    }
    }
    return new Phaser.Math.Vector2(x, y);
  },
};

const crossWidth = 300;

const crossAoe = {
  name: 'not sure we actually need this',
  chargeTime: 5000,
  damage: 600,
  damageAnimation: (_this, boss) => {
    const margin = crossWidth/2;
    // var damageRect1 = _this.add.rectangle(leftPlayBound, boss.y-margin, rightPlayBound, boss.y+margin, 0x6666ff);
    // var damageRect2 = _this.add.rectangle(boss.x-margin, topPlayBound, boss.x+margin, bottomPlayBound, 0x6666ff);
    var damageRect1 = _this.add.rectangle(raidZoneCentreX, boss.y, rightPlayBound-leftPlayBound, crossWidth, 0x6666ff);
    var damageRect2 = _this.add.rectangle(boss.x, raidZoneCentreY, crossWidth, bottomPlayBound-topPlayBound, 0x6666ff);
    _this.tweens.add({
      targets: damageRect1,
      alpha: 0,
      yoyo: false,
      repeat: 0,
      ease: 'Sine.easeInOut'
    });
    _this.tweens.add({
      targets: damageRect2,
      alpha: 0,
      yoyo: false,
      repeat: 0,
      ease: 'Sine.easeInOut'
      })
  },
  checkDamageZone: (pawn, boss) => {
    const margin = crossWidth/2;
    if (pawn.x > boss.x - margin && pawn.x < boss.x + margin) {
      return true;
    }
    if (pawn.y > boss.y - margin && pawn.y < boss.y + margin) {
      return true;
    }
    return false;
  },
  getSafeLocation: (pawn, boss) => {
    // pick random X not in vertical beam
    // pick random Y not in horizontal beam
    const margin = crossWidth/2;
    var safeX = boss.x;
    var safeY = boss.y;
    while (safeX > boss.x - margin && safeX < boss.x + margin) {
      safeX = Phaser.Math.RND.between(leftPlayBound, rightPlayBound);
    }
    while (safeY > boss.y - margin && safeY < boss.y + margin) {
      safeY = Phaser.Math.RND.between(topPlayBound, bottomPlayBound);
    }
    return new Phaser.Math.Vector2(safeX, safeY);
  }
}