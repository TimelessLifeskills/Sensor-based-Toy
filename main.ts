input.onButtonPressed(Button.A, function () {
    soundExpression.hello.play()
    basic.showIcon(IconNames.Happy)
    basic.pause(1500)
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    soundExpression.sad.play()
    basic.showIcon(IconNames.Angry)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    soundExpression.yawn.play()
    basic.showIcon(IconNames.Asleep)
    basic.pause(1500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.happy.play()
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.pause(1500)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    soundExpression.yawn.play()
    basic.showIcon(IconNames.Asleep)
    basic.pause(1500)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    soundExpression.giggle.play()
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(0)
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
})
