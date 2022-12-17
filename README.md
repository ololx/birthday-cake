<div align="right">
	<a href="https://github.com/ololx/birthday-cake/discussions" target="_blank">
		<img src="https://img.shields.io/github/discussions/ololx/birthday-cake?label=welcome%20to%20discussions&logo=github&style=social" alt="discutions"/>
	</a>
</div> 

# birthday-cake

This is a simple animated birthday cake to congratulate someone. 

[![tag](https://img.shields.io/github/v/tag/ololx/birthday-cake?include_prereleases&logo=github&style=flat)](https://github.com/ololx/birthday-cake/tags) [![release](https://img.shields.io/github/v/release/ololx/birthday-cake?include_prereleases&logo=github&style=flat)](https://github.com/ololx/birthday-cake/releases) 

[![osslifecycle](https://img.shields.io/osslifecycle/ololx/birthday-cake?style=flat)](OSSMETADATA) [![last_commit](https://img.shields.io/github/last-commit/ololx/birthday-cake?logo=github&style=flat)](https://github.com/ololx/birthday-cake/commits) [![release_date](https://img.shields.io/github/release-date/ololx/birthday-cake?logo=github&style=flat)](https://github.com/ololx/birthday-cake/releases)

[![codeql_analysis](https://img.shields.io/github/actions/workflow/status/ololx/birthday-cake/codeql-analysis.yml?branch=main&label=CodeQL&logo=github-actions&style=flat)](https://github.com/ololx/birthday-cake/actions/workflows/codeql-analysis.yml)

[![licence](https://img.shields.io/github/license/ololx/birthday-cake?style=flat)](LICENCE)

![repo_size](https://img.shields.io/github/repo-size/ololx/birthday-cake?logo=github&style=flat) ![languages_code_size](https://img.shields.io/github/languages/code-size/ololx/birthday-cake?logo=github&style=flat) ![languages_count](https://img.shields.io/github/languages/count/ololx/birthday-cake?logo=github&style=flat) ![languages_top](https://img.shields.io/github/languages/top/ololx/birthday-cake?logo=github&style=flat)

![Java Script](https://img.shields.io/badge/JavaScript-323330?logo=javascript&style=flat) ![HTML](https://img.shields.io/badge/HTML-239120?logo=html5&logoColor=white&style=flat) ![CSS](https://img.shields.io/badge/CSS-239120?&logo=css3&logoColor=white&style=flat)

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

This animation demonstrate the usage process.
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
?candles=15
```

Live example here https://ololx.github.io/birthday-cake/?candles=15

- To specify the name in the congratulation message use the param `name`.  *For instance setup the `Green` as a name in the congratulation message :*

```http
?name=Green
```

Live example here https://ololx.github.io/birthday-cake/?name=Green

- To specify the congratulations message use the param  `message`.  *For instance setup the greeting message:*

```http
?message=Happy%20Birthday,%20Green&message=Have%20a%20nice%20Day
```

Live example here https://ololx.github.io/birthday-cake/?message=Happy%20Birthday,%20Green&message=Have%20a%20nice%20Day

## 🗒 Versioning

For the versioning is used [Semantic Versioning](http://semver.org/). For the versions available, see the [changelog](CHANGELOG.md) or the tags on this repository.

## ©️ Authors

* **Alexander A. Kropotin** - *Initial work* - [ololx](https://github.com/ololx).

## 🔏 Licensing

This project is unlicensed - see the [lisence](LICENSE) document for details.
