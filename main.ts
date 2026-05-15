// =====================
// GLOBALS
// =====================
let hero: Sprite = null
let keyVase: Sprite = null
let keyFound = false
let health = 3
let maxHearts = 8
let chest: Sprite = null
let currentLevel = 1
let readyToAdvance = false
let hog: Sprite = null
let showedHogTutorial = false
let spawnTiles: tiles.Location[] = []
let canAttack = true

// =====================
// STORY INTRO
// =====================
game.showLongText("Deep in the forest... A hero searches for his wife.", DialogLayout.Full)
game.showLongText("Three ancient vases are scattered across the land.", DialogLayout.Full)
game.showLongText("Find the hidden key to continue your journey...", DialogLayout.Full)

// =====================
// SETUP
// =====================
scene.setBackgroundColor(9)
hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
info.setLife(health)

// =====================
// LOAD LEVEL
// =====================
function loadLevel(level: number) {
    keyFound = false
    readyToAdvance = false

    if (chest) chest.destroy()
    if (hog) hog.destroy()

    const maps = [tilemap`F1`, tilemap`F2`]
    tiles.setTilemap(maps[level - 1] || maps[0])

    spawnTiles = tiles.getTilesByType(assets.tile`transparency1`)

    // 🎵 LEVEL 1 MUSIC — FIXED
    if (currentLevel == 1) {
        music.play(`mySong2`, music.PlaybackMode.LoopingInBackground)
    }

    if (currentLevel == 1) {
        let playerTiles = tiles.getTilesByType(assets.tile`playerSpawn`)
        if (playerTiles.length > 0) {
            tiles.placeOnTile(hero, playerTiles[0])
        } else {
            tiles.placeOnRandomTile(hero, assets.tile`transparency1`)
        }
    } else {
        tiles.placeOnRandomTile(hero, assets.tile`transparency1`)
    }

    spawnVases()
    spawnEnemies()
}   // ✅ THIS BRACE WAS MISSING — FIXED

// =====================
// VASES
// =====================
function spawnVases() {
    let vases: Sprite[] = []

    for (let i = 0; i < 3; i++) {
        let vase = sprites.create(assets.image`vpot`, SpriteKind.Food)
        vases.push(vase)

        if (spawnTiles.length > 0) {
            let spot = spawnTiles[randint(0, spawnTiles.length - 1)]
            tiles.placeOnTile(vase, spot)
        } else {
            vase.setPosition(randint(10, 150), randint(10, 110))
        }
    }

    keyVase = vases[randint(0, vases.length - 1)]
}

// =====================
// ENEMY SPAWN
// =====================
function spawnEnemies() {
    if (currentLevel == 2) {
        hog = sprites.create(assets.image`hog`, SpriteKind.Enemy)

        let enemyTiles = tiles.getTilesByType(assets.tile`enemySpawn`)
        if (enemyTiles.length > 0) {
            tiles.placeOnTile(hog, enemyTiles[0])
        } else {
            hog.setPosition(8, 8)
        }

        if (hog.overlapsWith(hero)) {
            hog.setPosition(24, 8)
        }

        hog.follow(hero, 20)

        if (!showedHogTutorial) {
            showedHogTutorial = true
            game.splash("A wild hog appears! Hold B to defeat!")
        }
    }
}

// =====================
// CHEST
// =====================
function spawnChest() {
    chest = sprites.create(assets.image`chest0`, SpriteKind.Projectile)

    let spawnSpots = tiles.getTilesByType(assets.tile`chestSpawn`)
    if (spawnSpots.length > 0) {
        tiles.placeOnTile(chest, spawnSpots[0])
    } else {
        chest.setPosition(140, 100)
    }
}

// =====================
// BREAK VASE
// =====================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (player, vase) {
    if (vase == keyVase) {
        keyFound = true

        let keySprite = sprites.create(assets.image`key`, SpriteKind.Player)
        keySprite.setPosition(hero.x, hero.y - 10)
        keySprite.lifespan = 800

        game.splash("Key found!")
        spawnChest()
    } else {
        let roll = randint(1, 100)

        if (roll <= 50) {
            health += 1
            game.splash("+1 Heart")
        } else if (roll <= 95) {
            health -= 1
            game.splash("-1 Heart")
        } else {
            health += 2
            game.splash("+2 Hearts!")
        }

        health = Math.min(health, maxHearts)
        info.setLife(health)

        if (health <= 0) game.over(false)
    }

    vase.destroy()
})

// =====================
// COMBAT
// =====================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, enemy) {
    if (controller.B.isPressed() && canAttack) {
        canAttack = false
        enemy.destroy()
        game.splash("Hog defeated!")
        pause(300)
        canAttack = true
    } else if (!controller.B.isPressed()) {
        health -= 1
        info.setLife(health)
        if (health <= 0) game.over(false)
    }
})

// =====================
// CHEST INTERACT
// =====================
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function () {
    if (keyFound && !readyToAdvance) {
        readyToAdvance = true
        game.splash("Press A to continue")
    }
})

// =====================
// NEXT LEVEL
// =====================
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (readyToAdvance && chest && hero.overlapsWith(chest)) {
        readyToAdvance = false
        currentLevel += 1

        if (currentLevel <= 2) {
            game.splash("Next level!")
            chest.destroy()
            loadLevel(currentLevel)
        } else {
            game.showLongText("You descend into the dungeon...\n(To be continued)", DialogLayout.Full)
        }
    }
})

// =====================
// START GAME
// =====================
loadLevel(1)
