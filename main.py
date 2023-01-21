def on_button_pressed_a():
    global soundLevel
    soundLevel += -10
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global soundLevel
    soundLevel += 10
input.on_button_pressed(Button.B, on_button_pressed_b)

soundLevel = 100
basic.show_icon(IconNames.HEART)

def on_forever():
    if input.sound_level() >= soundLevel:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(500)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
