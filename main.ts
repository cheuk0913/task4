let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x, 0)
        x += 1
        basic.pause(200)
    }
    if (x > 4) {
        x = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, y)
        y += 1
        basic.pause(200)
    }
    if (y > 4) {
        y = 0
    }
})
