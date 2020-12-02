const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const win = arr.find(game => game.result === "W")
  return win ? win.year : undefined
}
