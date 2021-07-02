# birthday-cake

This is a simple animated birthday cake to congratulate someone. 

[![status](https://img.shields.io/badge/status-completed-inactive?style=flat-square)](BADGES_GUIDE.md#status) [![version](https://img.shields.io/badge/version-1.1.1-informational?style=flat-square)](BADGES_GUIDE.md#version) [![stable](https://img.shields.io/badge/stable-yes-important?style=flat-square)](BADGES_GUIDE.md#stable)  [![oss lifecycle](https://img.shields.io/badge/oss_lifecycle-archived-important?style=flat-square)](BADGES_GUIDE.md#oss-lifecycle) [![maintenance](https://img.shields.io/badge/maintenance-no-informational?style=flat-square)](BADGES_GUIDE.md#maintenance) [![last release](https://img.shields.io/badge/last_release-June_11,_2021-informational?style=flat-square)](BADGES_GUIDE.md#release-date) [![latest commit](https://img.shields.io/badge/last_commit-July_02,_2021-informational?style=flat-square)](BADGES_GUIDE.md#commit-date)

[![license](https://img.shields.io/badge/license-UNLICENCE-informational?style=flat-square)](LICENSE) 

---

## 📇 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#feature)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [Licensing](#licensing)

##  📖 About

This is a simple animated birthday cake written in Vanilla JavaScript, CSS and HTML. It allows you to set the number of candles, the addressee name to display the phrase "Happy Birthday" or set your own congratulations. It is deployed here https://ololx.github.io/birthday-cake/.

## 📸 Demo

These animation demonstrate the main game process - press any button to fly so long as it possible.
<img src="https://github.com/ololx/birthday-cake/blob/assets/demo/birthday-cake-demo-1.gif?raw=true" align="center" width="100%"/>

## 🎚 Features

- Click on the cake to put out all candles.
- Click on the candle to put it out.

### To Do

- ~~For more information on an upcoming development, please read the todo list.~~ No plans.

### Changelog

- For more information on a releases, a features and a changes, please read the [changelog](CHANGELOG.md) notes.

## 🚦 Getting Started

These instructions allow to get a copy of this project and run it on a local machine.

### Installing

In order to install it is quite simple to clone or download this repository.

### Cloning

For the cloning this repository to a local machine, just use the follows link:

```http
https://github.com/ololx/birthday-cake
```

### Using

To use it is enough to open the `index.html` file in the web-browser.

**It's possible to define the count of candles and addresse name  or set your own congratulations via `request param`.** 

- To specify the candles count use the param `candles`.  *For instance setup the 15 candles on the cake:*

```http
.../index.html?candles=15
```

Live example here https://ololx.github.io/birthday-cake/?candles=15

- To specify the name in the congratulation message use the param `name`.  *For instance setup the `Green` as a name in the congratulation message :*

```http
.../index.html?name=Green
```

Live example here https://ololx.github.io/birthday-cake/?name=Green

- To specify the congratulations message use the param  `message`.  *For instance setup the greeting message:*

```http
.../index.html?message=Happy%20Birthday,%20Green&message=Have%20a%20nice%20Day
```

Live example here https://ololx.github.io/birthday-cake/?message=Happy%20Birthday,%20Green&message=Have%20a%20nice%20Day

## 🗒 Versioning

For the versioning is used [Semantic Versioning](http://semver.org/). For the versions available, see the [changelog](CHANGELOG.md) or the tags on this repository.

## ©️ Authors

* **Alexander A. Kropotin** - *Initial work* - [ololx](https://github.com/ololx).

## 🔏 Licensing

This project is unlicensed - see the [lisence](LICENSE) document for details.
