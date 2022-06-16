let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    basic.showNumber(X)
    basic.pause(500)
    basic.clearScreen()
    Y = 15
    basic.showNumber(Y)
    basic.pause(500)
    basic.clearScreen()
    X = X + 4
    basic.showNumber(X)
    basic.pause(500)
    basic.clearScreen()
    Y = Y + X
    basic.showNumber(Y)
    basic.pause(500)
    basic.clearScreen()
})
