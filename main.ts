input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
})
let photoCell = 0
let knob = 0
basic.forever(function () {
    photoCell = pins.analogReadPin(AnalogPin.P1)
    knob = pins.analogReadPin(AnalogPin.P2)
    music.playTone(knob, photoCell)
})
