# kill-desktop-osx

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/kill-desktop-osx.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/kill-desktop-osx
[travis-image]: https://img.shields.io/travis/ngoldman/kill-desktop-osx.svg?style=flat-square
[travis-url]: https://travis-ci.org/ngoldman/kill-desktop-osx

Kill Your Desktop (OS X only).

**tl;dr:** If you want to hide your desktop on OS X, you can use this module or just run the following:

```
defaults write com.apple.finder CreateDesktop false
```

## Install

```
npm install -g kill-desktop-osx
```

This installs a program called `kill-desktop` that you can use in your terminal to just plain murder a desktop.

## Usage

```
$ kill-desktop

 (ノಠ益ಠ)ノ︵doʇʞsǝp
```

No more desktop! You can't drag stuff on there and all the icons are gone. The folder is still there and works normally, it's just no longer ruining your sweet wallpaper and stressing you out and messing up your life.

Feeling remorse? It's ok.

```
$ kill-desktop unkill

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
