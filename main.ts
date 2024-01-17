GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    if (points > 9) {
        pointspersec += 1
        points += -10
        kitronik_VIEW128x64.show("You bought 1 cash per sec", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    } else {
        kitronik_VIEW128x64.show("Not enough cash, need 10", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    }
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    if (points > 19) {
        pointsperclick += 1
        points += -20
        kitronik_VIEW128x64.show("You bought 1 cash per click", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    } else {
        kitronik_VIEW128x64.show("Not enough cash, need 20", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    }
})
input.onButtonPressed(Button.A, function () {
    points += pointsperclick
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    if (points > 199) {
        pointsperclick += 10
        points += -20
        kitronik_VIEW128x64.show("You bought 10 cash per click", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    } else {
        kitronik_VIEW128x64.show("Not enough cash, need 200", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    }
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    if (points > 99) {
        pointspersec += 10
        points += -100
        kitronik_VIEW128x64.show("You bought 10 cash per sec", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    } else {
        kitronik_VIEW128x64.show("Not enough cash, need 100", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    }
})
input.onButtonPressed(Button.B, function () {
    if (points > 9) {
        pointspersec += 1
        points += -10
        kitronik_VIEW128x64.show("You bought 1 cash per sec", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    } else {
        kitronik_VIEW128x64.show("Not enough cash, need 10", 2, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        basic.pause(1000)
        kitronik_VIEW128x64.show("", 3, kitronik_VIEW128x64.ShowAlign.Centre)
    }
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    points += pointsperclick
})
let pointspersec = 0
let points = 0
let pointsperclick = 0
pointsperclick = 1
music.play(music.stringPlayable("G - G - A - B - ", 150), music.PlaybackMode.LoopingInBackground)
basic.showArrow(ArrowNames.West)
basic.forever(function () {
    kitronik_VIEW128x64.show(points, 4, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
    kitronik_VIEW128x64.show(pointspersec, 3, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
})
basic.forever(function () {
    points += pointspersec
    basic.pause(1000)
})
basic.forever(function () {
	
})
