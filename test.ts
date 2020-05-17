starterkit.buttonsetup()
basic.showNumber(starterkit.temp())
basic.forever(function () {
    if (starterkit.button()) {
        basic.clearScreen()
        starterkit.rgb(0, 0, 0)
    } else {
        starterkit.dial()
    }
})