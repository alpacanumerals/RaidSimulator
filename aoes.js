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
        return Phaser.Math.Distance.Between(pawn.x, pawn.y, boss.x, boss.y) < circleAoeRadius+500;
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