input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # . # #
        # # . # #
        `)
    music.playMelody("E B C5 A B G A F ", 120)
})
basic.showString("hi!")
basic.forever(function () {
	
})
