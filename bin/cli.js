#!/usr/bin/env node

var killDesktop = require('..')

var state = killDesktop()

if (state === 'dead') console.log('\n (ノಠ益ಠ)ノ︵doʇʞsǝp\n')
if (state === 'alive') console.log('\n desktopノ(º_ºノ)\n')
