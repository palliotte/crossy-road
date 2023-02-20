def on_button_pressed_a():
    if player.get(LedSpriteProperty.X) > 0:
        player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if player.get(LedSpriteProperty.X) < 4:
        player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    player.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def cars1():
    global car1, player
    basic.pause(randint(100, 1000))
    if player.is_touching(car1):
        game.game_over()
    car1.move(1)
    car1.if_on_edge_bounce()
basic.forever1(cars1)

def cars2():
    global car2, player
    basic.pause(randint(100, 1000))
    if player.is_touching(car2):
        game.game_over()
    car2.move(1)
    car2.if_on_edge_bounce()
basic.forever2(cars2)

def cars3():
    global car3, player
    basic.pause(randint(100, 1000))
    if player.is_touching(car1):
        game.game_over()
    car3.move(1)
    car3.if_on_edge_bounce()
basic.forever3(cars1)

player = game.create_sprite(2, 4)
car1 = game.create_sprite(2, 1)
car2 = game.create_sprite(2, 2)
car2 = game.create_sprite(2, 3)
directionx1 = 1