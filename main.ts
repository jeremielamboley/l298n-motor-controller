input.onButtonPressed(Button.A, function () {
    soundLevel += -10
})
input.onButtonPressed(Button.B, function () {
    soundLevel += 10
})
let soundLevel = 100
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.soundLevel() >= soundLevel) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
