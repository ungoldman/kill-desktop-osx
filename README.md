# kill-desktop-osx

[![npm][1]][2]
[![travis][3]][4]
[![standard][5]][6]
[![downloads][7]][2]

[1]: https://img.shields.io/npm/v/kill-desktop-osx.svg?style=flat-square
[2]: https://www.npmjs.com/package/kill-desktop-osx
[3]: https://img.shields.io/travis/ungoldman/kill-desktop-osx/master.svg?style=flat-square
[4]: https://travis-ci.org/ungoldman/kill-desktop-osx
[5]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[6]: http://standardjs.com/
[7]: https://img.shields.io/npm/dm/kill-desktop-osx.svg?style=flat-square

Kill Your Desktop (OS X only).

**tl;dr:** If you want to hide your desktop on OS X, you can use this module... or just run the following:

```
defaults write com.apple.finder CreateDesktop false
```

## Usage

```
$ npx kill-desktop-osx

 (ノಠ益ಠ)ノ︵doʇʞsǝp
```

No more desktop! You can't drag stuff on there and all the icons are gone. The folder is still there and works normally, it's just no longer ruining your sweet wallpaper and stressing you out and messing up your life.

Feeling remorse? It's ok.

```
$ npx kill-desktop-osx unkill

 desktopノ(º_ºノ)
```

Other valid commands: `resurrect`, `restore`, `revive`, `undo`, `jk`, `I'm sorry`, `my god`, `what have I done`, `this wasn't supposed to happen`, `forgive me`

In fact any words will be fine, because running it a second time will just undo it no matter what.

## Node API

This also works as a regular node module, like so:

```
npm install kill-desktop-osx
```

```js
var killDesktop = require('kill-desktop-osx')
var state = killDesktop()
```

`state` will be `'dead'` if desktop was killed, `'alive'` if desktop was resurrected.

## Confession

This module is just a silly wrapper around these commands:

```
defaults read com.apple.finder CreateDesktop
defaults write com.apple.finder CreateDesktop false
defaults write com.apple.finder CreateDesktop true
killall Finder
```

## License

[ISC](LICENSE.md)
