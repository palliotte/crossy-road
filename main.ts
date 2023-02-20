input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (player.get(LedSpriteProperty.X) > 0) {
        player.change(LedSpriteProperty.X, -1)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (player.get(LedSpriteProperty.X) < 4) {
        player.change(LedSpriteProperty.X, 1)
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    player.change(LedSpriteProperty.Y, -1)
})
function cars1() {
    
    basic.pause(randint(100, 1000))
    if (player.isTouching(car1)) {
        game.gameOver()
    }
    
    car1.move(1)
    car1.ifOnEdgeBounce()
}

basic.forever(cars1)
basic.forever(function cars2() {
    
    basic.pause(randint(100, 1000))
    if (player.isTouching(car2)) {
        game.gameOver()
    }
    
    car2.move(1)
    car2.ifOnEdgeBounce()
})
function cars3() {
    
    basic.pause(randint(100, 1000))
    if (player.isTouching(car1)) {
        game.gameOver()
    }
    
    car1.move(1)
    car1.ifOnEdgeBounce()
}

basic.forever(cars1)
let player = game.createSprite(2, 4)
let car1 = game.createSprite(2, 1)
let car2 = game.createSprite(2, 2)
car2 = game.createSprite(2, 3)
let directionx1 = 1
