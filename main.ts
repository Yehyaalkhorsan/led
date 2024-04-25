input.onGesture(Gesture.LogoUp, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(5000)
        basic.showNumber(3)
    }
    basic.showNumber(0)
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
