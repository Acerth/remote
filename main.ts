enum RadioMessage {
    message1 = 49434
}
radio.setGroup(69)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(0)
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(1)
        radio.sendNumber(1)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(2)
        radio.sendNumber(2)
    }
})
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB))) {
        basic.showNumber(3)
        radio.sendNumber(3)
    }
})
