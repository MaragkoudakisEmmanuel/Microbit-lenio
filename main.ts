input.onButtonPressed(Button.AB, function () {
    basic.showNumber(90)
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    pins.servoWritePin(AnalogPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(180)
    pins.servoWritePin(AnalogPin.P0, 180)
})
basic.showNumber(0)
pins.servoWritePin(AnalogPin.P0, 0)
basic.pause(2000)
basic.showNumber(180)
pins.servoWritePin(AnalogPin.P0, 180)
basic.pause(2000)
basic.showNumber(90)
pins.servoWritePin(AnalogPin.P0, 90)
basic.forever(function () {
	
})
