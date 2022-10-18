sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 50)
mySprite.x = 8
mySprite.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ...................cc...
        ...............cccc63c..
        ..............c633336c..
        ..........cc.c6cc33333c.
        .........b55c6c55c33333c
        .........ff5c6c5ff33333c
        .........ff5c6c5ff6333cc
        .........b553c355c6666cc
        ..........b55355c333333c
        .........cc55555bcc3333c
        ........c5545554b55c33c.
        ........b54b4444bb5cbb..
        ........c455b4b5554c45b.
        ........c555c4c555c4c5c.
        ........c5555c5555c4c5c.
        .........ccccccccc..ccc.
        `, mySprite, -150, 0)
    projectile.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    if (info.score() < 10) {
        projectile.vx += 100
    }
})
