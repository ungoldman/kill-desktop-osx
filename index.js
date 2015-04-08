var execute = require('shelljs').exec

var check = 'defaults read '
var strike = 'defaults write '
var victim = 'com.apple.finder CreateDesktop'
var withJustice = ' false; '
var withHealing = ' true; '
var moveBody = 'killall Finder'
var hideEvidence = { silent: true }

module.exports = doTheDeed

function doTheDeed () {
  var isDead = checkPulse()

  if (isDead) resurrect()
  else kill()
}

function checkPulse () {
  var state = execute(check + victim, hideEvidence)
    .output
    .replace('\n', '')
  return state === 'false'
}

function kill () {
  execute(strike + victim + withJustice + moveBody, hideEvidence)
  console.log('\n (ノಠ益ಠ)ノ︵doʇʞsǝp\n')
}

function resurrect () {
  execute(strike + victim + withHealing + moveBody, hideEvidence)
  console.log('\n desktopノ(º_ºノ)\n')
}
