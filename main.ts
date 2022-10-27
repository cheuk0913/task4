let x = 0
input.onButtonPressed(Button.A, function () {
    x = 0
    while (x <= 4) {
        led.plot(x, 0)
        basic.pause(200)
        basic.clearScreen()
        x += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(x, 0)
        basic.pause(200)
        basic.clearScreen()
        x += 1
    }
    if (x > 4) {
        x += 0
    }
})
