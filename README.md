
<!-- <h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a>
  <br>
  Markdownify
  <br>
</h1>

<h4 align="center">A minimal Markdown Editor desktop app built on top of <a href="http://electron.atom.io" target="_blank">Electron</a>.</h4> -->

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p> -->

<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

## Demo

To see demonstration site: https://danihre.github.io/react-pay-card

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ npm i react-pay-card

# Install dependencies
$ npm install

# Run the app
$ npm start
```
<h1 style="background-color: green" align="center">
  <br>
  CARD COMPONENT
  <br>
  <br>
  <a href="https://github.com/danihre/react-pay-card"><img src="https://raw.githubusercontent.com/DaniHRE/react-pay-card/main/images/card.png" alt="React-Pay-Card"></a>
</h1>

<br>

```js
import chip from './images/chipIcon.svg';
import brand from './images/brandIcon.svg';
import background from './images/background.png';

<Card
  chipIcon={chip} /* SVG Icon*/
  brandIcon={brand} /* SVG Icon*/
  backgroundImage={background} /*PNG, JPEG, etc...*/
/>
```

### Simple Form Card

OBS: Simple Form Card don't have props now. i'll fix it later.

<h1 style="background-color: green" align="center">
  <br>
  CARD COMPONENT
  <br>
  <br>
  <a href="https://github.com/danihre/react-pay-card"><img src="./images/SimpleFormCard.png" alt="React-Pay-Card"></a>
</h1>

```js
import { SimpleFormCard } from 'react-pay-card';

<SimpleFormCard />
```

## Props

| Props        | Example             | Description    |
|--------------|---------------------|----------------|
|cardHolder    | JOHN DOE            | Owner Name     |
|cardNumber    | 0000 0000 0000 0000 | Number         |
|cardMonth     | 10                  | Month Expire   |
|cardYear      | 2022                | Year Expire    |
|cardCVV       | 000                 | CVV Number     |
|cardIcon      | SVG File            | Icon           |
|brandIcon     | SVG File            | Brand Icon     |
|backgroundIcon| PNG File            | BackgroundImage|


## Download

You can [download](https://www.npmjs.com/package/react-pay-card) the latest release package.



## Related

[Danihre](https://github.com/danihre/danihre) - README Personal Profile

## You may also like...

- [JS-Nds](https://github.com/danihre/js-nds) - Nintendo DS Emulator 🎮
- [JSDoom](https://github.com/danihre/jsdoom) - A Playable doom game in js with dosbox api.

## Credits

This software uses the following open source packages:

- [React-Transition Group](http://showdownjs.github.io/showdown/)
- [React](https://github.com/marketplace)
- [Typescript](https://github.com/Microsoft/TypeScript)
- [Sass](https://github.com/sass/dart-sass)

## License

MIT

---

> GitHub [@danihre](https://github.com/Danihre) &nbsp;&middot;&nbsp;
> Instagram [@dani_rod05](https://instagram.com/dani_rod05)
