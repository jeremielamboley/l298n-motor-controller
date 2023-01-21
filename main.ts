input.onButtonPressed(Button.A, function () {
    soundLevel += -10
    basic.showString("" + (soundLevel))
    if (killSwitch == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (killSwitch == 0) {
        killSwitch = 1
    } else {
        killSwitch = 0
    }
    if (killSwitch == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    soundLevel += 10
    basic.showString("" + (soundLevel))
    if (killSwitch == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
let killSwitch = 0
let soundLevel = 0
soundLevel = 100
killSwitch = 1
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (input.soundLevel() >= soundLevel && killSwitch != 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
