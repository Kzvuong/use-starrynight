let projectile2: Sprite = null
scene.setBackgroundColor(9)
info.startCountdown(100)
game.onUpdateInterval(750, function () {
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . f e e e e e . . . . . 
        . . . e f f e e e e f f f . . . 
        . . e e e e e e e e f f f e . . 
        . e e f f f e e e e f f f e e . 
        . e e f f f e e e e e e e e f . 
        e e e f f f e e e e e e e e f f 
        e e e e e e e e e e e e e e e f 
        f e e e e e e e e e e f f f e e 
        f e e e e e e e e e e f f f e e 
        f e e e e e e e e e e f f f e e 
        e e e e f f f e e e e e e e e e 
        . e e e f f f e e e e e e e e . 
        . e e e f f f e e e e e e e e . 
        . . f e e e e e e e e e e e . . 
        . . . f f e e e e e f f e . . . 
        . . . . . e e e e e f . . . . . 
        `, randint(-90, -30), 0)
    projectile2.y = randint(0, scene.screenHeight())
})
